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
            <img :src="programme | imageURL" />
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
  width: 100px;
}
</style>