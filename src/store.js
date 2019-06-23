import Vue from 'vue';
import Vuex from 'vuex';
import json from './static/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      forSale: json,
      inCart: [],
},
    getters: {
        forSale: state => state.forSale,
        inCart: state => state.inCart,
    },
    mutations: {
        ADD_TO_CART(state, invId) { state.inCart.push(invId); },
        REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1)
        }},
    actions: {
        addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
        removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); }
    }
});