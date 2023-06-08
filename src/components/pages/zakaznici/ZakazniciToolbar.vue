<template>
    <div class="zakaznici-toolbar toolbar">
        <ToolbarButton @click="showNewCustomerDialog"><PlusIcon />Nový zákazník</ToolbarButton>
        <ToolbarButton @click="removeCustomer"><TrashCanIcon />Smazat zákazníka</ToolbarButton>

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
import TrashCanIcon from 'icons/TrashCan.vue'
import { useCustomersStore } from '@/stores/CustomersStore.js'
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
      showNewCustomerDialog() {
        this.$refs.newCustomerDialog.showModal()
      },
      hideNewCustomerDialog() {
        this.$refs.newCustomerDialog.close()
      },
      removeCustomer() {
        const id = this.selectionStore.currentSelectionId
        if(!id) {alert('žádný zákazník nebyl vybrán');return}
        if (confirm('really?')) {
          alert(`removing customer with id ${id}`)
          this.customersStore.removeCustomer(id)
        }
      }
    },
    computed: {
      ...mapStores(useCustomersStore, useSelectionStore)
    },
    components: {
        ToolbarButton,
        PlusIcon,
        TrashCanIcon
    },
    mounted() {
      this.customersStore.fetchCustomers()
    },
}
</script>
 
<style scoped>
</style>
