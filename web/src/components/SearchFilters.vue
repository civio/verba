<template>
  <div class="search-filters">
    <button class="btn btn-sm btn-outline-secondary" @click="onDateClick">Date</button>
    <button class="btn btn-sm btn-outline-secondary">Type</button>
    <button class="btn btn-sm btn-outline-secondary">Group</button>
    <div class="datepicker-container" v-show="datepickerVisible">
      <div id="datepicker"></div>
    </div>
  </div>
</template>

<script>
import Pikaday from "pikaday";

export default {
  name: "SearchFilters",
  data: function() {
    return {
      datepickerVisible: false
    };
  },
  mounted: function() {
    // add pikaday datepicker
    var field = document.getElementById("datepicker");
    this.datepicker = new Pikaday({
      onSelect: date => {
        console.log(this.datepicker.toString());
      }
    });
    field.parentNode.insertBefore(this.datepicker.el, field.nextSibling);
  },
  methods: {
    onDateClick() {
      this.datepickerVisible = !this.datepickerVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
.search-filters {
  margin-top: 1.25rem;
}
.btn {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
