<template>
    <div class="zakaznici-toolbar toolbar">
        <div class="toolbar-button">tlacitko</div>
        <div class="toolbar-button">tlacitko</div>
        <ToolbarButton @click="showNewCustomerDialog"><PlusIcon />Nový zákazník</ToolbarButton>

        <!-- add new customer dialog -->
        <dialog id="new-customer-dialog" ref="newCustomerDialog">
          <form>
            <label for="customer-name">Jméno nového zákazníka:</label>
            <input id="customer-name" type="string" v-model="name" />
            <input type="button" @click="hideNewCustomerDialog(), customersStore.addNewCustomer({name})" value="uložit">
            <input type="button" @click="hideNewCustomerDialog" value="zrušit">
          </form>
        </dialog>
    </div>
</template>

<script>
import ToolbarButton from '@/components/ToolbarButton.vue'
import PlusIcon from 'icons/Plus.vue'
import { useCustomersStore } from '@/stores/CustomersStore.js'
import { mapStores } from 'pinia'

export default {
    name: "ZakazniciToolbar",
    data() {
      return {
        name: ''
      }
    },
    methods: {
      showNewCustomerDialog() {
        this.$refs.newCustomerDialog.showModal()
      },
      hideNewCustomerDialog() {
        this.$refs.newCustomerDialog.close()
      }
    },
    computed: {
      ...mapStores(useCustomersStore)
    },
    components: {
        ToolbarButton,
        PlusIcon
    },
    mounted() {
      this.customersStore.fetchCustomers()
    },
}
</script>
 
<style scoped>
</style>
