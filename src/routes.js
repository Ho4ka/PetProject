// routes.js

import Pizza from './components/Pizza.vue';
import Salad from './components/Salad.vue';
import Burger from './components/Burger.vue';
import Drink from './components/Drink.vue';
import AllItems from './components/AllItems.vue';



const routes = [
  { path: '', component: AllItems },
  { path: '/pizza', component: Pizza },
  { path: '/salad', component: Salad },
  { path: '/burger', component: Burger },
  { path: '/drink', component: Drink },
];

export default routes;