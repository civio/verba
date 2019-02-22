<template>
  <div class="row my-4">
    <div class="col-lg-8 col-xl-6 offset-lg-2 offset-xl-3">
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
  computed: mapState({
    results: state => state.results
  })
}
</script>
