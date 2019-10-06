<template>
  <div class="search-filters">
    <button :class="dateBtnClass" @click="onDateClick">{{ dateStr }}</button>
    <Datepicker :visible="datepickerVisible" @change="onDatepickerChange"/>
    <MyCalendar/>
    <MyCalendar2/>
  </div>
</template>

<script>
import moment from 'moment'
import { mapActions, mapState } from 'vuex'
import Datepicker from './Datepicker.vue'
import MyCalendar2 from './MyCalendar2.vue'

export default {
  name: 'SearchFilters',
  components: { Datepicker, MyCalendar2 },
  data() {
    return {
      datepickerVisible: false
    }
  },
  computed: {
    ...mapState(['queryDate']),
    dateBtnClass: function() {
      return `btn btn-sm btn-outline-${
        this.queryDate ? 'primary' : 'secondary'
      }`
    },
    dateStr: function() {
      return this.queryDate
        ? this.queryDate.from.getTime() !== this.queryDate.to.getTime()
          ? `${this.formatDate(this.queryDate.from)} - ${this.formatDate(
            this.queryDate.to
          )}`
          : this.formatDate(this.queryDate.from)
        : 'Date'
    }
  },
  methods: {
    ...mapActions(['setQueryDate']),
    onDateClick() {
      this.datepickerVisible = !this.datepickerVisible
    },
    onDatepickerChange(obj) {
      this.datepickerVisible = false
      this.setQueryDate(obj)
    },
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY')
    }
  }
}
</script>

<style lang="scss">
.search-filters {
  margin-top: 1.25rem;
  .btn {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .btn-outline-primary {
    font-weight: 600;
  }
}
</style>
