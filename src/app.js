import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import routes from './routes.js';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faTrash, faPizzaSlice, faSeedling, faHamburger, faWineBottle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue);

library.add(faShoppingCart,faTrash, faPizzaSlice, faSeedling, faHamburger, faWineBottle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.filter('toUSD', function (value) {
    return `$${value}`;
});

// Vue.use(VueFirestore);

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({mode: 'hash', routes, props: true});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');