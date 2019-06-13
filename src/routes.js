// routes.js

import Pizza from './components/Pizza.vue';
import Register from './components/Register.vue';
import Salad from './components/Salad.vue';

const routes = [
  { path: '/pizza', component: Pizza },
  { path: '/register', component: Register },
  { path: '/salad', component: Salad }
];

export default routes;