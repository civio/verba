<!-- eslint-disable vue/no-v-html -->
<template>
  <main>
    <section class="verba-search-form">
      <div class="verba-magneto">
        <img
          class="verba-magneto-image"
          src="../src/images/01TapeRecorder.png"
          alt="Magneto patent illustration"
        />

        <div class="verba-magneto-copy">
          <h2 class="verba-subtitle" v-html="$t('search.title')"></h2>
          <p class="verba-copy">{{ $t('search.subtitle') }}</p>
        </div>
      </div>

      <div id="search-box" class="verba-search-group">
        <SearchBox />
        <SearchFilters />
      </div>
      <div id="search-doc">
        <p>
          Usa las comillas dobles <code>"</code> para encontrar términos exactos
          o el guión <code>-</code> para descartar palabras en tu búsqueda. Si
          quieres obtener todos los cortes en los que aparezcan uno u otro
          término, utiliza la barra vertical <code>|</code>. Para utilizar
          operadores de búsqueda más avanzados, visita la documentación
          <a
            href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html#simple-query-string-syntax"
            target="_blank"
            >aquí</a
          >.
        </p>
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
  // margin-bottom: 2rem;

  // Tablets
  @media all and (min-width: 768px) {
    // margin-left: 3rem;
  }

  // PC
  @media all and (min-width: 1024px) {
    // margin: 0 2rem 6rem;
  }

  .input-group {
    width: 80%;
    margin: 0 auto;

    // Tablets
    @media all and (min-width: 768px) {
      width: 63%;
      margin: 0;
      padding-left: 0;
    }

    // PC
    @media all and (min-width: 1024px) {
      padding-left: 4.5rem;
    }
  }
}

#search-doc p {
  text-align: left;
  margin-top: -50px;
  font-size: 0.8rem;
  margin-left: 10rem;
  margin-right: 7rem;

  @media all and (max-width: 1024px) {
    margin-left: 2rem;
    margin-right: 1rem;
  }

  @media all and (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 2rem;
  }
}

#search-doc {
  a {
    color: $color-highlight-1;
    font-weight: 800;
  }
}

#search-doc code {
  color: black;
  font-weight: bold;
  background-color: #d6d6d6;
  padding: 4px;
  border-radius: 2px;
}

.verba-magneto {
  // Mobile first
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.5rem;
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
    max-width: 22rem;

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

#search-box {
  position: relative;
  top: -60px;
  padding-top: 60px;
}
</style>
