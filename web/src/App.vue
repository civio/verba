<template>
  <div id="app" class="container text-center">
    <h1 class="my-4">Verba</h1>
    <Search/>
  </div>
</template>

<script>
import Search from './components/Search.vue'

export default {
  name: 'app',
  components: {
    Search
  }
}
</script>

<style lang="scss">
</style>
