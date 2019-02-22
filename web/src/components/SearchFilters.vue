<template>
  <div class="search-filters">
    <button class="btn btn-sm btn-outline-secondary">Date</button>
    <button class="btn btn-sm btn-outline-secondary">Type</button>
    <button class="btn btn-sm btn-outline-secondary">Group</button>
  </div>
</template>

<script>
export default {
  name: "SearchFilters"
};
</script>

<style lang="scss" scoped>
.search-filters {
  margin-top: 1.25rem;
}
.btn {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
