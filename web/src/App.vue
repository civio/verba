<template>
  <div class="app-container">
    <div class="verba-wrapper">
      <header>
        <nav class="verba-navbar">
          <a href="/">
            <h1 class="verba-brand">
              <span>Verba Vo</span>
              <span id="l">l</span>
              <span class="verba-it">
                <span id="a">a</span>
                <span id="n">n</span>
                <span id="t">t</span>
              </span>
            </h1>
          </a>

          <div id="navbarSupportedContent" class="verba-nav-pages">
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

      <footer class="verba-footer">
        <small>Civio 2019 | Licencia CC BY-SA 3.0</small>
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

///////////

.app-container {
  position: relative;
  min-height: 100vh;
  padding-bottom: 5rem;

  // Background texture with callback color
  min-height: 100vh;
  background: url('./images/background.jpg') #f3f3f3;
  // background-position: center;

  color: $color-neutral-800;
}

.verba-wrapper {
  // Mobile
  margin: 0rem;
  text-align: center;

  // Tablets
  @media all and (min-width: 768px) {
    margin: 0 4rem;
  }

  // PC
  @media all and (min-width: 1024px) {
    max-width: 1024px;
    margin: 0 auto;
  }
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
    width: 8.7rem;
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

.verba-footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2.5rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>
