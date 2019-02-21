<template>
  <div class="my-4">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in results" :key="item.id">
        {{ item.programme.title }}
        <br>
        <small>({{ item.time_start }} - {{ item.time_end }})</small>
      </li>
    </ul>
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
