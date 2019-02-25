<template>
  <div class="search-filters">
    <button :class="dateBtnClass" @click="onDateClick">{{ dateStr }}</button>
    <button class="btn btn-sm btn-outline-secondary">Type</button>
    <button class="btn btn-sm btn-outline-secondary">Group</button>
    <Datepicker :visible="datepickerVisible" @change="onDatepickerChange"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Datepicker from './Datepicker.vue'

export default {
  name: 'SearchFilters',
  components: { Datepicker },
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
          ? `${this.$options.filters.formatDate(
              this.queryDate.from
            )} - ${this.$options.filters.formatDate(this.queryDate.to)}`
          : this.$options.filters.formatDate(this.queryDate.from)
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
}
</style>
