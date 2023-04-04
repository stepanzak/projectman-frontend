<template>
    <div>
        <ol>
            <div v-if="!customers">Loading...</div>
            <div v-else>
                <ol>
                    <li v-for="customer in customers" :key="customer._id">{{ customer.name }}</li>
                </ol>
            </div>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'ZakazniciPage',
        data() {
            return {
                customers: null
            }
        },
        methods: {
            async fetchData() {
                const response = await fetch('/customer')
                this.customers = await response.json()}
        },
        mounted() {
            this.fetchData()
        }
    }
</script>