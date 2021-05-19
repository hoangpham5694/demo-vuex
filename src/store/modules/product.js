const state = {
    products: []
}

const mutations = {
    SET_PRODUCT_LIST(state, list) {
        state.products = list;

        console.log(state.products);
    }
}
const getters = {
    getListProduct: (state) => {
        if (state.products.length !== 0) {
            return state.products
        }
        return []
    },

}
const actions = {
    deleteProductAction({commit}, params) {
        let pos = -1;
        var tmpStateProducts = state.products;
        for(let i = 0; i < tmpStateProducts.length; i++){
            if(tmpStateProducts[i].id === params.product.id){
                pos = i;
            }
        }
        if(pos > -1){
            tmpStateProducts.splice(pos, 1);
            commit('SET_PRODUCT_LIST', tmpStateProducts);
        }
    },
    initProductAction({commit}, params){
        commit('SET_PRODUCT_LIST', params.products);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
