<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <input type="text" class="form-control" id="search" placeholder="Search a term">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
</style>
