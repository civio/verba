<template>
  <div>
    <date-range-picker v-model='range' :options='options'/>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'MyCalendar2',
  data() {
    return {
      range: {},
      options: {
        startDate: '23/12/2013',
        minDate: '23/12/2013',
        endDate: moment(),
        maxDate: moment(),
        'locale': {
          'format': 'DD/MM/YYYY',
          'separator': ' - ',
          'applyLabel': 'Filtrar',
          'cancelLabel': 'Cancelar',
          'fromLabel': 'Desde',
          'toLabel': 'a',
          'customRangeLabel': 'Rango',
          'weekLabel': 'W',
          'daysOfWeek': [
            'Su',
            'Mo',
            'Tu',
            'We',
            'Th',
            'Fr',
            'Sa'
          ],
          'monthNames': [
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
          'firstDay': 1
        },
        ranges: {
          'Último mes': [moment().subtract(29, 'days'), moment()],
          'Último año': [moment().subtract(364, 'days'), moment()]
        }
      }
    }
  }
}
</script>
