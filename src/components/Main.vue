<template>
    <section class="main">
        <ShoppingCart class="shopping-card"/>
        <AllItems :items="forSale"></AllItems>
        <router-link v-if="!auth" to='/auth/signup'>
            <button>SingUp</button>
        </router-link>
        <router-link v-if="!auth" to='/auth/signin'>
            <button>SingIn</button>
        </router-link>
        <button v-if="auth" @click="onLogout">Logout</button>
        <h1 v-if="name"> {{ name }}</h1>
        <transition name="fade" mode="out-in">
            <router-view :items="forSale"></router-view>
        </transition>
    </section>
</template>
<script>
    import ShoppingCart from "./ShoppingCart.vue";
    import AllItems from "./AllItems.vue";

    export default {
        name: "Main",
        components: {AllItems, ShoppingCart},
        data() {
            return {}
        },
        methods: {
            onLogout() {
                this.$store.dispatch('logout');
            }
        },
        computed: {
            forSale() {
                return this.$store.getters.forSale;
            },
            inCart() {
                return this.$store.getters.inCart;
            },
            name() {
                return !this.$store.getters.user ? false : this.$store.getters.user.name;
            },
            auth(){
                return this.$store.getters.isAuthenticated;
            }
        },
        created(){
            this.$store.dispatch('fetchUser');
        }
    }

</script>

<style scoped lang="scss">

    .main {
        background: rgba(228, 228, 228, 0.4);
        display: flex;

        .shopping-card {
            position: absolute;
            right: 10%;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>