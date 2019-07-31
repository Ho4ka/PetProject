<template>
  <header id="header">
    <div class="logo">
      <router-link class="logo-name" to="/signup">Keeper</router-link>
    </div>
    <nav >
      <ul class="d-flex align-items-center">
        <li v-if="auth">
          <router-link to='/history'>
            <button :disabled="!this.auth" class="btn btn-warning">
              <font-awesome-icon class="icon-history" icon="history"/>
            </button>
          </router-link>
        </li>
        <li>
          <ShoppingCart v-if="auth" class="shopping-card"/>
        </li>
        <li class="waiter-name" v-if="name">{{ name }}</li>
        <li v-if="!auth">
          <router-link  to="/signup">Sign Up</router-link>
        </li>
        <li v-if="!auth">
          <router-link to="/signin">Sign In</router-link>
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
        return !this.$store.getters.user ? false : this.$store.getters.user.name;
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout');
        this.$store.dispatch('clearAuthData');
        this.$router.push({ path: '/signin' });
        this.$store.dispatch('clearCart');
      }
    }
  }
</script>

<style lang="scss" scoped>
#header {
  height: 56px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #521751;
  padding: 0 20px;

  .logo {
    font-weight: bold;
    color: yellow;
    letter-spacing: 2px;
  }

  .logo a {
    text-decoration: none;
    color: #f1b601;
    vertical-align: text-bottom;
  }

  .logo-name {
    font-size: 38px;
    color: silver;
    text-shadow: 0 1px 1px #bbb,
    0 2px 0 #999,
    0 3px 0 #888,
    0 4px 0 #777,
    0 5px 0 #666,
    0 6px 0 #555,
    0 7px 0 #444,
    0 8px 0 #333,
    0 9px 7px #302314;
  }

  nav {
    height: 100%;
  }

  .waiter-name {
    color: #f1b601;
  }
  .btn-warning:hover {
    color: white;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
 align-items: center;

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
}

.logout {
  background-color: transparent;
  border: none;
  font: inherit;
  color: white;
  cursor: pointer;
}
</style>