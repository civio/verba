<template>
  <main>
    <div class="verba-programmes">
      <div id="menu-filter">
        <ul class="years-list">
          <li
            v-for="year in years"
            :key="year.num"
            :class="{ 'is-clicked': year.num === currentYear }"
          >
            <a :data-value="year.num" @click="seeYear(year.num)">{{
              year.num
            }}</a>
          </li>
        </ul>
        <ul v-if="currentYear != ''" class="months-list">
          <li
            v-for="month in elapsedMonths(months)"
            :key="month.name"
            :class="{ 'is-clicked': month.num === currentMonth }"
            :data-ts="month.ts"
          >
            <a :data-value="month.num" @click="seeMonth(month.num)">{{
              month.name
            }}</a>
          </li>
        </ul>
      </div>
      <img
        class="verba-microfilms-image"
        src="../src/images/02Microfilms-es.png"
        alt="Human radar old illustration"
      />
      <!-- Film strips -->
      <ul class="verba-films-strip">
        <li v-for="(programme, key) in subList" :key="key">
          <router-link
            :to="{ name: 'programme-details', params: { id: programme.id } }"
            class="nav-link verba-film-item"
          >
            <figure class="programme-img">
              <img :src="programme | imageURL" />
            </figure>
            <span class="strip-aside">{{ programme.title }}</span>
          </router-link>
        </li>
        <button
          v-if="subList < filterProgramme"
          class="seeMoreBtn"
          @click="seeMore"
        >
          Ver más ({{
            (filterProgramme.length - subList.length)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          }}
          resultados)
        </button>
      </ul>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      programmeList: [],
      filterProgramme: [],
      subList: [],
      limit: 70,
      inc: undefined,
      today: new Date(),
      years: [
        { num: '2014' },
        { num: '2015' },
        { num: '2016' },
        { num: '2017' },
        { num: '2018' },
        { num: '2019' },
        { num: '2020' }
      ],
      months: [
        { num: '1', name: 'ene', ts: '' },
        { num: '2', name: 'feb', ts: '' },
        { num: '3', name: 'mar', ts: '' },
        { num: '4', name: 'abr', ts: '' },
        { num: '5', name: 'may', ts: '' },
        { num: '6', name: 'jun', ts: '' },
        { num: '7', name: 'jul', ts: '' },
        { num: '8', name: 'ago', ts: '' },
        { num: '9', name: 'sep', ts: '' },
        { num: '10', name: 'oct', ts: '' },
        { num: '11', name: 'nov', ts: '' },
        { num: '12', name: 'dic', ts: '' }
      ],
      currentYear: '',
      currentMonth: '',
      limitDate: undefined
    }
  },

  mounted() {
    Vue.verbaAPI('fetchProgrammeList', null, response => {
      this.inc = this.limit
      this.programmeList = response.data
      this.seeYear(this.get_today_year())
      this.seeMonth(this.get_today_month())
      this.limitDate = this.get_limit_date()
    })
  },

  methods: {
    elapsedMonths(months) {
      return months.filter(month => this.today.getTime() >= month.ts)
    },

    seeMore() {
      if (this.inc < this.filterProgramme.length) {
        this.inc += this.limit
        this.subList = this.get_sublist(this.filterProgramme)
      }
    },

    get_today_year() {
      return String(this.today.getFullYear())
    },

    get_today_month() {
      return String(this.today.getMonth() + 1)
    },

    get_limit_date() {
      //return new Date(this.)
    },

    get_year_month() {
      return this.programmeList.filter(
        d =>
          this.currentYear === d.date.split('-')[0] &&
          this.currentMonth === String(parseInt(d['date'].split('-')[1]))
      )
    },

    get_year() {
      return this.programmeList.filter(
        d => this.currentYear === d.date.split('-')[0]
      )
    },

    get_sublist(list) {
      return list.slice(0, this.inc)
    },

    seeYear(year) {
      this.inc = this.limit
      if (this.currentYear !== year) {
        this.currentMonth = ''
        this.currentYear = year
        this.filterProgramme = this.get_year()
        this.months.forEach(
          function(d) {
            d.ts = new Date(this.currentYear + '/' + d.num + '/2').getTime()
          }.bind(this)
        )
      } else {
        this.currentYear = ''
        this.currentMonth = ''
        this.filterProgramme = this.programmeList
      }

      this.subList = this.get_sublist(this.filterProgramme)
    },

    seeMonth(month) {
      this.inc = this.limit
      if (this.currentMonth !== month) {
        this.currentMonth = month
        this.filterProgramme = this.get_year_month()
      } else {
        this.currentMonth = ''
        this.filterProgramme = this.get_year()
      }
      this.subList = this.get_sublist(this.filterProgramme)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../src/scss/_variables.scss';
// TODO: I shouldn't need this again here. Something to do with the "scoped" feature of the vue components styles
//Common resets

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}
a,
u {
  color: inherit;
  text-decoration: none;
}

// Menu with dates
#menu-filter {
  width: 90%;
  max-width: 630px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#menu-filter ul {
  width: 90%;
  display: flex;
  overflow-x: auto;
}

#menu-filter .years-list {
  justify-content: space-between;
}

#menu-filter .months-list {
  justify-content: center;

  li {
    padding: 0 0.7rem;
  }
}

#menu-filter ul li {
  padding: 0.4em;
  border-radius: 2px;
}

#menu-filter ul li a {
  cursor: pointer;
}

#menu-filter ul li.is-clicked {
  color: $color-highlight-1;
  background-color: inherit;
  font-weight: 800;
}

.seeMoreBtn {
  display: block;
  width: 200px;
  height: 30px;
  margin: 20px auto;
}

.verba-programmes {
  // Mobile first
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $color-neutral-800;
  // Tablets
  @media all and (min-width: 768px) {
    flex-direction: column;
  }
  // PC
  @media all and (min-width: 1024px) {
  }
}
.verba-films-strip {
  // Mobile first
  margin-left: 0;
  // Tablets
  @media all and (min-width: 768px) {
    margin-left: 18rem;
  }
  // PC
  @media all and (min-width: 1024px) {
    margin-left: 13rem;
  }
}
// Image settings
.verba-microfilms-image {
  width: 100%;
  max-width: calc(438px * #{$scale-factor});
  height: auto;
  margin-left: 2rem;
  margin-bottom: 2rem;
  // Mobile first
  order: -1;
  right: calc(50% + 5rem);

  // Mobile first
  // Image hidden on small displays
  display: none;

  // Tablets
  @media all and (min-width: 768px) {
    display: block;
    position: fixed;
    top: 35%;
    right: calc(50% + 3rem);
  }
  // PC
  @media all and (min-width: 1024px) {
    right: calc(50% + 6rem);
  }
}
.verba-film-item:hover {
  color: $color-neutral-1000;

  transition: text-shadow 0.3s;
  text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;
}
.verba-film-item:hover:hover img {
  -webkit-filter: sepia(100%) blur(0);
  filter: sepia(100%) blur(0);
}
// Items settings
.verba-film-item {
  display: flex;
  align-items: flex-end;
  color: $color-neutral-800;
  .programme-img {
    padding: 0.5rem 1rem;
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    border-right: 2px solid rgba(0, 0, 0, 0.2);
    // Tablets
    @media all and (min-width: 768px) {
      padding: 0.5rem 1.5rem;
    }
    & img {
      width: 10rem;
      opacity: 0.9;
      // Gray scale, sepia and blur effects
      -webkit-filter: grayscale(100%) sepia(0) blur(1px);
      filter: grayscale(100%) sepia(0) blur(1px);
      -webkit-transition: 1s ease-in-out;
      transition: 1s ease-in-out;
      // Tablets
      @media all and (min-width: 768px) {
        width: 12rem;
      }
    }
  }
  span {
    position: relative;
    left: 1rem;
    font-size: 0.85rem;
    padding-bottom: 0.1rem;
    text-align: left;
  }
}
</style>
