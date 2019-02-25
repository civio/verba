<template>
  <div class="row" v-show="query !== ''">
    <div class="col-lg-8 col-xl-6 offset-lg-2 offset-xl-3 mb-5">
      <div v-if="loading">
        <div class="loader-animation mt-5"></div>
      </div>
      <div v-else-if="results">
        <p class="my-4">
          <!-- Add Page N for -->
          {{ results.length.toLocaleString() }} results for
          <strong>{{ query }}</strong>
        </p>
        <ul class="list-group mb-3">
          <li class="list-group-item" v-for="item in results.results" :key="item.id">
            <span class="badge badge-primary">
              <svg class="icon-date" width="12" height="12" viewBox="0 0 24 24">
                <path
                  d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
                ></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </svg>
              {{ item.programme.date | formatDate }}
            </span>
            <span class="date-hour text-primary">TD {{ item.programme.date.substring(11, 13) }}h</span>
            <span class="badge badge-secondary float-right">
              <svg class="icon-time" width="12" height="12" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
                ></path>
              </svg>
              {{ item.time_start | formatTime }} - {{ item.time_end | formatTime }}
            </span>
            <p class="item-content" v-html="highlight(item.content, query)"></p>
          </li>
        </ul>
        <Pagination
          :size="Math.ceil(results.length / 50)"
          :current="currentPage"
          @change="onPaginationChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Pagination from './Pagination.vue'

export default {
  name: 'Results',
  components: { Pagination },
  data() {
    return {
      currentPage: 0
    }
  },
  computed: {
    ...mapState(['query', 'loading', 'results'])
  },
  methods: {
    highlight(content, word) {
      const re = new RegExp(word, 'gi')
      return content.replace(re, match => `<mark>${match}</mark>`)
    },
    onPaginationChange(page) {
      this.currentPage = page
    }
  }
}
</script>

<style lang="scss">
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
    border: 5px solid mix(#007bff, white, 20%);
    border-top: 5px solid #007bff; // primary color
    border-radius: 50%;
    width: 48px;
    height: 48px;
    animation: spin 1.2s ease-in-out infinite;
  }
}
.list-group .badge {
  font-size: 0.813rem;
  font-weight: 400;
  line-height: 1rem;
}
.list-group-item .date-hour {
  margin-left: 0.5rem;
  font-size: 0.875rem;
}
.item-content {
  margin-top: 0.75rem;
  margin-bottom: 0.35rem;
  mark {
    background-color: mix(yellow, white, 50%);
  }
}
.icon-date,
.icon-time {
  fill: white;
  vertical-align: top;
  margin-top: 2px;
  margin-right: 2px;
}
.icon-time {
  margin-top: 3px;
}
</style>
