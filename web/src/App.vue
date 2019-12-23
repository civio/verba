<template>
  <!-- <div class="container"> -->
  <div class="app-container">
    <div class="verba-wrapper">
      <!-- <nav class="navbar navbar-expand-lg"> -->

      <header>
        <nav class="verba-navbar">
          <a href="/">
            <h1 class="verba-brand">
              Verba Vo
              <!--
              -->
              <span id="l">l</span>
              <span class="verba-it">
                <span id="a">a</span>
                <span id="n">n</span>
                <span id="t">t</span>
              </span>
            </h1>
          </a>

          <!-- <div id="navbarSupportedContent" class="collapse navbar-collapse"> -->
          <div id="navbarSupportedContent" class="verba-nav-pages">
            <!-- <ul class="navbar-nav mr-auto"> -->
            <ul class="verba-navbar-list">
              <li class="verba-nav-item">
                <router-link :to="{ name: 'search' }" class="verba-nav-link">Search</router-link>
              </li>
              <li class="verba-nav-item">
                <router-link :to="{ name: 'programmes' }" class="verba-nav-link">Programmes</router-link>
              </li>
              <li class="verba-nav-item">
                <router-link :to="{ name: 'about' }" class="verba-nav-link">About</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <router-view />

      <footer>
        <small>CC Civio 2019</small>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './scss/_variables.scss';

//Common resets
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

a,
u {
  color: inherit;
  text-decoration: none;
}

// Default text selection
::selection {
  background: $color-highlight-1;
}
::-moz-selection {
  background: $color-highlight-1;
}

.app-container {
  // background: url('./assets/01.jpg') lightgrey;
  // background-color: pink;
  // Background texture with callback color
  min-height: 100vh;
  background: url('./images/01.jpg') #f3f3f3;
  // background-color: #f3f3f3;
  background-position: center;

  color: $color-neutral-800;
}

.verba-wrapper {
  // Mobile
  margin: 0rem;

  //TODO: Remove this, temporary
  // border-right: 1px solid $color-neutral-1000;
  // border-left: 1px solid $color-neutral-1000;

  text-align: center;

  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // justify-content: center;

  // Tablets
  @media all and (min-width: 768px) {
    margin: 0 4rem;
    // background-color: burlywood;
  }

  // PC
  @media all and (min-width: 1024px) {
    max-width: 1024px;
    margin: 0 auto;
    // background-color: white;
  }

  // // If super-large screensize
  // @media all and (min-width: 1920px) {
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-attachment: fixed;
  // }
}

.verba-navbar {
  padding-top: 5rem;
  margin-bottom: 5rem;

  color: $color-neutral-1000;

  .verba-brand {
    font-size: 3rem;
    font-weight: 600;

    display: inline-block;
    position: relative;

    padding-left: 0.5rem;
    padding-right: 0.5rem;

    .verba-it {
      font-style: italic;
    }
    #l {
      position: relative;
      top: 2px;
    }
    #a {
      position: relative;
      bottom: 2px;
    }
    #n {
      position: relative;
      bottom: 6px;
    }
    #t {
      position: relative;
      bottom: 12px;
    }
  }

  // Lines around Verba Volant
  .verba-brand:before,
  .verba-brand:after {
    content: '';
    position: absolute;
    top: 80%;
    overflow: hidden;
    width: 5rem;
    height: 1px;
    border-bottom: 1px solid $color-neutral-1000;
  }
  .verba-brand:after {
    left: 100%;
  }
  .verba-brand:before {
    right: 100%;
  }

  .verba-navbar-list {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    padding-bottom: 0.5rem;
    border-bottom: 1px solid $color-neutral-1000;
  }

  .verba-nav-item {
    font-size: 1.8rem;

    &:hover {
      color: $color-highlight-1;
    }
    .router-link-active {
      font-weight: 1000;
    }
  }
}

// font face TEST
@font-face {
  font-family: 'lithoslight';
  src: url('./fonts/fontFace/lithos_light_regular-webfont.woff2')
      format('woff2'),
    url('./fonts/fontFace/lithos_light_regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}

.app-container {
  font-family: 'lithoslight';
}
</style>
