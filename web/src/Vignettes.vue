<template>
  <main>
    <div class="verba-vignettes">
      <p>vignettes test</p>
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

.verba-vignettes {
  background-color: pink;
}
</style>
