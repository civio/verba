<template>
  <div class="row">
    <div class="col-lg-8 col-xl-6 offset-lg-2 offset-xl-3">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          id="search"
          placeholder="Search a term"
          @change="onChange"
        >
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" class="icon-search">
              <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              ></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',
  props: {
    msg: String
  },
  methods: {
    ...mapActions({
      search: 'search' // map `this.search()` to `this.$store.dispatch('search')`
    }),
    onChange(e) {
      this.search(e.target.value)
      e.target.value = '' // clear input value
    }
  }
}
</script>

<style scoped lang="scss">
.input-group-append .btn {
  padding: 0 9px;
  height: 38px;
}
.icon-search {
  fill: white;
}
</style>
