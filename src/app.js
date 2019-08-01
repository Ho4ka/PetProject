import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import routes from './routes.js';
import store from './store/store';
import Vuelidate from 'vuelidate';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faTrash, faPizzaSlice, faSeedling, faHamburger, faWineBottle, faHistory} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.use(Vuelidate);
Vue.use(BootstrapVue);

library.add(faShoppingCart,faTrash, faPizzaSlice, faSeedling, faHamburger, faWineBottle, faHistory);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({mode: 'hash', routes, props: true, linkExactActiveClass: 'is-active'});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');