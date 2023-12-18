<template>
  <div>
    <ol>
      <div v-if="!universalStore.lastFetch[props.itemName]">
        Loading...
      </div>
      <div v-else>
        <ItemsTable :items="universalStore.items[props.itemName]" />
      </div>
    </ol>
  </div>
</template>

<script setup>
import { useUniversalStore } from '@/stores/UniversalStore.js'
const universalStore = useUniversalStore()

import ItemsTable from '@/components/ItemsTable.vue'

const props = defineProps({
  itemName: {
    type: String,
    required: true,
    //for example "customer"
  },
})
</script>
