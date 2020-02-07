<template>
  <div class="verba-date-picker" v-show="visible">
    <date-range-picker v-model="range" :options="options" />
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DateRangeFilter',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      range: null,
      options: {
        // XXX: I'd prefer having autoUpdate, but couldn't get the data to update then when
        // manually editing the input element. Should look into it at some point.
        // autoApply: true,
        alwaysShowCalendars: true,
        autoUpdateInput: true,
        startDate: '23/12/2013',
        minDate: '23/12/2013',
        endDate: moment().format('DD/MM/YYYY'),
        maxDate: moment().format('DD/MM/YYYY'),
        locale: {
          format: 'DD/MM/YYYY',
          separator: ' - ',
          applyLabel: 'Filtrar',
          cancelLabel: 'Cancelar',
          fromLabel: 'Desde',
          toLabel: 'a',
          customRangeLabel: 'Rango',
          weekLabel: 'W',
          daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          monthNames: [
            'enero',
            'febrero',
            'marzo',
            'abril',
            'mayo',
            'junio',
            'julio',
            'agosto',
            'septiembre',
            'octubre',
            'noviembre',
            'diciembre'
          ],
          firstDay: 1
        },
        ranges: {
          'Último mes': [moment().subtract(29, 'days'), moment()],
          'Último año': [moment().subtract(364, 'days'), moment()],
          Todo: ['23/12/2013', moment()]
        }
      }
    }
  },
  watch: {
    range: function() {
      if (
        this.range[0] === this.options.startDate &&
        this.range[1] === this.options.endDate
      ) {
        this.$emit('change', null)
      } else {
        this.$emit('change', {
          from: moment(this.range[0], 'DD/MM/YYYY'),
          to: moment(this.range[1], 'DD/MM/YYYY')
        })
      }
    }
  }
}
</script>

<style lang="scss">
.verba-date-picker {
  input {
    padding: 0.2rem 0.5rem;
  }
}
</style>
