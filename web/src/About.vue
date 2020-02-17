<!-- eslint-disable vue/no-v-html -->
<template>
  <main>
    <div class="verba-about">
      <img
        class="verba-human-radar-image"
        src="../src/images/03RadarHumano.png"
        alt="Human radar old illustration"
      />

      <div class="verba-about-copy">
        <div class="about-project">
          <h2 class="verba-subtitle" v-html="$t('about.project.title')"></h2>
          <p v-html="$t('about.project.body')"></p>
          <p v-html="$t('about.project.bodyExtra')"></p>
        </div>

        <div class="about-us">
          <h2 class="verba-subtitle" v-html="$t('about.us.title')"></h2>
          <p v-html="$t('about.us.body')"></p>
          <p v-html="$t('about.us.newsletter')"></p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import './scss/_variables.scss';

// Default text selection
::selection {
  background: $color-highlight-1;
}
::-moz-selection {
  background: $color-highlight-1;
}

.verba-about {
  // Mobile first
  display: flex;
  flex-direction: column;
  align-items: center;

  // Tablets
  @media all and (min-width: 768px) {
    flex-direction: row;
  }

  // PC
  @media all and (min-width: 1024px) {
  }
}

.verba-about-copy {
  margin-right: 0.8rem;
  margin-left: 2rem;

  margin-top: 6rem;
  text-align: center;

  p > span {
    color: $color-neutral-1000;
  }

  .verba-subtitle {
    margin-bottom: 0;
  }

  // Tablets
  @media all and (min-width: 768px) {
    text-align: right;
  }

  // PC
  @media all and (min-width: 1024px) {
    margin-left: 5rem;
  }

  a {
    text-decoration: underline;
  }
}

.verba-human-radar-image {
  width: 100%;
  max-width: calc(435px * #{$scale-factor});
  height: auto;

  // Tablets
  @media all and (min-width: 768px) {
    order: 1;
  }

  // PC
  @media all and (min-width: 1024px) {
  }
}

//TODO: move to a better position
// All subtitles in all pages
.verba-subtitle {
  // color: red;
  color: $color-neutral-1000;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

html {
  scroll-behavior: smooth;
}
</style>
