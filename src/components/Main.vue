<template>
    <section class="main">
        <router-view :items="items" ></router-view>
    </section>
</template>

<script>

    import json from '../static/data.json';
    export default {
        name: "Main",
        data() {
            return {
                items: json
            }
        },
        methods: {
        }
    }

</script>

<style scoped lang="scss">
    .main {
        background: #e4e4e4;
        display: flex;
        flex-direction: column;
        align-items: center;
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