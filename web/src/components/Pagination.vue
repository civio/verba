<template>
  <nav v-show="size > 1">
    <ul class="pagination justify-content-center">
      <li
        :class="{ disabled: current === 0, 'page-item': true }"
        @click="onClickPrev"
      >
        <a class="page-link" href="#" :aria-label="$t('pagination.previous')">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="i in pages"
        :key="i"
        :class="{ active: i === current + 1, 'page-item': true }"
      >
        <a class="page-link" :data-index="i - 1" @click="onClickPage">
          {{ i }}
        </a>
      </li>
      <li
        :class="{ disabled: current === size - 1, 'page-item': true }"
        @click="onClickNext"
      >
        <a class="page-link" href="#" :aria-label="$t('pagination.previous')">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    current: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 0
    }
  },
  computed: {
    pages: function() {
      return this.size <= 10
        ? this.range(1, this.size)
        : this.current <= 5
        ? this.range(1, 10)
        : this.current > this.size - 6
        ? this.range(this.size - 10, this.size)
        : this.range(this.current - 4, this.current + 5)
    }
  },
  methods: {
    onClickPage: function(e) {
      e.preventDefault()
      const page = +e.target.dataset.index
      if (page !== this.current) this.change(page)
    },
    onClickPrev: function(e) {
      e.preventDefault()
      if (this.current > 0) this.change(this.current - 1)
    },
    onClickNext: function(e) {
      e.preventDefault()
      if (this.current < this.size - 1) this.change(this.current + 1)
    },
    change: function(page) {
      this.$emit('change', page)
    },
    range: function(start, end) {
      return Array.from(Array(end - start + 1).keys()).map(i => i + start)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.page-item {
  cursor: pointer;
}
.page-item.active,
.page-item.disabled {
  cursor: default;
}
.page-link {
  font-size: 0.875rem;
  color: $color-neutral-1000;
}
.page-item.active .page-link {
  background-color: $color-neutral-800;
  border-color: $color-neutral-800;
}
</style>
