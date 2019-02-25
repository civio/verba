<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center my-4">Verba</h1>
      <div class="row">
        <div class="col-lg-8 col-xl-6 offset-lg-2 offset-xl-3">
          <Search/>
          <SearchFilters/>
        </div>
      </div>
    </div>
    <hr class="mb-0">
    <div class="bg-light">
      <div class="container">
        <Results/>
      </div>
    </div>
  </div>
</template>

<script>
import Results from './components/Results.vue'
import Search from './components/Search.vue'
import SearchFilters from './components/SearchFilters.vue'

export default {
  name: 'app',
  components: {
    Results,
    Search,
    SearchFilters
  }
}
</script>

<style lang="scss">
@import './../node_modules/pikaday/css/pikaday.css';
</style>
