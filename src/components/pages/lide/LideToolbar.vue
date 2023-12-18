<template>
    <div class="zakaznici-toolbar toolbar">
        <ToolbarButton @click="showNewWorkerDialog"><PlusIcon />Nový člověk</ToolbarButton>
        <ToolbarButton @click="removeWorker"><TrashCanIcon />Smazat člověka</ToolbarButton>

        <!-- add new worker dialog -->
        <dialog id="new-worker-dialog" ref="newWorkerDialog">
          <form>
            <label for="worker-name">Jméno nového člověka:</label>
            <input id="worker-name" type="string" v-model="name" />
            <input type="button" @click="hideNewWorkerDialog(), workersStore.addNewWorker({name})" value="uložit">
            <input type="button" @click="hideNewWorkerDialog" value="zrušit">
          </form>
        </dialog>
    </div>
</template>

<script>
import ToolbarButton from '@/components/ToolbarButton.vue'
import PlusIcon from 'icons/Plus.vue'
import TrashCanIcon from 'icons/TrashCan.vue'
import { useWorkersStore } from '@/stores/WorkersStore.js'
import { useSelectionStore } from '@/stores/SelectionStore.js'
import { mapStores } from 'pinia'

export default {
    name: "ZakazniciToolbar",
    data() {
      return {
        name: ''
      }
    },
    methods: {
      showNewWorkerDialog() {
        this.$refs.newWorkerDialog.showModal()
      },
      hideNewWorkerDialog() {
        this.$refs.newWorkerDialog.close()
      },
      removeWorker() {
        const id = this.selectionStore.currentSelectionId
        if(!id) {alert('žádný člověk nebyl vybrán');return}
        if (confirm('really?')) {
          alert(`removing worker with id ${id}`)
          this.workersStore.removeWorker(id)
        }
      }
    },
    computed: {
      ...mapStores(useWorkersStore, useSelectionStore)
    },
    components: {
        ToolbarButton,
        PlusIcon,
        TrashCanIcon
    },
    mounted() {
      this.workersStore.fetchWorkers()
    },
}
</script>
 
<style scoped>
</style>
