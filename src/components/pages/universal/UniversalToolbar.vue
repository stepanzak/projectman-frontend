<template>
  <div class="zakaznici-toolbar toolbar">
    <ToolbarButton @click="showNewItemDialog">
      <PlusIcon />Nový zákazník
    </ToolbarButton>
    <ToolbarButton @click="removeItem">
      <TrashCanIcon />Smazat zákazníka
    </ToolbarButton>

    <!-- add new universal dialog -->
    <dialog id="new-item-dialog" ref="newItemDialog">
      <form>
        <div v-for="property in itemSchemaList">
          <label :for="property.key">{{ property.key }}:</label>
          <select v-if="property.type === 'select'" :name="property.key" :id="property.key"
            v-model="newItem[property.key]">
            <option v-for="item in universalStore.items[
              property.selectionItemsName
            ]" :value="item._id">
              {{ item.name }}
            </option>
          </select>

          <input v-else :id="property.key" :type="property.type" v-model="newItem[property.key]" onfocus="this.value=''"
            required />
        </div>
        {{ newItem }}
        <input type="submit" @click="
          hideNewItemDialog(),
          universalStore.addNewItem(props.itemName, newItem)
          " value="uložit" />
        <input type="button" @click="hideNewItemDialog" value="zrušit" />
      </form>
    </dialog>
  </div>
</template>

<script setup>
//imports:
import { ref, onMounted, computed } from 'vue' //{{{

import ToolbarButton from '@/components/ToolbarButton.vue'
import PlusIcon from 'icons/Plus.vue'
import TrashCanIcon from 'icons/TrashCan.vue'

import { useUniversalStore } from '@/stores/UniversalStore.js'
import { useSelectionStore } from '@/stores/SelectionStore.js'

const universalStore = useUniversalStore()
const selectionStore = useSelectionStore() //}}}

const props = defineProps({
  itemName: {
    type: String,
    required: true
    //for example "customer"
  },
  itemSchema: {
    type: String,
    required: true
  },
  itemsRequiredToBeLoaded: {
    //comma separated values without spaces
    type: String,
    required: false
  }
})

const newItemDialog = ref(null)

const itemSchemaList = computed(() => JSON.parse(props.itemSchema))
let defaultNewItem = {}
itemSchemaList.value.forEach((element) => {
  defaultNewItem[element.key] = element.defaultValue
})
const newItem = ref(defaultNewItem)

function showNewItemDialog() {
  newItemDialog.value.showModal()
}

function hideNewItemDialog() {
  newItemDialog.value.close()
}

function removeItem() {
  const id = selectionStore.currentSelectionId
  if (!id) {
    alert('žádný item nebyl vybrán')
    return
  }
  if (confirm('really?')) {
    alert(`removing item with id ${id}`)
    universalStore.removeItem(props.itemName, id)
  }
}

onMounted(() => {
  console.log(props.itemName)
  universalStore.fetchItems(props.itemName)
})

console.log(`props.itemsRequiredToBeLoaded ${props.itemsRequiredToBeLoaded}`)
if (props.itemsRequiredToBeLoaded) {
  itemsRequiredToBeLoaded.split(',').forEach((item) => {
    universalStore.fetchItems(item)
    console.log(`pls log required item - ${item}`)
  })
}
</script>

<style scoped>
/*General Toolbar styling*/
.toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
