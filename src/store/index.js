import { createStore } from "vuex"

export default createStore({
    state () {
        return {
            page: 'Naklady'
        }
    },

    mutations: {
        changePage(state, page) {
            state.page = page
        }
    },
    getters: {
        getCurrentPage(state) {
          return state.page;
        }
    }
    
})