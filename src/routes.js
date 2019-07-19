// routes.js

import Pizza from './components/Pizza.vue';
import Salad from './components/Salad.vue';
import Burger from './components/Burger.vue';
import Main from './components/Main.vue';
import History from './components/History.vue';
import signup from './components/auth/signup.vue';
import signin from './components/auth/signin.vue';



const routes = [
  { path: '/', component: Main },
  { path: '/pizza', component: Pizza },
  { path: '/salad', component: Salad },
  { path: '/burger', component: Burger },
  { path: '/history', component: History },
  { path: '/auth/signup', component: signup },
  { path: '/auth/signin', component: signin },
];

export default routes;