<template>
  <div class="main-app">
    <div class="page-section" autofocus >
      <NakladyPage v-if="currentPageStore.currentpage === 'Naklady'" />
      <UkolyPage v-if="currentPageStore.currentpage === 'Ukoly'" />
      <LidePage v-if="currentPageStore.currentpage === 'Lide'" />
      <PracePage v-if="currentPageStore.currentpage === 'Prace'" />
      <ProjektyPage v-if="currentPageStore.currentpage === 'Projekty'" />
      <ZakazniciPage v-if="currentPageStore.currentpage === 'Zakaznici'" />
      
    </div>

    <div class="toolbar-section">
      <NakladyToolbar v-if="currentPageStore.currentpage === 'Naklady'" />
      <UkolyToolbar v-if="currentPageStore.currentpage === 'Ukoly'" />
      <PraceToolbar v-if="currentPageStore.currentpage === 'Prace'" />
      <ProjektyToolbar v-if="currentPageStore.currentpage === 'Projekty'" />
      <ZakazniciToolbar v-if="currentPageStore.currentpage === 'Zakaznici'" />
      <LideToolbar v-if="currentPageStore.currentpage === 'Lide'" />
      
    </div>
  </div>
</template>

<script setup>
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

import { useCurrentPageStore } from '@/stores/CurrentPageStore'
const currentPageStore = useCurrentPageStore()
</script>

<style scoped>
.main-app {
  grid-area: section;
  display: grid;
  grid-template-rows: auto 6rem;
  grid-template-areas: 
    "page"
    "toolbar";
    overflow: hidden;
}

.page-section {
  grid-area: page;
  overflow-y: scroll;
}

.toolbar-section {
  width: 100%;
  background-color: var(--main-color-darker);
  grid-area: toolbar;
  display: flex;
  flex-direction: column;
}

/*General Toolbar styling*/
.toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
