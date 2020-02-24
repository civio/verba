<template>
  <div class="app-container">
    <div class="verba-wrapper">
      <header>
        <nav id="civio-navbar">
          <div id="civio-navbar-brand-cont">
            <a id="civio-navbar-brand" href="https://civio.es/" title="Civio">
              <svg
                width="100"
                height="23"
                class="icon-civio"
                viewBox="0 0 200 45"
                version="1.1"
                aria-hidden="true"
              >
                <g fill-rule="evenodd">
                  <path
                    id="p1"
                    d="M188.3 0c5.56 0 10.06 4.42 10.06 9.87 0 5.45-4.5 9.87-10.06 9.87-5.55 0-10.06-4.42-10.06-9.87 0-5.45 4.5-9.87 10.06-9.87z"
                  />
                  <path
                    id="p2"
                    d="M178.24 34.4c0-5.46 4.5-9.88 10.06-9.88s10.06 4.42 10.06 9.87c0 5.4-4.5 9.83-10.06 9.83-5.55 0-10.06-4.43-10.06-9.87"
                  />
                  <path d="M58 1.3h12l16.9 41.6h-12z" />
                  <path
                    d="M104.2 1.3h-12L75.25 42.9h12zM36.46 7C28.12-1.35 14.6-1.35 6.26 7c-8.34 8.33-8.34 21.87 0 30.2 8.33 8.34 21.86 8.34 30.2 0l-7.55-7.55c-4.13 4.17-10.9 4.17-15.1 0s-4.14-10.93 0-15.1 10.97-4.17 15.1 0L36.5 7zM154.6 29.65c-4.17 4.17-10.94 4.17-15.1 0-4.17-4.17-4.17-10.93 0-15.1 4.16-4.17 10.93-4.17 15.1 0 4.16 4.17 4.16 10.93 0 15.1M162.15 7c-8.34-8.34-21.87-8.34-30.2 0-8.35 8.33-8.35 21.87 0 30.2 8.33 8.34 21.86 8.34 30.2 0 8.33-8.33 8.33-21.87 0-30.2M43.2 42.9h10.75V1.3H43.2zm65.04 0H119V1.3h-10.76z"
                  />
                </g>
              </svg>
            </a>
          </div>
          <a
            id="civio-navbar-donate-btn"
            href="https://civio.es/socios/?source=banner-top"
            title="Hazte socio"
          >Hazte socio</a>
        </nav>
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
                <router-link
                  :to="{ name: 'search' }"
                  exact
                  class="verba-nav-link"
                >{{ $t('header.search') }}</router-link>
              </li>
              <li class="verba-nav-item">
                <router-link
                  :to="{ name: 'vignettes' }"
                  class="verba-nav-link"
                >{{ $t('header.vignettes') }}</router-link>
              </li>
              <li class="verba-nav-item">
                <router-link
                  :to="{ name: 'programmes' }"
                  class="verba-nav-link"
                >{{ $t('header.programmes') }}</router-link>
              </li>
              <li class="verba-nav-item">
                <router-link :to="{ name: 'about' }" class="verba-nav-link">
                  {{
                  $t('header.about')
                  }}
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <router-view />

      <footer class="verba-footer">
        <small>
          <strong>
            <a href="https://civio.es">CIVIO</a> 2020
          </strong>
          | Licencia
          <a
            href="https://creativecommons.org/licenses/by-sa/3.0/deed.es"
            title="Licencia Creative Commons Atribución - Compartir Igual 3.0"
            target="_blank"
            rel="noopener noreferrer"
          >CC BY-SA 3.0</a>
          |
          <a href="https://civio.es/aviso-legal/">Aviso legal</a>
          |
          <a href="https://civio.es/politica-de-privacidad/">Política de privacidad</a>
          |
          <a href="https://civio.es/politica-de-cookies/">Política de cookies</a>
        </small>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './scss/_variables.scss';
@import './scss/_civio-navbar.scss';

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
  font-family: 'El Messiri', sans-serif;
  font-size: 1rem;
}

///////////

.app-container {
  position: relative;
  min-height: 100vh;
  padding-bottom: 5rem;
  min-height: 100vh;
  color: $color-neutral-800;

  // Background texture (responsive) with callback color
  // Mobile (default)
  background-color: #f3f3f3; // Callback
  background-image: linear-gradient(
      rgba(255, 255, 255, $ligthtness-factor),
      rgba(255, 255, 255, $ligthtness-factor)
    ),
    url('./images/bcg@0,25x.jpg');

  // Tablet
  @media all and (min-width: 481px) {
    background-image: linear-gradient(
        rgba(255, 255, 255, $ligthtness-factor),
        rgba(255, 255, 255, $ligthtness-factor)
      ),
      url('./images/bcg@0,5x.jpg');
  }

  // PC regular
  @media all and (min-width: 961px) {
    background-image: linear-gradient(
        rgba(255, 255, 255, $ligthtness-factor),
        rgba(255, 255, 255, $ligthtness-factor)
      ),
      url('./images/bcg@0,75x.jpg');
  }

  // PC big screen
  @media all and (min-width: 1441px) {
    background-image: linear-gradient(
        rgba(255, 255, 255, $ligthtness-factor),
        rgba(255, 255, 255, $ligthtness-factor)
      ),
      url('./images/bcg.jpg');
  }
}

.verba-wrapper {
  // Mobile first
  margin: 0 1rem;
  text-align: center;
  overflow-x: auto;

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
  // Mobile first
  padding-top: 5rem;
  margin-bottom: 3rem;

  color: $color-neutral-1000;

  .verba-brand {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;

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

    // Tablets
    @media all and (min-width: 768px) {
      font-size: 3rem;
    }
  }

  // Tablets
  @media all and (min-width: 768px) {
    padding-top: 6rem;
  }

  // Lines around Verba Volant
  .verba-brand:before,
  .verba-brand:after {
    content: '';
    position: absolute;
    top: 80%;
    overflow: hidden;
    width: 100%;
    max-width: 8.7rem;
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
    max-width: 530px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding-bottom: 0.3rem;
    border-bottom: 1px solid $color-neutral-1000;

    // Tablets
    @media all and (min-width: 768px) {
      max-width: 650px;
      padding-bottom: 0.5rem;
      flex-direction: row;
    }
  }

  .verba-nav-item {
    font-size: 1.5rem;

    // Tablets
    @media all and (min-width: 768px) {
      font-size: 1.8rem;
    }

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
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);

  font-size: 1rem;
  text-align: center;

  a:hover {
    text-decoration-line: underline;
  }
}
</style>
