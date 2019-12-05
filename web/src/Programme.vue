<template>
  <div>
    <div class="container">
      <div v-if="content">
        <h4>{{ content[0].programme.title }}</h4>
        <img :src="content[0].programme | imageURL" />
        <p v-for="(item, key) in content" :id="item.time_start" :key="key">
          {{ item.time_start | formatTime }}: {{ item.content }}
        </p>
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
