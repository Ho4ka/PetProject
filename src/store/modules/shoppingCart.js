
import json from '../../static/data.json';
 const state = {
    forSale: json,
    inCart: []
  };
 const mutations = {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1)},
    CLEAR_CART(state){
      state.inCart = [];
    }
  };
  const actions = {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
    clearCart(state) { state.commit("CLEAR_CART"); },

  };
  const getters = {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  };


export default {
  state,
  getters,
  mutations,
  actions
};