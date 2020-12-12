<template>
  <div class="chart-container">
    <svg :width="width" :height="height">
      <g ref="axisXDays" class="axis x-days" />
      <g ref="axisXMonths" class="axis x-months" />
      <g ref="axisXYears" class="axis x-years" />
      <g ref="axisY" class="axis y" />
      <g
        ref="tooltipArea"
        :style="{ transform: `translate(${margin.left}px, ${margin.top}px)` }"
      />
      <g
        ref="bars"
        :style="{ transform: `translate(${margin.left}px, ${margin.top}px)` }"
      />
    </svg>
    <div id="tooltip" class="displayNone">
      <div>
        <span v-if="period == 'weeks'">Semana del</span>
        <span id="tooltip-date"></span>
      </div>
      <div id="tooltip-mentions"></div>
    </div>
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
      default: () => [],
    },
    period: {
      type: String,
      default: '',
    },
    margin: {
      type: Object,
      default: () => ({
        left: 30,
        right: 30,
        top: 0,
        bottom: 0,
      }),
    },
  },
  data() {
    return {
      width: 0,
      height: 0,
    }
  },
  computed: {
    padded() {
      const width = this.width - this.margin.left - this.margin.right
      const height = this.height - this.margin.top - this.margin.bottom
      return { width, height }
    },
  },
  watch: {
    data: function () {
      this.update()
    },
    width: function () {
      this.initialize()
      this.update()
    },
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
      return g.selectAll('.tick line').attr('y1', -this.height).attr('y2', 0)
    },
    formatAxisXMonths(g) {
      return g.selectAll('.tick line').attr('y1', -this.height).attr('y2', 0)
    },
    formatAxisXYears(g) {
      return g.selectAll('.tick line').attr('y1', -this.height).attr('y2', 0)
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
      window.location.href = '#search-box'
      let timerHover
      // update scales domain
      const barWidth = this.padded.width / this.data.length
      const scaleX = d3
        .scaleTime()
        .range([0, this.padded.width - barWidth])
        .domain([this.data[0].x, this.data[this.data.length - 1].x])

      const scaleBand = d3
        .scaleBand()
        .range([0, this.padded.width - barWidth])
        .domain(d3.range(this.data.length))

      const scaleY = d3
        .scaleLinear()
        .range([this.padded.height, 0])
        .domain([0, d3.max(this.data, d => d.y)])
        .nice()

      // Custom scale to make the y-axis consistent with new position
      const scaleYdouble = d3
        .scaleLinear()
        .range([this.padded.height / 2, 0])
        .domain([0, d3.max(this.data, d => d.y)])
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
          'Sábado',
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
          'diciembre',
        ],
        shortMonths: [
          'ene',
          'feb',
          'mar',
          'abr',
          'may',
          'jun',
          'jul',
          'ago',
          'sep',
          'oct',
          'nov',
          'dic',
        ],
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
        .tickFormat(d => {
          if (formatDay(d) === '01') {
            return formatMonth(d)
          }
        })
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
        .attr('y', d => {
          return scaleY(d.y / 2)
        })
        .attr('transform', `translate(0, ${-this.height / 2})`)
        .attr('height', d => {
          return 260 - scaleY(d.y)
        })
        .attr('width', barWidth)
        .on('mousemove', (d, i, nodes) => {
          // restart timer
          clearInterval(timerHover)
          const el = nodes[i]
          const that = this
          // tooltip position
          function getTooltipPos(tooltip) {
            let left
            const mouseMoveLeft = d3.mouse(
              d3.select('.chart-container').select('svg').node()
            )
            const mouseMoveTop = d3.mouse(el)
            const top =
              mouseMoveTop[1] - d3.select('#tooltip').node().offsetHeight - 30
            if (mouseMoveLeft[0] >= that.width / 2) {
              left = mouseMoveLeft[0] - d3.select('#tooltip').node().clientWidth
            } else {
              left = mouseMoveLeft[0] + 30
            }
            tooltip.style('left', left + 'px').style('top', top + 'px')
          }

          // focus rect
          d3.select(el).classed('focus', true)

          //toolip text
          d3.select('#tooltip')
            .select('#tooltip-date')
            .html(
              that.$t('tooltip.date', {
                day: d.x.getDate(),
                month: formatMonthFull(d.x),
                year: d.x.getFullYear(),
              })
            )

          d3.select('#tooltip')
            .select('#tooltip-mentions')
            .html(
              that.$tc('tooltip.mentions', d.y, {
                mentions: d.y,
              })
            )

          d3.select('#tooltip')
            .classed('displayNone', false)
            .call(getTooltipPos)
        })

        .on('mouseout', function () {
          // displayNone on tooltip after 750 ms
          function stopTimerHover() {
            d3.select('#tooltip').classed('displayNone', true)
            clearInterval(timerHover)
          }
          clearInterval(timerHover)
          timerHover = setInterval(stopTimerHover, 500)
          d3.select(this).classed('focus', false)
        })

      // render axis
      d3.select(this.$refs.axisXDays)
        .attr(
          'transform',
          `translate(${this.margin.left + scaleBand.bandwidth() / 2}, ${
            this.height - this.margin.bottom
          })`
        )
        .classed('displayNone', this.period == 'weeks')
        .call(axisXDays)
        .call(this.formatAxisXDays)

      d3.select(this.$refs.axisXMonths)
        .attr(
          'transform',
          `translate(${this.margin.left + scaleBand.bandwidth() / 2}, ${
            this.height - this.margin.bottom + 15
          })`
        )
        .call(axisXMonths)
        .call(this.formatAxisXMonths)

      d3.select(this.$refs.axisXYears)
        .attr(
          'transform',
          `translate(${this.margin.left + scaleBand.bandwidth() / 2}, ${
            this.height - this.margin.bottom + 30
          })`
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
    },
  },
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

  .displayNone {
    display: none;
  }

  #tooltip {
    position: absolute;
    background-color: #f1f1f1;
    border: 1px solid;
    pointer-events: none;
    padding: 5px;
  }

  .tooltip-area rect {
    fill: transparent;
  }

  rect.focus {
    fill: #ef9b31;
  }

  .axis {
    color: $color-neutral-1000;

    line {
      shape-rendering: crispEdges;
    }

    &.x-months,
    &.x-days {
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
