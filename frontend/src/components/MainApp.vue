<template>
  <div class="main-appp">{{ currentCount }}</div>
</template>

<script>
export default {
  name: "MainApp",
  computed: {
    currentCount() {
      return this.$store.getters.getCurrentPage;
    },
  },
};
</script>

<style>
.main-appp {
    padding: 1rem;
    grid-area: section;
    overflow: scroll;
    height: 90vh;
}
</style>