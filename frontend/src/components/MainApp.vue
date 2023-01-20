<template>
  <div class="main-appp">
    <NakladyPage v-if="currentPage === 'Naklady'" />
    <UkolyPage v-if="currentPage === 'Ukoly'" />
    <LidePage v-if="currentPage === 'Lide'" />
  </div>
</template>

<script>
import NakladyPage from '@/components/pages/NakladyPage.vue'
import UkolyPage from '@/components/pages/UkolyPage.vue'
import LidePage from '@/components/pages/LidePage.vue'

export default {
  name: "MainApp",
  computed: {
    currentPage() {
      return this.$store.getters.getCurrentPage;
    },
  },
  components: {
    NakladyPage,
    UkolyPage,
    LidePage
  }
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