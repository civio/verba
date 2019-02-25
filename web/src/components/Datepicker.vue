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
    const config = {
      maxDate: new Date()
    }
    this.startPicker = new Pikaday(config)
    this.endPicker = new Pikaday(config)
    // add pikaday datepickers to datepicker-container
    document.getElementById('start-picker').appendChild(this.startPicker.el)
    document.getElementById('end-picker').appendChild(this.endPicker.el)
  },
  methods: {
    onClickApply() {
      const from = this.startPicker.getDate()
      const to = this.endPicker.getDate()
      // fire change event with from & to dates
      this.$emit(
        'change',
        from
          ? {
              from: from,
              to: to ? to : from
            }
          : null
      )
    },
    onClickReset() {
      // clear pickers
      this.startPicker.setDate(null)
      this.endPicker.setDate(null)
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
  .pika-table {
    th {
      font-weight: 400;
    }
    td {
      border: 1px solid #ddd;
      text-align: center;

      &.is-empty {
        border: none;
      }
    }
    abbr {
      text-decoration: none;
      cursor: default;
    }
  }
  .pika-button {
    color: #212529;
    padding: 7px 4px 5px;
    text-align: center;
    background: none;
    border-radius: 0;

    &:hover {
      color: #212529;
      background: #ddd;
      border-radius: 0;
    }
  }
  .is-selected .pika-button,
  .has-event .pika-button {
    font-weight: 400;
    background: #007bff; // brand-primary
    border-radius: 0;
    box-shadow: none;
  }
  .is-disabled .pika-button {
    color: #bbb;
  }
  .is-disabled .pika-button,
  .is-inrange .pika-button {
    background: none;
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
