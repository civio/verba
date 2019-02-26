<template>
  <div class="chart-container">
    <svg :width="width" :height="height">
      <g ref="axisX" class="axis x"></g>
      <g ref="axisY" class="axis y"></g>
      <g :style="{transform: `translate(${margin.left}px, ${margin.top}px)`}">
        <path class="area" :d="paths.area"></path>
        <path class="line" :d="paths.line"></path>
      </g>
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
      height: 0,
      paths: {
        area: '',
        line: ''
      },
      scale: {
        x: null,
        y: null
      },
      axis: {
        x: null,
        y: null
      },
      points: []
    }
  },
  computed: {
    padded() {
      const width = this.width - this.margin.left - this.margin.right
      const height = this.height - this.margin.top - this.margin.bottom
      return { width, height }
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  watch: {
    width: function() {
      this.initialize()
      this.update()
    }
  },
  methods: {
    createArea: d3
      .area()
      .x(d => d.x)
      .y0(d => d.max)
      .y1(d => d.y),
    createLine: d3
      .line()
      .x(d => d.x)
      .y(d => d.y),
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
    initialize() {
      // setup scales
      this.scale.x = d3.scaleTime().range([0, this.padded.width])
      this.scale.y = d3.scaleLinear().range([this.padded.height, 0])
      // setup axis
      this.axis.x = d3
        .axisBottom(this.scale.x)
        .tickSizeOuter(0)
        .ticks(d3.timeYear)
      this.axis.y = d3
        .axisLeft(this.scale.y)
        .tickFormat(d3.format(',d'))
        .ticks(this.height / 50)
    },
    onResize() {
      // update width & height based on parent container
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
    },
    update() {
      // update scales domain
      this.scale.x.domain([this.data[0].x, this.data[this.data.length - 1].x])
      this.scale.y.domain(d3.extent(this.data, d => d.y)).nice()
      // set points from data
      this.points = this.data.map(d => ({
        x: this.scale.x(d.x),
        y: this.scale.y(d.y),
        max: this.padded.height
      }))
      // update paths
      this.paths.area = this.createArea(this.points)
      this.paths.line = this.createLine(this.points)
      // render axis
      d3.select(this.$refs.axisX)
        .attr(
          'transform',
          `translate(${this.margin.left}, ${this.height - this.margin.bottom})`
        )
        .call(this.axis.x)
        .call(this.formatAxisX)
      d3.select(this.$refs.axisY)
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
        .call(this.axis.y)
        .call(this.formatAxisY)
    }
  }
}
</script>

<style lang="scss">
.chart-container {
  width: 100%;
  height: 260px;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  color: #007bff;
  background: white;

  svg {
    overflow: visible;
  }

  .axis {
    color: #212529;

    line {
      shape-rendering: crispEdges;
    }

    &.x {
      text {
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

  .line {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  .area {
    stroke: none;
    fill: currentColor;
    opacity: 0.15;
  }
}
</style>
