<template>
    <section class="">
        <Header/>
        <section  class="main">
        <ShoppingCart class="shopping-card"/>
        <AllItems :items="forSale"></AllItems>
        <transition name="fade" mode="out-in">
            <router-view :items="forSale"></router-view>
        </transition>
        </section>
    </section>
</template>
<script>
    import ShoppingCart from "./ShoppingCart.vue";
    import AllItems from "./AllItems.vue";
    import Header from "./Header.vue";

    export default {
        name: "Main",
        components: {Header, AllItems, ShoppingCart},
        data() {
            return {}
        },
        computed: {
            forSale() {
                return this.$store.getters.forSale;
            },
            inCart() {
                return this.$store.getters.inCart;
            },
            auth(){
                return this.$store.getters.isAuthenticated;
            }
        },
        created(){
            this.$store.dispatch('fetchUser');
            this.$store.commit('clearAuthData');
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