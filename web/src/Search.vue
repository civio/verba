<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <SearchBox/>
          <SearchFilters/>
        </div>
      </div>
    </div>
    <hr class="mb-0">
    <div class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <Results/>
          </div>
        </div>
      </div>
    </div>
    <ResultContext/>
  </div>
</template>

<script>
import Results from './components/Results.vue'
import SearchBox from './components/SearchBox.vue'
import SearchFilters from './components/SearchFilters.vue'
import ResultContext from './components/ResultContext.vue'

export default {
  components: {
    Results,
    SearchBox,
    SearchFilters,
    ResultContext
  }
}
</script>
