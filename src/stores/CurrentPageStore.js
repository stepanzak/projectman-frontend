/* eslint-disable no-unused-labels */
import { defineStore } from 'pinia'

export const useCurrentPageStore = defineStore('currentpage', {
    state: () => ({
        currentpage: 'Naklady'
    }),
    getters: {
        currentPage(state) {
            return state.currentpage
        }
    },
    actions: {
        changePage(page) {
            this.currentpage = page
        }
    }
})