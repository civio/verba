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
          <div class="verba-vignettes-intro">
            <p class="verba-subtitle">{{ $t('search.vignettes_intro')}}</p>
            <div class="vignettes-carrousel">
              <a href="/vignettes#vignette01">
                <h3 class="vignette-01">La ultraderecha son los otros</h3>
                <!-- <mark class="vignette-01">La ultraderecha son los otros</!-->
              </a>
              <a href="/vignettes#vignette02">
                <h3 class="vignette-02">Gürtel y los ERE, casi empatados</h3>
                <!-- <mark class="vignette-02">Gürtel y los ERE, casi empatados</mark> -->
              </a>
              <a href="/vignettes#vignette03">
                <h2 class="vignette-03 verba-subtitle">El rigor científico, a dieta</h2>
                <!-- <mark class="vignette-03">El rigor científico, a dieta</mark> -->
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
          <code>"</code> para encontrar términos exactos
          o el guión
          <code>-</code> para descartar palabras en tu búsqueda. Si
          quieres obtener todos los cortes en los que aparezcan uno u otro
          término, utiliza la barra vertical
          <code>|</code>. Para utilizar
          operadores de búsqueda más avanzados, visita la documentación
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

// Make this trick to have the anchor on place below the header
#search-box {
  position: relative;
  top: -60px;
  padding-top: 60px;
}

// Vignettes slideshow
.verba-vignettes-intro {
  margin-bottom: 3rem;
  text-align: center;

  .verba-subtitle {
    margin-bottom: 0;
  }
}
.vignettes-carrousel {
  position: relative;
  // background-color: white;
  background-color: rgba($color-neutral-1000, 0.75);
  // color: white;
  width: 100%;
  height: 2rem;
  padding-top: 0.3rem;
}

.vignette-01,
.vignette-02,
.vignette-03 {
  opacity: 0;
  position: absolute;
  display: block;
  // bottom: 0.2rem;
  width: 100%;

  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;

  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.vignette-01 {
  // animation-name: move-translate;
  animation-name: anim-1;
  // animation-delay: 0s;
}

.vignette-02 {
  // animation-name: move-translate;
  animation-name: anim-2;
}

.vignette-03 {
  // animation-name: move-translate;
  animation-name: anim-3;
}

// @keyframes move-translate {
//   // 0%,
//   // 10% {
//   //   transform: translate(0, -100px);
//   //   opacity: 0;
//   // }
//   // 10%,
//   // 25% {
//   //   opacity: 1;
//   //   transform: translate(0, 0);
//   // }
//   // 33%,
//   // 100% {
//   //   opacity: 0;
//   //   transform: translate(0, 100px);
//   // }
//   0%,
//   10% {
//     opacity: 0;
//     transform: translate(0, -100px);
//   }
//   10%,
//   25% {
//     opacity: 1;
//     transform: translate(0, 0);
//   }
//   40%,
//   100% {
//     opacity: 0;
//     transform: translate(0, 100px);
//   }
//   // 100% {
//   //   opacity: 0;
//   //   transform: translate(0, 100px);
//   // }
// }

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
