<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-show="query !== ''" class="pb-2 verba-results-links">
    <div v-if="loading">
      <div class="loader-animation my-5"></div>
    </div>
    <div v-else-if="results">
      <section class="results-dataviz">
        <AreaChart v-if="showChart" :data="aggregations" :period="getPeriod" />
      </section>

      <section class="results-links">
        <p class="my-4">
          <span
            v-html="
              $t('results.list.count', {
                total: results.length.toLocaleString(),
                query: query,
              })
            "
          ></span>
          (
          <a href="#" @click="onDownloadClick()">CSV</a>)
          <span v-if="results.length > 50" class="text-secondary">
            &nbsp;&mdash;&nbsp;
            {{
              $t('results.list.page', {
                p: resultsPage + 1,
                total: Math.ceil(results.length / 50),
              })
            }}
          </span>
        </p>
        <div class="results-list mb-4">
          <div v-for="(items, id) in resultsByProgramme" :key="id" class="card">
            <div class="card-header">
              <svg class="icon-date" width="14" height="14" viewBox="0 0 24 24">
                <path
                  d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
                />
                <path fill="none" d="M0 0h24v24H0z" />
              </svg>
              <!-- Add link to programme -->
              <!-- <div class="programme-title"> -->
              <strong @click="onGoToProgrammeClick(items)">{{
                formatDate(items[0].programme.date)
              }}</strong>
              | TD {{ items[0].programme.date.substring(11, 13) }}h
              <!-- </div> -->
            </div>
            <div v-for="item in items" :key="item.id" class="card-body">
              <span class="badge badge-secondary">
                <svg
                  class="icon-time"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
                  />
                </svg>
                {{ item.time_start | formatTime }} -
                {{ item.time_end | formatTime }}
              </span>
              <span
                class="badge badge-secondary video-link"
                @click="onGoToVideoBtnClick(item)"
              >
                {{ $t('results.item.goToVideo') }}
                <svg
                  class="icon-play"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
              </span>
              <span
                class="badge badge-secondary video-link"
                @click="onShowContextBtnClick(item)"
                >{{ $t('results.item.showContext') }}</span
              >
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p class="item-content" v-html="highlight(item.content)"></p>
              <span
                v-for="(entity, key) in item.entities"
                :key="key"
                class="badge badge-entitie"
                >{{ entity.type }}/{{ entity.text }}</span
              >
            </div>
          </div>
        </div>
        <Pagination
          :size="Math.ceil(results.length / 50)"
          :current="resultsPage"
          @change="onPaginationChange"
        />
      </section>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import AreaChart from './AreaChart.vue'
import Pagination from './Pagination.vue'

export default {
  name: 'Results',
  components: { AreaChart, Pagination },
  data() {
    return {
      currentPage: 0,
      period: false,
    }
  },
  computed: {
    ...mapState([
      'query',
      'queryDate',
      'queryTerms',
      'loading',
      'results',
      'resultsPage',
    ]),
    aggregations() {
      return this.results && this.results.aggregations
        ? this.queryDate
          ? this.results.aggregations.map(this.getAggregationObject).filter(
              d => d.x >= this.queryDate.from && d.x <= this.queryDate.to // apply date filter
            )
          : this.results.aggregations.map(this.getAggregationObject)
        : []
    },
    getPeriod() {
      // Aggregate by weeks by default
      if (this.queryDate === null) return 'weeks'

      // When a date range is defined, aggregate by days if range is less than a month
      const days = this.queryDate.to.diff(this.queryDate.from, 'days')
      return days <= 30 ? 'days' : 'weeks'
    },
    resultsByProgramme() {
      // Group results array by programme.id **keeping the existing order**.
      // We rely on the fact that results come pre-ordered, so programme ids are consecutive.
      // Note that using Array.reduce() or similar doesn't guarantee the resulting order.
      const groups = []
      this.results.results.forEach(item => {
        const lastProgrammeId =
          groups.length > 0 ? groups[groups.length - 1][0].programme.id : -1
        if (item.programme.id === lastProgrammeId) {
          groups[groups.length - 1].push(item)
        } else {
          groups.push([item])
        }
      })
      return groups
    },
    showChart() {
      // Hide chart if no data or date filter range is a single day (queryDate.from == queryDate.to)
      return (
        this.aggregations.length > 1 &&
        (!this.queryDate || this.queryDate.from !== this.queryDate.to)
      )
    },
  },
  methods: {
    ...mapActions(['setResultsPage', 'setCurrentResult']),
    highlight(content) {
      this.queryTerms.forEach(term => {
        const re = new RegExp('\\b' + term + '\\b', 'gi')
        content = content.replace(re, match => `<mark>${match}</mark>`)
      })
      return content
    },
    onPaginationChange(page) {
      window.scrollTo(0, 0) // scroll to top
      this.setResultsPage(page)
    },
    onGoToVideoBtnClick(result) {
      window.open(result.link, '_blank')
    },
    onShowContextBtnClick(result) {
      this.setCurrentResult(result)
    },
    onDownloadClick() {
      const params = { q: this.query, size: 20000 }
      if (this.queryDate) {
        params.date_from = moment(this.queryDate.from).format('YYYY-MM-DD')
        params.date_to = moment(this.queryDate.to).format('YYYY-MM-DD')
      }
      window.open(Vue.verbaDownloadURL(params), '_blank')
    },
    getAggregationObject(d) {
      const key = Object.keys(d)[0]
      return { x: new Date(key), y: d[key] }
    },
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY')
    },
    onGoToProgrammeClick(items) {
      const programme_id = items[0].programme.id
      const current_start_time = items[0].time_start
      const URL = `/programmes/${programme_id}#${current_start_time}`

      window.open(URL, '_blank')
    },
  },
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.verba-results {
  text-align: left;
}

.loader-animation {
  position: relative;
  height: 48px;
  text-align: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -24px;
    border: 5px solid mix($color-neutral-1000, white, 20%);
    border-top: 5px solid $color-neutral-1000;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    animation: spin 1.2s ease-in-out infinite;
  }
}

.results-links {
  a {
    color: $color-highlight-1;
    font-weight: 800;
  }
}

.results-list {
  .card {
    border-radius: 0;
    border-top: none;
    margin-bottom: 2rem;
    background-color: transparent;
    border: 1px solid rgba($color-neutral-1000, 0.3);
  }
  .card-header {
    color: $color-neutral-1000;
    background-color: rgba($color-neutral-1000, 0.1);
    font-size: 0.875rem;
    font-weight: 300;
    border-radius: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;

    cursor: pointer;
    text-decoration: underline;
    strong {
      color: $color-neutral-1000;
      font-weight: 600;
      padding: 0 4px;
    }
  }

  .card-body {
    padding-bottom: 1rem;
    padding-top: 0;
  }

  .badge {
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 1rem;
    opacity: 0.9;
    // opacity: 0.3;
    margin-right: 0.5rem;
  }
  .badge-secondary {
    color: $color-neutral-1000;
    background-color: rgba($color-neutral-1000, 0.15);
  }
  .badge-entitie {
    display: none;
  }

  .date-hour {
    margin-left: 0.5rem;
    font-size: 0.875rem;
  }

  .icon-date,
  .icon-time,
  .icon-play {
    fill: currentColor;
    vertical-align: top;
    margin-top: 2px;
    margin-right: 2px;
  }
  .icon-date {
    margin-right: 4px;
  }
  .icon-play {
    margin-top: 1px;
    margin-left: 2px;
    margin-right: 0;
  }
  .item-content {
    // Mobile first
    margin-top: 2.5rem;
    margin-bottom: 0;

    // Tablets
    @media all and (min-width: 768px) {
      margin-top: 0.5rem;
    }

    mark {
      font-weight: 600;
      background-color: $color-neutral-1000;
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  .video-link {
    // Mobile first
    display: block;
    float: right;
    cursor: pointer;

    // Tablets
    @media all and (min-width: 768px) {
      display: none;

      // Posibility of showing the links on PC:
      // display: block;
      // opacity: 0.2;
    }
  }
  .card:hover .video-link {
    display: block;

    // Posibility of showing the links on PC:
    // opacity: 0.9;
  }
}

.results-dataviz {
  margin-bottom: 7rem;
  padding-top: 3rem;
}
</style>
