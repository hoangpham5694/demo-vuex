import { createStore } from 'vuex'

import product from './modules/product'

const store = new createStore({
    modules: {
        product
    },

})

export default store
