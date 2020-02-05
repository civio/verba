<template>
  <div class="input-group">
    <input
      ref="searchInput"
      type="text"
      class="form-control"
      :placeholder="$t('search.placeholder')"
      :value="query"
      @change="onChange"
    />
    <div class="input-group-append">
      <button class="btn" type="button">
        <svg width="24" height="24" viewBox="0 0 24 24" class="icon-search">
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SearchBox',
  computed: {
    ...mapState(['query'])
  },
  mounted() {
    // set focus on search input
    this.$refs.searchInput.focus()
  },
  methods: {
    ...mapActions(['search']),
    onChange(e) {
      this.search(e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/_variables.scss';

.input-group-append .btn {
  padding: 0 9px;
  height: 38px;
}
.icon-search {
  fill: $color-neutral-1000;
}

// Input text when focus
input:focus {
  // outline: 2px solid $color-highlight-1 !important;
  border-color: $color-highlight-1 !important;
  box-shadow: 0 0 0 0.2rem rgba($color-highlight-1, 0.25) !important;
}
</style>
