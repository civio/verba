<template>
  <div class="datepicker-container" v-show="visible">
    <div id="start-picker"></div>
    <div id="end-picker"></div>
    <div class="datepicker-container-footer">
      <button type="button" class="btn btn-sm btn-outline-secondary" @click="onClickReset">Reset</button>
      <button
        type="button"
        class="btn btn-sm btn-outline-primary float-right"
        @click="onClickApply"
      >Apply</button>
    </div>
  </div>
</template>

<script>
import Pikaday from 'pikaday'

export default {
  name: 'Datepicker',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dateFrom: null,
      dateTo: null
    }
  },
  mounted: function() {
    // setup start & end Pikaday pickers
    // TODO: disable future dates
    this.startPicker = new Pikaday()
    this.endPicker = new Pikaday()
    // add pikaday datepickers to datepicker-container
    document.getElementById('start-picker').appendChild(this.startPicker.el)
    document.getElementById('end-picker').appendChild(this.endPicker.el)
  },
  methods: {
    onClickApply() {
      // fire change event with from & to dates
      this.$emit('change', {
        from: this.startPicker.getDate(),
        to: this.endPicker.getDate()
      })
    },
    onClickReset() {
      // fire emit event with null date
      this.$emit('change', null)
    }
  }
}
</script>

<style lang="scss">
.datepicker-container {
  border: 1px solid #6c757d;
  border-radius: 0.2rem; // btn border radius
  .pika-single {
    border: none;
  }
}

#start-picker,
#end-picker {
  float: left;
}

.datepicker-container-footer {
  clear: both;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
}
</style>
