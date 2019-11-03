<template>
  <div>
    <div class="container">
      <ul class="list-unstyled">
        <li v-for="(programme, key) in programmeList" :key="key">
          {{ programme }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      programmeList: []
    }
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL + 'fetchProgrammeList')
      .then(response => {
        this.programmeList = response.data
      })
  }
}
</script>
