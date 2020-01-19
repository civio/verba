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
          <h2 class="verba-subtitle">{{ $t('search.title') }}</h2>
          <p class="verba-copy">{{ $t('search.subtitle') }}</p>
        </div>
      </div>
    </section>

    <section class="verba-results">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <Results />
        </div>
      </div>
    </section>

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

.verba-search-form {
  margin: 0 6rem;
  margin-bottom: 2rem;

  .input-group {
    // Tablets
    @media all and (min-width: 768px) {
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }
}

.verba-magneto {
  text-align: center;
  color: $color-neutral-1000;

  .verba-magneto-copy {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    .verba-copy {
      font-size: 0.8rem;
    }
  }

  .verba-magneto-image {
    margin-left: 3rem;
    width: 100%;
    max-width: calc(935px * #{$scale-factor});
    // min-width: calc(935px * 0.5);
    height: auto;
  }

  @media all and (min-width: 768px) {
    text-align: left;

    .verba-magneto-copy {
      position: absolute;
      left: calc(50% + 5rem);
      top: 22rem;
      width: 20rem;
      margin-top: 3rem;
    }
  }
}

.verba-subtitle {
  font-size: 1rem;
  font-weight: 600;
}
</style>
