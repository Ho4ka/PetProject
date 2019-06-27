<template>
    <div class="card">
        <img :src="getImgUrl(pos.photo)"  alt="">
        <div class="description">
            <h3 class="description-header">{{ pos.name }}</h3>
           <div class="description-text">{{ pos.description }}</div>
            <div class="description-price"> {{ pos.price | dollars }}</div>
        </div>
        <button class="buy" @click="addToCart(pos)">Buy item</button>
    </div>
</template>

<script>
    import { dollars } from '../filters.js';
    export default {
        name: "Card",
        filters:{
          dollars
        },
        props:{
            pos: Object,
        },
        methods: {
            getImgUrl(i) {
                return 'src/assets/images/' + i;
            },
            addToCart(invId) {
                this.$store.dispatch('addToCart', invId);
            },
        }
    }
</script>

<style  lang="scss">
    .card {
        width: 17.5%;
        height: auto;
        background: white;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        img {
            width: 200px;
            max-width: 100%;
            margin: 0 auto;
        }

        .description {
         text-align: center;
            padding: 3px;

            .description-header {
                margin-bottom: 10px;
                color: #333;
            }

            .description-text {
                margin-bottom: 10px;
                color: rgb(134, 134, 134);
            }
            .description-price {
                color:  #f1b601;
                margin-bottom: 10px;
            }
        }
        .buy {
            width: 80%;
            background: #f1b601;
            border: none;
            color: white;
            margin: 10px auto;
            padding: 10px 27px;
            text-align: center;
            text-decoration: none;
            display: block;
            outline: none;
        }
    }
</style>