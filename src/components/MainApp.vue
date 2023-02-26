<template>
  <div class="main-app">
    <div class="page-section">
      <NakladyPage v-if="currentPage === 'Naklady'" />
      <UkolyPage v-if="currentPage === 'Ukoly'" />
      <LidePage v-if="currentPage === 'Lide'" />
      <PracePage v-if="currentPage === 'Prace'" />
      <ProjektyPage v-if="currentPage === 'Projekty'" />
      <ZakazniciPage v-if="currentPage === 'Zakaznici'" />
      
    </div>

    <div class="toolbar-section">
      <NakladyToolbar v-if="currentPage === 'Naklady'" />
      <UkolyToolbar v-if="currentPage === 'Ukoly'" />
      <PraceToolbar v-if="currentPage === 'Prace'" />
      <ProjektyToolbar v-if="currentPage === 'Projekty'" />
      <ZakazniciToolbar v-if="currentPage === 'Zakaznici'" />
      <LideToolbar v-if="currentPage === 'Lide'" />
      
    </div>
  </div>
</template>

<script>
import NakladyPage from '@/components/pages/naklady/NakladyPage.vue'
import UkolyPage from '@/components/pages/ukoly/UkolyPage.vue'
import LidePage from '@/components/pages/lide/LidePage.vue'
import PracePage from '@/components/pages/prace/PracePage.vue'
import ProjektyPage from '@/components/pages/projekty/ProjektyPage.vue'
import ZakazniciPage from '@/components/pages/zakaznici/ZakazniciPage.vue'

import NakladyToolbar from '@/components/pages/naklady/NakladyToolbar.vue'
import UkolyToolbar from '@/components/pages/ukoly/UkolyToolbar.vue'
import PraceToolbar from '@/components/pages/prace/PraceToolbar.vue'
import ProjektyToolbar from '@/components/pages/projekty/ProjektyToolbar.vue'
import ZakazniciToolbar from '@/components/pages/zakaznici/ZakazniciToolbar.vue'
import LideToolbar from '@/components/pages/lide/LideToolbar.vue'


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
    LidePage,
    NakladyToolbar,
    UkolyToolbar,
    LideToolbar,
    PracePage,
    ProjektyPage,
    ZakazniciPage,
    PraceToolbar,
    ProjektyToolbar,
    ZakazniciToolbar
  }
};
</script>

<style scoped>
.main-app {
  grid-area: section;
  overflow: hidden;
  height: 90vh;

  display: grid;
  grid-template-rows: 7fr 1fr;
  grid-template-areas: 
    "page"
    "toolbar";
  /* TODO: add three new components in .toolbar div. These will be similar to the components in .page div. */
}

.page-section {
  grid-area: page;
}

.toolbar-section {
  grid-area: toolbar;
}

/*General Toolbar styling*/
.toolbar {
  background-color: var(--main-color-darker);
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  
}

/*styling toolbar buttons*/
:deep(.toolbar .toolbar-button) {
    margin: 0.2rem;
    padding: 1rem;
    border: 0.2rem solid black;
    border-radius: 1rem;
    background-color: var(--main-color-lighter);
    cursor: pointer;
    box-shadow: 0.1rem 0.1rem 0.3rem rgb(37, 37, 37);
    user-select: none;
 }

 :deep(.toolbar .toolbar-button:hover) {
  background-color: var(--main-color);
 }

 :deep(.toolbar .toolbar-button:active) {
  box-shadow: none;
 }

</style>