<template>
  <div class="main-app">
    <div class="page-section" autofocus >
      <UniversalPage :itemName="props.itemName"/>
    </div>

    <div class="toolbar-section">
      <UniversalToolbar :itemName="props.itemName" :itemSchema="props.itemSchema" />
    </div>
  </div>
</template>
<script setup>
  import UniversalPage from '@/components/pages/universal/UniversalPage.vue'
  import UniversalToolbar from '@/components/pages/universal/UniversalToolbar.vue'
  const props = defineProps({
    itemName: {
      type: String,
      required: true
      //for example "customer"
    },
    itemSchema: {
      type: String,
      required: true
    }
  })
</script>

<style scoped>
.toolbar-section {
  width: 100%;
  background-color: var(--main-color-darker);
  grid-area: toolbar;
  display: flex;
  flex-direction: column;
}
</style>
