<template>
    <div>
        <ol>
            <div v-if="!workersStore.lastFetch">Loading...</div>
            <div v-else>
        <ItemsTable :items="workersStore.getWorkers" />
            </div>
        </ol>

    </div>
</template>

<script>
    import { useWorkersStore } from '@/stores/WorkersStore.js'
    import { mapStores } from 'pinia'

    import ItemsTable from '@/components/ItemsTable.vue'
    export default {
        name: 'ZakazniciPage',
        /*data() {
            return {
                //workers: null
            }
        },*/
        computed: {
          ...mapStores(useWorkersStore)
        },
        components: {
          ItemsTable
        }
    }
</script>
