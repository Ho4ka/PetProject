<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Food order</router-link>
    </div>
    <nav >
      <ul class="d-flex align-items-center">
        <li>
          <router-link to='/history'>
            <button>History</button>
          </router-link>
        </li>
        <li>
          <ShoppingCart class="shopping-card"/>
        </li>
        <li style="color: white">{{ user  }}</li>
        <li v-if="!auth">
          <router-link to="/auth/signup">Sign Up</router-link>
        </li>
        <li v-if="!auth">
          <router-link to="/auth/signin">Sign In</router-link>
        </li>
        <li v-if="auth">
          <button @click="onLogout" class="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import ShoppingCart from "./ShoppingCart.vue";
  export default {
    components: { ShoppingCart },
    computed: {
      auth () {
        return this.$store.getters.isAuthenticated
      },
      name() {
        return !this.$store.getters.user ? false : this.$store.getters.user;
      },
      user(){
        return this.$store.getters.user;
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout');
        this.$store.dispatch('clearAuthData');
      }
    }
  }
</script>

<style scoped>
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
   align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa923f;
  }

  .logout {
    background-color: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
  }
</style>