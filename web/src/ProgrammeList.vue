<template>
  <div>
    <div class="container">
      <ul class="list-unstyled">
        <li v-for="(programme, key) in programmeList" :key="key">
          <router-link
            :to="{ name: 'programme-details', params: { id: programme.id } }"
            class="nav-link"
          >
            <img :src="programme | imageURL" />
            {{ programme.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
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
