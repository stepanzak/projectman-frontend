import { defineStore } from "pinia";
const API = 'http://localhost:8000'
export const useCustomersStore = defineStore('customers', {
    state: () => ({
        customers: [],
        lastFetch: 0
    }),
    getters: {
        getCustomers() {
          this.fetchCustomers()
          return this.customers
        },
        getCustomerById(id) {
            return this.customers.find(customer => customer._id === id)
        }
    },
    actions: {
        async fetchCustomers(isForced) {
          console.log('can I fetch customers?', this.lastFetch)
          const date = new Date
          const thisFetch = date.getTime()
          if (isForced || thisFetch - this.lastFetch >= 10000) {
            console.log(`fetching customers, forced: ${isForced}, thisFetch - this.lastFetch = ${thisFetch - this.lastFetch}`)
            const fetchedCustomers = await fetch(`${API}/customer`)
            const newCustomers = await fetchedCustomers.json()
            if (newCustomers !== this.customers) {
              console.log(newCustomers, this.customers)
              this.customers = newCustomers
            }
            this.lastFetch = thisFetch
          }
            
        },
        async addNewCustomer(customer) {
            try {
                await fetch(`${API}/customer`, {
                    method: "POST",
                    body: JSON.stringify(customer),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            } catch (error) {
                console.log(error)
                alert('An error occured! Check the console for more info.')
                return error
            }
          this.fetchCustomers(true)
        }
    }
})
