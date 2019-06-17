<template>
    <div class="card">
        <img :src="getImgUrl(pos.photo)"  alt="">

        <div class="description">
            <h3 class="description-header">{{ pos.name }}</h3>
           <div class="description-text">{{ pos.description }}</div>
            <div class="description-price"> {{ pos.price }}</div>
        </div>
        <button class="buy">Buy item</button>

    </div>
</template>

<script>
    export default {
        name: "Card",
        props:{
            pos: Object
        },
        methods: {
            getImgUrl(i) {
                return 'src/assets/images/' + i;
            },
        }
    }
</script>

<style  lang="scss">
    .card {
        width: 300px;
        height: 400px;
        background: white;
        margin: 20px;
        img {
            width: 300px;
            height: 200px;
        }

        .description {
         text-align: center;

            .description-header {
                margin-bottom: 40px;
                color: #333;
            }

            .description-text {
                margin-bottom: 30px;
                color: rgb(134, 134, 134);
            }
            .description-price {
                color: orangered;
                margin-bottom: 10px;
            }
        }
        .buy {
            width: 80%;
            display: block;
            margin: 0 auto;
            height: 30px;
            background: orangered;
        }
    }
</style>