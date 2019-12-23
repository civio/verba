<template>
  <main>
    <div class="verba-about">
      <img
        class="verba-human-radar-image"
        src="../src/images/03RadarHumano+.png"
        alt="Human radar old illustration"
      />

      <div class="verba-about-copy">
        <div class="about-project">
          <h2>Verba Volant</h2>
          <p>
            from the Latin proverb
            <span>“Verba volant, scripta manent”,</span> “spoken words fly away, written words remain” prototypes the application of
            <span>Natural Language Processing (NLP)</span> tools and techniques to
            <span>subtitled or closed captioned videos</span>for journalistic purposes.
          </p>
          <p>
            <span>VERBA</span> is an
            <span>open source</span>web application designed to aid journalists and researchers capture and analyse captions from public TV broadcasters.
          </p>
        </div>

        <div class="about-us">
          <h2>CIVIO</h2>
          <p>
            is an
            <span>independent, non-profit organization</span> based in Spain which monitors
            <span>public authorities, reports to all citizens</span>and lobbies to achieve
            <span>true and effective transparency</span>within our institutions.
          </p>
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

  margin-top: 4rem;
  text-align: center;

  h2,
  p > span {
    color: $color-neutral-1000;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0;
    font-weight: 600;
  }

  p {
    font-size: 0.8rem;
  }

  // Tablets
  @media all and (min-width: 768px) {
    text-align: right;
  }
}

.verba-human-radar-image {
  width: 100%;
  max-width: 300px;
  height: auto;

  // Tablets
  @media all and (min-width: 768px) {
    order: 1;
  }

  // PC
  @media all and (min-width: 1024px) {
  }
}
</style>
