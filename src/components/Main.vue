<template>
    <section class="main">
        <ShoppingCart class="shopping-card"/>
        <router-view :items="forSale" ></router-view>
    </section>
</template>
<script>
    import ShoppingCart from "./ShoppingCart.vue";
    export default {
        name: "Main",
      components: {ShoppingCart},
      data() {
            return {

            }
        },
        methods: {
        },
        computed: {
            forSale() { return this.$store.getters.forSale; },
            inCart() { return this.$store.getters.inCart; },
        },
    }

</script>

<style scoped lang="scss">
    .main {
        background: #e4e4e4;
        display: flex;
        flex-direction: column;
        align-items: center;
        .shopping-card {
            position: absolute;
            right: 20%;
        }
    }

    @keyframes bounceIn {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }
        25% {
            transform: scale(0.6);
            opacity: .2;
        }
        50% {
            transform: scale(0.7);
            opacity: .5;
        }
        75% {
            transform: scale(0.8);
            opacity: .7;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>