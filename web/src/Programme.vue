<template>
  <div>
    <div>
      <div v-if="content" class="verba-program-transcription">
        <div class="verba-transcript-item">
          <h4>{{ content[0].programme.title }}</h4>
          <img :src="content[0].programme | imageURL" />
          <span
            class="badge badge-secondary video-link"
            @click="onGoToFullVideoBtnClick()"
          >{{ $t('programme.goToFullVideo') }}</span>
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
    // If we're deep-linking into a particular fragment, show that one
    // console.log(location.hash)
    setTimeout(() => window.open(location.hash, '_self'), 1000)
  },
  methods: {
    onGoToFullVideoBtnClick() {
      const programme_id = this.$route.params.id
      const URL = `https://www.rtve.es/alacarta/videos/telediario/telediario-21-horas-01-03-20/${programme_id}`
      window.open(URL, '_blank')
    }
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
    text-align: center;

    // Tablets
    @media all and (min-width: 768px) {
      text-align: right;
    }
  }

  img {
    width: 15rem;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  // Tablets
  @media all and (min-width: 768px) {
    margin-right: 2rem;
    margin-left: 3rem;
  }
}
.verba-transcript-copy {
  font-size: 0.8rem;
  text-align: left;

  // Make this trick to have all paragraph anchors on place below the header
  p {
    padding-top: 60px;
    margin-top: -60px;
  }
}

.video-link {
  margin-top: 0.8rem;
  margin-right: 0;
  float: right;
  cursor: pointer;
}
</style>
