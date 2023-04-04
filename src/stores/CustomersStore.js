import { defineStore } from "pinia";

export const useCustomersStore = defineStore('customers', {
    state: () => ({
        customers: []
    }),
    getters: {
        getCustomerById(id) {
            return this.customers.find(customer => customer._id === id)
        }
    },
    actions: {
        async fetchCustomers() {
            const fetchedCustomers = await fetch('/customer')
            const newCustomers = await fetchedCustomers.json()
            this.customers = newCustomers
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