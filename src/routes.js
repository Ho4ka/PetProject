// routes.js

import Pizza from './components/Pizza.vue';
import Salad from './components/Salad.vue';
import AllItems from './components/AllItems.vue';



const routes = [
  { path: '', component: AllItems },
  { path: '/pizza', component: Pizza },
  { path: '/salad', component: Salad }
];

export default routes;