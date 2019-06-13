import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';

import routes from './routes';


import Pizza from './components/Pizza.vue';
import Register from './components/Register.vue';
import Salad from './components/Salad.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({mode: 'history', routes, props: true});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');