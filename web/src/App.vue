<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center my-4">Verba</h1>
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <Search/>
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
    <VideoModal/>
  </div>
</template>

<script>
import Results from './components/Results.vue'
import Search from './components/Search.vue'
import SearchFilters from './components/SearchFilters.vue'
import VideoModal from './components/VideoModal.vue'

export default {
  name: 'app',
  components: {
    Results,
    Search,
    SearchFilters,
    VideoModal
  }
}
</script>
