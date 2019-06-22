import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import routes from './routes.js';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.use(BootstrapVue);


library.add(faShoppingCart);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({mode: 'hash', routes, props: true});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');