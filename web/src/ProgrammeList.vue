<template>
  <main>
    <div class="verba-programmes">
      <img
        class="verba-microfilms-image"
        src="../src/images/02Microfilms.png"
        alt="Human radar old illustration"
      />

      <!-- <ul class="list-unstyled"> -->
      <ul>
        <li v-for="(programme, key) in programmeList" :key="key">
          <router-link
            :to="{ name: 'programme-details', params: { id: programme.id } }"
            class="nav-link verba-film-item"
          >
            <figure>
              <img :src="programme | imageURL" />
            </figure>
            {{ programme.title }}
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
ol,
ul {
  list-style: none;
}

.verba-programmes {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: $color-neutral-800;

  // Tablets
  @media all and (min-width: 768px) {
    flex-direction: row;
  }

  // PC
  @media all and (min-width: 1024px) {
  }
}

// Image settings
.verba-microfilms-image {
  width: 100%;
  max-width: 300px;
  height: auto;
}

// Items settings
.verba-film-item {
  // width: 100px;

  figure img {
    width: 150px;

    // Gray scale, sepia and blur effects
    -webkit-filter: grayscale(100%) sepia(0) blur(1px);
    filter: grayscale(100%) sepia(0) blur(1px);
    -webkit-transition: 1s ease-in-out;
    transition: 1s ease-in-out;
  }
  figure:hover img {
    -webkit-filter: sepia(100%) blur(0);
    filter: sepia(100%) blur(0);
  }
}
</style>
