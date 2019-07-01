// routes.js

import Pizza from './components/Pizza.vue';
import Salad from './components/Salad.vue';
import Burger from './components/Burger.vue';
import Drink from './components/Drink.vue';
import Main from './components/Main.vue';
import History from './components/History.vue';



const routes = [
  { path: '', component: Main },
  { path: '/pizza', component: Pizza },
  { path: '/salad', component: Salad },
  { path: '/burger', component: Burger },
  { path: '/drink', component: Drink },
  { path: '/history', component: History },
];

export default routes;