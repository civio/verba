<template>
  <div class="row my-4" v-show="query !== ''">
    <div class="col-lg-8 col-xl-6 offset-lg-2 offset-xl-3">
      <p>{{ results.length }} results for <strong>{{ query }}</strong></p>
      <ul class="list-group">
        <li class="list-group-item" v-for="item in results" :key="item.id">
          {{ item.programme.title }}
          <br>
          <small>({{ item.time_start }} - {{ item.time_end }})</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Results',
  computed: {
    ...mapState(['query', 'results'])
  }
}
</script>
