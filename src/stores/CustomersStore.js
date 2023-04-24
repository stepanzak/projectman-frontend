import { defineStore } from "pinia";

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
        async fetchCustomers() {
          console.log('can I fetch customers?')
          const date = new Date
          const thisFetch = date.getTime()
          if (thisFetch - this.lastFetch >= 10000) {
            console.log('fetching customers')
            const fetchedCustomers = await fetch('/customer')
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
                await fetch("/customer", {
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
            this.customers.push(customer)
        }
    }
})
