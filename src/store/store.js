import Vue from 'vue';
import Vuex from 'vuex';
import shoppingCart from '../store/modules/shoppingCart.js';
import authentification from '../store/modules/authentificaton.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
shoppingCart, authentification
  },
});