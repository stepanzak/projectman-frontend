import { createStore } from "vuex"

export default createStore({
    state () {
        return {
            page: 'Chleba'
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