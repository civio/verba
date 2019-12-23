<template>
  <main>
    <section class="verba-search-form">
      <SearchBox />
      <SearchFilters />

      <div class="verba-magneto">
        <img
          class="verba-magneto-image"
          src="../src/images/01TapeRecorder.png"
          alt="Magneto patent illustration"
        />

        <div class="verba-magneto-copy">
          <h2 class="verba-subtitle">News Coverage of RTVE</h2>
          <p class="verba-copy">Analyse the coverage of the Spanish Public National broadcaster.</p>
        </div>
      </div>
    </section>


    <div class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <Results />
          </div>
        </div>
      </div>
    </div>

    <ResultContext />
  </main>
</template>

<script>
import { mapActions } from 'vuex'

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
  },
  mounted() {
    this.initializeSearchFromURL()
  },
  methods: {
    ...mapActions(['initializeSearchFromURL'])
  }
}
</script>

<style scoped lang="scss">
@import '../src/scss/_variables.scss';

.verba-magneto {
  display: flex;
  justify-content: flex-end;
  text-align: left;

  .verba-subtitle {
    font-size: 1rem;
  }

  .verba-copy {
    font-size: 0.8rem;
  }
}
</style>