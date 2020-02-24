<!-- eslint-disable vue/no-v-html -->
<template>
  <main>
    <section class="verba-search-form">
      <div class="verba-magneto">
        <div class="animation-magneto"></div>
        <div class="verba-magneto-copy">
          <div class="verba-vignettes-intro">
            <p class="verba-subtitle">{{ $t('search.vignettes_intro') }}</p>
            <div class="vignettes-carrousel">
              <a href="/vignettes#vignette06">
                <h3 class="vignette-01">La fiebre (informativa) del coronavirus</h3>
              </a>
              <a href="/vignettes#vignette05">
                <h3 class="vignette-02">No había crisis climática hasta 2019</h3>
              </a>
              <a href="/vignettes#vignette04">
                <h2 class="vignette-03">Rajoy sigue vivo</h2>
              </a>
            </div>
          </div>
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
          Usa las comillas dobles
          <code>"</code> para encontrar términos exactos o el guión
          <code>-</code> para descartar palabras en tu búsqueda. Si quieres
          obtener todos los cortes en los que aparezcan uno u otro término,
          utiliza la barra vertical
          <code>|</code>. Para utilizar operadores de
          búsqueda más avanzados, visita la documentación
          <a
            href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html#simple-query-string-syntax"
            target="_blank"
          >aquí</a>.
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
  text-align: center;
  margin-top: -55px;
  font-size: 0.7rem;
  margin-left: 11rem;
  margin-right: 8rem;
  color: rgba($color-neutral-800, 0.6);

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
  color: $color-neutral-1000;
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
    }

    .verba-subtitle {
      font-size: 1.4rem;
    }
  }

  .animation-magneto {
    background: url('../src/images/01TapeRecorder-animated.png') left top;
    display: block;
    opacity: 0.7;

    // Each frame width
    width: 408px;
    min-width: 408px;
    height: 337px;
    // Number of frames
    animation: run 0.7s steps(4) infinite;

    // Mobile first
    transform: scale(0.7);
    margin-top: -60px;
    margin-bottom: -20px;

    // Tablets
    @media all and (min-width: 768px) {
      transform: scale(1);
      margin: 0;
    }
  }

  @keyframes run {
    0% {
      background-position: 0;
    }
    100% {
      // Full with of stripe
      background-position: -1632px;
    }
  }

  // Tablets
  @media all and (min-width: 768px) {
    text-align: left;
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

// Make this trick to have the anchor on place below the header
#search-box {
  position: relative;
  top: -60px;
  padding-top: 60px;
}

// Vignettes slideshow
// Adapting this solution https://codepen.io/nucliweb/pen/ymedj
.verba-vignettes-intro {
  margin-bottom: 3rem;
  text-align: center;

  .verba-subtitle {
    margin-bottom: 0;
  }
}
.vignettes-carrousel {
  position: relative;
  background-color: rgba($color-neutral-1000, 0.75);
  width: 100%;
  height: 2rem;
  // height: auto;
  padding-top: 0.4rem;
}

.vignette-01,
.vignette-02,
.vignette-03 {
  opacity: 0;
  position: absolute;
  display: block;
  width: 100%;

  color: $color-neutral-0;
  font-size: 1rem;
  text-transform: uppercase;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.vignette-01 {
  animation-name: anim-1;
}

.vignette-02 {
  animation-name: anim-2;
}

.vignette-03 {
  animation-name: anim-3;
}

@keyframes anim-1 {
  0%,
  8.3% {
    transform: translate(0, -100px);
    opacity: 0;
  }
  8.3%,
  25% {
    transform: translate(0, 0);
    opacity: 1;
  }
  33.33%,
  100% {
    transform: translate(0, 100px);
    opacity: 0;
  }
}

@keyframes anim-2 {
  0%,
  33.33% {
    transform: translate(0, -100px);
    opacity: 0;
  }
  41.63%,
  58.29% {
    transform: translate(0, 0);
    opacity: 1;
  }
  66.66%,
  100% {
    transform: translate(0, 100px);
    opacity: 0;
  }
}

@keyframes anim-3 {
  0%,
  66.66% {
    transform: translate(0, -100px);

    opacity: 0;
  }
  74.96%,
  91.62% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(0, 100px);
    opacity: 0;
  }
}
</style>
