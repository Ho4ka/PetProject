// routes.js

import Pizza from './components/Pizza.vue';
import Salad from './components/Salad.vue';
import Burger from './components/Burger.vue';
import Main from './components/Main.vue';
import History from './components/History.vue';
import signup from './components/auth/signup.vue';
import signin from './components/auth/signin.vue';
import store from './store/modules/authentificaton.js';



const routes = [
  { path: '/', component: Main },
  { path: '/pizza', component: Pizza,
    beforeEnter(to, from, next) {
    if(store.state.idToken) {
      next();
    } else {
      next('/auth/signup');
    }
    }
  },
  { path: '/salad', component: Salad,
      beforeEnter(to, from, next) {
          if(store.state.idToken) {
              next();
          } else {
              next('/auth/signup');
          }
      }},
  { path: '/burger', component: Burger,
      beforeEnter(to, from, next) {
          if(store.state.idToken) {
              next();
          } else {
              next('/auth/signup');
          }
      }},
  { path: '/history', component: History,
      beforeEnter(to, from, next) {
          if(store.state.idToken) {
              next();
          } else {
              next('/auth/signup');
          }
      }},
  { path: '/auth/signup', component: signup },
  { path: '/auth/signin', component: signin },
];

export default routes;