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
        <li v-for="(programme, key) in subList" :key="key">
          <router-link
            :to="{ name: 'programme-details', params: { id: programme.id } }"
            class="nav-link verba-film-item"
          >
            <figure class="programme-img">
              <img :src="programme | imageURL" />
            </figure>
            <span class="strip-aside">{{ programme.title }}</span>
          </router-link>
        </li>
        <button v-on:click="seeMore" class="seeMoreBtn">Ver más</button>
      </ul>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      programmeList: [],
      subList:[],
      inc:10
    }
  },
  mounted() {
    Vue.verbaAPI('fetchProgrammeList', null, response => {
      this.programmeList = response.data;
      this.subList = this.programmeList.slice(1, this.inc);
    })
  },

  methods:{
    seeMore(){
      if(this.inc < this.programmeList.length){
        this.inc += 10;
        this.subList = this.programmeList.slice(1, this.inc);
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../src/scss/_variables.scss';
// TODO: I shouldn't need this again here. Something to do with the "scoped" feature of the vue components styles
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
.seeMoreBtn{
  display: block;
  width: 200px;
  height: 30px;
  margin: 20px auto;
}
.verba-programmes {
  // Mobile first
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.verba-films-strip {
  // Mobile first
  margin-left: 0;
  // Tablets
  @media all and (min-width: 768px) {
    margin-left: 18rem;
  }
  // PC
  @media all and (min-width: 1024px) {
    margin-left: 13rem;
  }
}
// Image settings
.verba-microfilms-image {
  width: 100%;
  max-width: calc(438px * #{$scale-factor});
  height: auto;
  margin-left: 2rem;
  margin-bottom: 3rem;
  // Mobile first
  // position: block;
  right: calc(50% + 5rem);
  // Tablets
  @media all and (min-width: 768px) {
    position: fixed;
    top: 35%;
    right: calc(50% + 3rem);
  }
  // PC
  @media all and (min-width: 1024px) {
    right: calc(50% + 6rem);
  }
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
  .programme-img {
    padding: 0.5rem 1rem;
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    border-right: 2px solid rgba(0, 0, 0, 0.2);
    // Tablets
    @media all and (min-width: 768px) {
      padding: 0.5rem 1.5rem;
    }
    & img {
      width: 10rem;
      opacity: 0.9;
      // Gray scale, sepia and blur effects
      -webkit-filter: grayscale(100%) sepia(0) blur(1px);
      filter: grayscale(100%) sepia(0) blur(1px);
      -webkit-transition: 1s ease-in-out;
      transition: 1s ease-in-out;
      // Tablets
      @media all and (min-width: 768px) {
        width: 12rem;
      }
    }
  }
  span {
    position: relative;
    left: 1rem;
    font-size: 0.85rem;
    padding-bottom: 0.1rem;
    text-align: left;
    &:hover {
      color: $color-neutral-1000;
      font-weight: 800;
    }
  }
}
</style>