<template>
  <main>
    <div class="verba-programmes">
      <img
        class="verba-microfilms-image"
        src="../src/images/02Microfilms-es.png"
        alt="Human radar old illustration"
      />

      <!-- Film strips -->
      <ul class="verba-films-strip">
        <li v-for="(programme, key) in programmeList" :key="key">
          <router-link
            :to="{ name: 'programme-details', params: { id: programme.id } }"
            class="nav-link verba-film-item"
          >
            <figure>
              <img :src="programme | imageURL" />
            </figure>
            <span class="strip-aside">{{ programme.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      programmeList: []
    }
  },
  mounted() {
    Vue.verbaAPI('fetchProgrammeList', null, response => {
      this.programmeList = response.data
    })
  }
}
</script>

<style scoped lang="scss">
@import '../src/scss/_variables.scss';

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

.verba-programmes {
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: $color-neutral-800;

  // Tablets
  @media all and (min-width: 768px) {
    flex-direction: row;
  }

  // PC
  @media all and (min-width: 1024px) {
  }
}

.verba-films-strip {
  margin-left: 20rem;
}

// Image settings
.verba-microfilms-image {
  width: 100%;
  max-width: calc(438px * #{$scale-factor});
  height: auto;

  position: fixed;
  top: 35%;
  right: calc(50% + 7rem);
  // position: sticky;
  // top: 50px;
}

.verba-film-item:hover .strip-aside {
  color: $color-neutral-1000;
  font-weight: 800;
}

.verba-film-item:hover:hover img {
  -webkit-filter: sepia(100%) blur(0);
  filter: sepia(100%) blur(0);
}

// Items settings
.verba-film-item {
  display: flex;
  align-items: flex-end;
  color: $color-neutral-800;

  figure {
    padding: 0.5rem 1.5rem;

    border-left: 1px solid black;
    border-right: 1px solid black;
    // -webkit-filter: blur(1px);
    // filter: blur(1px);
  }
  figure img {
    width: 12rem;
    opacity: 0.9;

    // Gray scale, sepia and blur effects
    -webkit-filter: grayscale(100%) sepia(0) blur(1px);
    filter: grayscale(100%) sepia(0) blur(1px);
    -webkit-transition: 1s ease-in-out;
    transition: 1s ease-in-out;
  }

  span {
    position: relative;
    left: 1rem;
    font-size: 0.8rem;
    padding-bottom: 0.4rem;

    &:hover {
      color: $color-neutral-1000;
      font-weight: 800;
    }
  }
}
</style>
