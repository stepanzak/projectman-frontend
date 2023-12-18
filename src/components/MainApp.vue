<template>
  <UniversalSection v-if="currentPageStore.currentpage === 'Naklady'" itemName="expense" itemsRequiredToBeLoaded="task"
    :itemSchema="itemSchemas.expense">
    <!-- here comes the toolbar buttons other than default -->
  </UniversalSection>
  <!-- if isFixedPrize is false, it is hourly rate -->
  <UniversalSection v-if="currentPageStore.currentpage === 'Prace'" itemName="work" :itemSchema="itemSchemas.work">
  </UniversalSection>
  <UniversalSection v-if="currentPageStore.currentpage === 'Zakaznici'" itemName="customer"
    :itemSchema="itemSchemas.customer">
    <!-- here comes the toolbar buttons other than default -->
  </UniversalSection>
  <UniversalSection v-if="currentPageStore.currentpage === 'Projekty'" itemName="project"
    :itemSchema="itemSchemas.project">
    <!-- here comes the toolbar buttons other than default -->
  </UniversalSection>
  <UniversalSection v-if="currentPageStore.currentpage === 'Ukoly'" itemName="task" :itemSchema="itemSchemas.task">
    <!-- here comes the toolbar buttons other than default -->
  </UniversalSection>
  <UniversalSection v-if="currentPageStore.currentpage === 'Lide'" itemName="worker" :itemSchema="itemSchemas.worker">
    <!-- here comes the toolbar buttons other than default -->
  </UniversalSection>
</template>

<script setup>
import UniversalSection from '@/components/pages/universal/UniversalSection.vue'
import { ref } from 'vue'

import { useUniversalStore } from '@/stores/UniversalStore.js'
import { useCurrentPageStore } from '@/stores/CurrentPageStore'
const currentPageStore = useCurrentPageStore()
const universalStore = useUniversalStore()

const itemSchemas = ref({
  expense: `[
      {"key": "name", "defaultValue": "jméno", "type": "text"},
      {"key": "task", "defaultValue": "task", "type": "select", "selectionItemsName": "task"},
      {"key": "cost", "defaultValue": "100", "type": "number"},
      {"key": "date", "defaultValue": "date", "type": "date"},
      {"key": "description", "defaultValue": "description", "type": "text"}
    ]`,
  work: `[
      {"key": "dateStart", "defaultValue": "dateStart", "type": "date"},
      {"key": "dateEnd", "defaultValue": "dateEnd", "type": "date"},
      {"key": "worker", "defaultValue": "worker", "type": "text"},
      {"key": "task", "defaultValue": "task", "type": "text"},
      {"key": "isFixedPrize", "defaultValue": "isFixedPrize", "type": "checkbox"},
      {"key": "cost", "defaultValue": "cost", "type": "number"},
      {"key": "description", "defaultValue": "description", "type": "text"},
      {"key": "name", "defaultValue": "name", "type": "text"}
    ]`,
  customer: `[
      {"key": "name", "defaultValue": "name", "type": "text"}
    ]`,
  project: `[
      {"key": "name", "defaultValue": "name", "type": "text"},
      {"key": "customer", "defaultValue": "customer", "type": "text"},
      {"key": "description", "defaultValue": "description", "type": "text"},
      {"key": "isDone", "defaultValue": "isDone", "type": "checkbox"}
    ]`,
  task: `[
      {"key": "name", "defaultValue": "name", "type": "text"},
      {"key": "description", "defaultValue": "description", "type": "text"},
      {"key": "project", "defaultValue": "project", "type": "text"},
      {"key": "isDone", "defaultValue": "isDone", "type": "checkbox"}
    ]`,
  worker: `[
      {"key": "name", "defaultValue": "name", "type": "text"}
    ]`
})
</script>

<style scoped>
.main-app {
  grid-area: section;
  display: grid;
  grid-template-rows: auto 6rem;
  grid-template-areas:
    'page'
    'toolbar';
  overflow: hidden;
}

.page-section {
  grid-area: page;
  overflow-y: scroll;
}
</style>
