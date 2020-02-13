<template>
  <div class="chart-container">
    <svg :width="width" :height="height">
      <g ref="axisXDays" class="axis x-days" />
      <g ref="axisXMonths" class="axis x-months" />
      <g ref="axisXYears" class="axis x-years" />
      <g ref="axisY" class="axis y" />
      <g ref="tooltipArea" :style="{ transform: `translate(${margin.left}px, ${margin.top}px)` }" />
      <g ref="bars" :style="{ transform: `translate(${margin.left}px, ${margin.top}px)` }" />
    </svg>
    <div id="tooltip" class="displayNone"></div>
  </div>
</template>

<script>
import * as d3 from 'd3'
// Based on https://medium.com/tyrone-tudehope/composing-d3-visualizations-with-vue-js-c65084ccb686
export default {
  name: 'AreaChart',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    period:false,
    margin: {
      type: Object,
      default: () => ({
        left: 30,
        right: 30,
        top: 0,
        bottom: 0
      })
    }
  },
  data() {
    return {
      width: 0,
      height: 0
    }
  },
  computed: {
    padded() {
      const width = this.width - this.margin.left - this.margin.right
      const height = this.height - this.margin.top - this.margin.bottom
      return { width, height }
    }
  },
  watch: {
    data: function() {
      this.update()
    },
    width: function() {
      this.initialize()
      this.update()
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    formatAxisXDays(g) {
      return g
        .selectAll('.tick line')
        .attr('y1', -this.height)
        .attr('y2', 0)
    },
    formatAxisXMonths(g) {
      return g
        .selectAll('.tick line')
        .attr('y1', -this.height)
        .attr('y2', 0)
    },
    formatAxisXYears(g) {
      return g
        .selectAll('.tick line')
        .attr('y1', -this.height)
        .attr('y2', 0)
    },
    formatAxisY(g) {
      return g
        .selectAll('.tick line')
        .attr('x1', 0)
        .attr('x2', this.padded.width)
    },
    formatTooltipArea(g) {
      return g
        .append('rect')
        .attr('width', this.padded.width)
        .attr('height', this.padded.height)
    },
    initialize() {},
    onResize() {
      // update width & height based on parent container
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
    },
    update() {
      console.log(this.period)
      let timerHover
      let that = this
      window.location.href = '#search-box'
      // update scales domain
      const barWidth = this.padded.width / this.data.length
      const scaleX = d3
        .scaleTime()
        .range([0, this.padded.width - barWidth])
        .domain([this.data[0].x, this.data[this.data.length - 1].x])

      const scaleY = d3
        .scaleLinear()
        .range([this.padded.height, 0])
        .domain([0, d3.max(this.data, d=>d.y)])
        .nice()

      // Custom scale to make the y-axis consistent with new position
      const scaleYdouble = d3
        .scaleLinear()
        .range([this.padded.height / 2, 0])
        .domain([0, d3.max(this.data, d=>d.y)])
        .nice()

      // Set the time axis in Spanish
      const locale = d3.timeFormatLocale({
        dateTime: '%a %b %e %X %Y',
        date: '%d/%m/%Y',
        time: '%H:%M:%S',
        periods: ['AM', 'PM'],
        days: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado'
        ],
        shortDays: ['Dom', 'Lun', 'Mar', 'Mi', 'Jue', 'Vie', 'Sab'],
        months: [
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
        shortMonths: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic'
        ]
      })
      const formatDay = locale.format('%d')
      const formatMonth = locale.format('%b')
      const formatMonthFull = locale.format('%B')
      // setup axis
      const axisXDays = d3
        .axisBottom(scaleX)
        .tickSizeOuter(0)
        .tickFormat(formatDay)
        .ticks(this.width / 50)

      const axisXMonths = d3
        .axisBottom(scaleX)
        .tickSizeOuter(0)
        .tickFormat(formatMonth)
        .ticks(this.width / 50)

      const axisXYears = d3
        .axisBottom(scaleX)
        .tickSizeOuter(0)
        .ticks(d3.timeYear)

      const axisY = d3
        .axisLeft(scaleYdouble)
        .tickFormat(d3.format(',d'))
        .ticks(this.height / 50)

      // update bars
      d3.select(this.$refs.bars)
        .selectAll('rect')
        .data(this.data)
        .join('rect')
        .attr('x', d => scaleX(d.x))
        .attr('y', function(d) {
          return scaleY(d.y/2)
        })
        .attr('transform', `translate(0, ${-this.height / 2})`)
        .attr('height', function(d) {
          return 260 - scaleY(d.y)
        })
        .attr('width', barWidth)
        .on('mousemove', function(d) {

          function getTooltipText(tooltip) {
            const monthName = formatMonthFull(d.x)
            const year = d.x.getFullYear()
            let html = ''
            if(that.period) {
              html = d.x.getDate()+' de '+monthName+' de '+
                year+':<br>'+d.y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' menciones'
            }else{
              html = 'Semana del '+d.x.getDate()+' de <br> '+monthName+' de '+
                year+':<br>'+d.y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' menciones'
            }
            tooltip.html(html)
          }

          let left;
          let top = d3.mouse(this)[1]-d3.select('#tooltip').node().offsetHeight*1.1
          if(d3.mouse(this)[0] >= that.padded.width/2) {
            left = d3.mouse(this)[0]-that.margin.left-that.margin.right-d3.select('#tooltip').node().offsetWidth/4
          }else{
            left = d3.mouse(this)[0]+that.margin.left+that.margin.right
          }
          clearInterval(timerHover);

          d3.select(this)
            .classed('focus', true)

          d3.select('#tooltip')
            .classed('displayNone', false)
            .call(getTooltipText)  
            .style('left', left+'px')
            .style('top', top+'px')

        })

        .on('mouseout', function() {
          function stop_timer_hover() {
            d3.select('#tooltip')
              .classed('displayNone', true)
            clearInterval(timerHover);
          }
          clearInterval(timerHover);
          timerHover = setInterval(stop_timer_hover, 750);
          d3.select(this)
            .classed('focus', false)          
        })      

      // render axis
      d3.select(this.$refs.axisXDays)
        .attr(
          'transform',
          `translate(${this.margin.left+10}, ${this.height - this.margin.bottom})`
        )
        .call(axisXDays)
        .call(this.formatAxisXDays)

      d3.select(this.$refs.axisXMonths)
        .attr(
          'transform',
          `translate(${this.margin.left}, ${this.height - this.margin.bottom+15})`
        )
        .call(axisXMonths)
        .call(this.formatAxisXMonths)

      d3.select(this.$refs.axisXYears)
        .attr(
          'transform',
          `translate(${this.margin.left}, ${this.height -
            this.margin.bottom +
            30})`
        )
        .call(axisXYears)
        .call(this.formatAxisXYears)

      d3.select(this.$refs.axisY)
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
        .call(axisY)
        .call(this.formatAxisY)
        .append('svg:text')
        .attr('x', -25)
        .attr('y', -15)
        .classed('axisY-title', true)
        .attr('text-anchor', 'start')
        .text('Menciones')

    }
  }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.chart-container {
  width: 100%;
  height: 260px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: $color-neutral-1000;
  svg {
    position: relative;
    overflow: visible;
  }

  .displayNone{
    display: none;
  }

  #tooltip{
    position: absolute;
    background-color: #f1f1f1;
    border: 1px solid;
    pointer-events: none;
    padding: 5px;
  }

  .tooltip-area rect{
    fill: transparent;
  }

  rect.focus{
    fill: #ef9b31;
  }

  .axis {
    color: #212529;

    line {
      shape-rendering: crispEdges;
    }

    &.x-months, &.x-days {
      .domain {
        display: none;
      }
      text {
        margin-top: 200px;
        opacity: 0.75;
        &.active {
          opacity: 1;
          font-weight: 600;
        }
      }
      .tick line {
        display: none;
      }
    }

    &.x-years {
      font-weight: 600;

      .domain {
        display: none;
      }

      .tick line {
        display: none;
      }
    }

    &.y {
      .domain {
        display: none;
      }
      text {
        opacity: 0.75;
      }
      line {
        stroke-opacity: 0.12;
      }
    }

    .axisY-title {
      font-size: 12px;
      font-weight: 600;
      fill: currentColor;
      opacity: 1 !important;
    }
  }

  rect {
    fill: currentColor;
  }
}
</style>
