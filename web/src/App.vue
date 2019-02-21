<template>
  <div id="app" class="container text-center">
    <h1 class="my-4">Verba</h1>
    <Search/>
    <Results/>
  </div>
</template>

<script>
import Results from './components/Results.vue'
import Search from './components/Search.vue'

export default {
  name: 'app',
  components: {
    Results,
    Search
  }
}
</script>

<style lang="scss">
</style>
