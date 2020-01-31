<template>
  <div class="chart-container">
    <svg :width="width" :height="height">
      <g ref="axisX" class="axis x" />
      <g ref="axisY" class="axis y" />
      <g ref="bars" :style="{ transform: `translate(${margin.left}px, ${margin.top}px)` }" />
    </svg>
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
    margin: {
      type: Object,
      default: () => ({
        left: 0,
        right: 0,
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
    formatAxisX(g) {
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
    initialize() {},
    onResize() {
      // update width & height based on parent container
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
    },
    update() {
      // update scales domain
      const barWidth = this.padded.width / this.data.length
      const scaleX = d3
        .scaleTime()
        .range([0, this.padded.width - barWidth])
        .domain([this.data[0].x, this.data[this.data.length - 1].x])
      const scaleY = d3
        .scaleLinear()
        .range([this.padded.height, 0])
        .domain(d3.extent(this.data, d => d.y))
        .nice()

      // Custom scale to make the y-axis consistent with new position
      const scaleYdouble = d3
        .scaleLinear()
        .range([this.padded.height / 2, 0])
        .domain(d3.extent(this.data, d => d.y))
        .nice()

      // setup axis
      const axisX = d3
        .axisBottom(scaleX)
        .tickSizeOuter(0)
        .ticks(d3.timeYear)
      const axisY = d3
        // .axisLeft(scaleY)
        .axisLeft(scaleYdouble)
        .tickFormat(d3.format(',d'))
        // Not working
        // .tickFormat
        // d3.format(function() {
        //   return d3.format(',d') + ' times'
        // })
        .ticks(this.height / 50)

      // update bars
      d3.select(this.$refs.bars)
        .selectAll('rect')
        .data(this.data)
        .join('rect')
        .attr('x', d => scaleX(d.x))
        .attr('y', d => scaleY(d.y / 2))
        .attr('transform', `translate(0, ${-this.height / 2})`)
        .attr('height', d => scaleY(0) - scaleY(d.y))
        .attr('width', barWidth)
        .append('svg:title')
        .text(d => {
          return d3.timeFormat("%d-%m-%Y")(d.x) + ' | ' + d.y + ' times';
        })

      // render axis
      d3.select(this.$refs.axisX)
        .attr(
          'transform',
          `translate(${this.margin.left}, ${this.height - this.margin.bottom})`
        )
        .call(axisX)
        .call(this.formatAxisX)

      d3.select(this.$refs.axisY)
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
        .call(axisY)
        .call(this.formatAxisY)
    }
  }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.chart-container {
  width: 100%;
  height: 260px;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  color: $color-neutral-1000;

  svg {
    overflow: visible;
  }

  .axis {
    color: #212529;

    line {
      shape-rendering: crispEdges;
    }

    &.x {
      .domain {
        display: none;
      }
      text {
        margin-top: 200px;
        opacity: 0.9;
        &.active {
          opacity: 1;
          font-weight: 600;
        }
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
  }

  rect {
    fill: currentColor;
  }
}
</style>
