<template>
    <div>
        <ol>
            <div v-if="!customersStore.lastFetch">Loading...</div>
            <div v-else>
        <ItemsTable :items="customersStore.getCustomers" />
            </div>
        </ol>

    </div>
</template>

<script>
    import { useCustomersStore } from '@/stores/CustomersStore.js'
    import { mapStores } from 'pinia'

    import ItemsTable from '@/components/ItemsTable.vue'
    export default {
        name: 'ZakazniciPage',
        /*data() {
            return {
                //customers: null
            }
        },*/
        computed: {
          ...mapStores(useCustomersStore)
        },
        components: {
          ItemsTable
        }
    }
</script>
