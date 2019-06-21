import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';

import routes from './routes.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({mode: 'history', routes, props: true});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');