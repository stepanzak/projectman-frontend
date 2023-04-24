<template>
    <div>
        <ol>
            <div v-if="!customersStore.lastFetch">Loading...</div>
            <div v-else>
                <ol>
                  <li v-for="customer in customersStore.getCustomers" :key="customer._id">{{ customer.name }}</li>
                  {{ customersStore.getCustomers }}
                </ol>
            </div>
        </ol>
    </div>
</template>

<script>
    import { useCustomersStore } from '@/stores/CustomersStore.js'
    import { mapStores } from 'pinia'
    console.log(useCustomersStore)
    console.log(mapStores)

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
    }
</script>
