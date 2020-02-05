<template>
  <div>
    <div>
      <div class="verba-program-transcription" v-if="content">
        <div class="verba-transcript-item">
          <h4>{{ content[0].programme.title }}</h4>
          <img :src="content[0].programme | imageURL" />
        </div>
        <div class="verba-transcript-copy">
          <p
            v-for="(item, key) in content"
            :id="item.time_start"
            :key="key"
          >{{ item.time_start | formatTime }}: {{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      content: null
    }
  },
  mounted() {
    const params = {
      programme_id: this.$route.params.id
    }
    Vue.verbaAPI('fetchProgrammeTranscription', params, response => {
      this.content = response.data
    })
  }
}
</script>

<style lang="scss">
@import './scss/_variables.scss';

.verba-program-transcription {
  margin: 0 1rem;

  // Tablets
  @media all and (min-width: 768px) {
    display: flex;
    text-align: left;
  }
}

.verba-transcript-item {
  margin-bottom: 2rem;

  h4 {
    color: $color-neutral-1000;
    font-weight: 600;
    font-size: 1rem;
  }

  img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  // Tablets
  @media all and (min-width: 768px) {
    margin-right: 2rem;
    margin-left: 3rem;

    img {
      width: 18rem;
    }
  }
}
.verba-transcript-copy {
  padding-top: 1.5rem;
  font-size: 0.8rem;
}
</style>
