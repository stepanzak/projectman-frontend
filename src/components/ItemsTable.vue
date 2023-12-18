<template>
  <div>
    <table ref="itemsTable">
      <th v-for="(value, key) in props.items[0]">{{ key }}</th>
      <tr v-for="item in props.items" :key="item._id"  @click="selectRow(item._id, $event)">
        <td v-for="value in item" :key="key">{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
  import { useSelectionStore } from '@/stores/SelectionStore.js'
  const selection = useSelectionStore()

  const props = defineProps({
    items: {
      type: Array,
      required: true
    }
  });

  const selectRow = function(id, event) {
    selection.currentSelectionId = id
    if(document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected')
    } 
    event.target.parentElement.classList.add('selected')
  }

</script>

<style scoped>
tr {
  cursor: pointer;
}

.selected {
  background-color: var(--main-color-lighter);
}
</style>
