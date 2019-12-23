<template>
  <!-- <div class="container"> -->
  <div class="app-container">
    <div class="verba-wrapper">
      <!-- <nav class="navbar navbar-expand-lg"> -->

      <header>
        <nav class="verba-navbar">
          <!-- <a class="verba-brand" href="/">Verba Volant</a> -->
          <h1 class="verba-brand">Verba Volant</h1>

          <!-- <div id="navbarSupportedContent" class="collapse navbar-collapse"> -->
          <div id="navbarSupportedContent" class="verba-nav-pages">
            <!-- <ul class="navbar-nav mr-auto"> -->
            <ul class="verba-navbar-list">
              <li class="verba-nav-item">
                <router-link :to="{ name: 'search' }" class="verba-nav-link"
                  >Search</router-link
                >
              </li>
              <li class="verba-nav-item">
                <router-link :to="{ name: 'programmes' }" class="verba-nav-link"
                  >Programmes</router-link
                >
              </li>
              <li class="verba-nav-item">
                <router-link :to="{ name: 'about' }" class="verba-nav-link"
                  >About</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <router-view />
      </main>

      <footer>
        <small>civio</small>
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

.app-container {
  // background: url('./assets/01.jpg') lightgrey;
  // background-color: pink;
  // Background texture with callback color
  min-height: 100vh;
  background: url('./images/01.jpg') #f3f3f3;
  // background-color: #f3f3f3;
  background-position: center;

  color: $color-neutral-1000;
}

.verba-wrapper {
  // Mobile
  margin: 0rem;
  //TODO: Remove this, temporary
  border-right: 1px solid $color-neutral-1000;
  border-left: 1px solid $color-neutral-1000;

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

  .verba-brand {
    font-size: 4rem;

    display: inline-block;
    position: relative;

    padding-left: 0.5rem;
    padding-right: 0.5rem;
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

    padding-bottom: 0.7rem;
    border-bottom: 1px solid $color-neutral-1000;
  }

  .verba-nav-item {
    font-size: 2rem;

    &:hover {
      color: crimson;
    }
  }
}
</style>
