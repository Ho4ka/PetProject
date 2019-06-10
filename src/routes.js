// routes.js

import Pizza from './components/Pizza.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

const routes = [
  { path: '/pizza', component: Pizza },
  { path: '/register', component: Register },
  { path: '/login', component: Login }
];

export default routes;