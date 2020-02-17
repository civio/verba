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
  background-color: grey;
  // color: white;
  width: 100%;
  height: 2rem;
  // mark {
  //   text-align: center;
  //   padding-bottom: 0.1rem;
  //   padding-top: 0.1rem;
  // }
}

.vignette-01,
.vignette-02,
.vignette-03 {
  opacity: 0;
  position: absolute;
  display: block;
  // bottom: 0.2rem;
  width: 100%;

  font-size: 1.2rem;
  text-transform: uppercase;

  animation-duration: 20s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.vignette-01 {
  animation-name: move-translate;
  // animation-delay: 0s;
  // color: red;
  // border: 1px solid red;
}

.vignette-02 {
  animation-name: move-translate;
  animation-delay: 3s;
  // color: blue;
  // border: 1px solid blue;
  // visibility: hidden;
}

.vignette-03 {
  animation-name: move-translate;
  animation-delay: 6s;
  // color: green;
  // border: 1px solid green;
  // visibility: hidden;
}

@keyframes move-translate {
  // 0%,
  // 10% {
  //   transform: translate(0, -100px);
  //   opacity: 0;
  // }
  // 10%,
  // 25% {
  //   opacity: 1;
  //   transform: translate(0, 0);
  // }
  // 33%,
  // 100% {
  //   opacity: 0;
  //   transform: translate(0, 100px);
  // }
  0% {
    opacity: 0;
    transform: translate(0, -100px);
  }
  3% {
    opacity: 1;
    transform: translate(0, 0);
  }
  97% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 100px);
  }
}
</style>
