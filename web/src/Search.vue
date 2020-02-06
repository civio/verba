<template>
  <main>
    <section class="verba-search-form">
      <div class="verba-magneto">
        <img
          class="verba-magneto-image"
          src="../src/images/01TapeRecorder-no-copy.png"
          alt="Magneto patent illustration"
        />

        <div class="verba-magneto-copy">
          <h2 class="verba-subtitle" v-html="$t('search.title')"></h2>
          <p class="verba-copy">{{ $t('search.subtitle') }}</p>
        </div>
      </div>

      <div class="verba-search-group">
        <SearchBox />
        <SearchFilters />
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
  margin-bottom: 2rem;

  // Tablets
  @media all and (min-width: 768px) {
    // margin-left: 3rem;
  }

  // PC
  @media all and (min-width: 1024px) {
    // margin: 0 2rem 6rem;
  }

  .input-group {
    width: 63%;
    margin: 0 auto;

    // Tablets
    @media all and (min-width: 768px) {
      margin: 0;
      padding-left: 0;
    }

    // PC
    @media all and (min-width: 1024px) {
      padding-left: 6rem;
    }
  }
}

.verba-magneto {
  // Mobile first
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;
  text-align: center;
  color: $color-neutral-1000;

  // Tablets
  @media all and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }

  // PC
  @media all and (min-width: 1024px) {
  }

  .verba-magneto-copy {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    .verba-copy {
      margin-bottom: -5px;
      // font-size: 0.8rem;
    }

    .verba-subtitle {
      font-size: 1.4rem;
    }
  }

  .verba-magneto-image {
    // margin-left: 3rem;
    width: 100%;
    max-width: calc(510px * #{$scale-factor});
    height: auto;
  }

  // Tablets
  @media all and (min-width: 768px) {
    text-align: left;
    // margin-left: 3rem;
  }

  // PC
  @media all and (min-width: 1024px) {
    margin-left: 3rem;
  }
}

.verba-search-group {
  // Mobile first
  display: flex;
  flex-direction: column;
  justify-content: center;

  // Tablets
  @media all and (min-width: 768px) {
    flex-direction: row;
  }

  // PC
  @media all and (min-width: 1024px) {
  }
}
</style>
