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
        width: 200px;
        height: auto;
        background: white;
        margin: 20px;
        img {
            width: 200px;
            height: 150px;
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
                color: orangered;
                margin-bottom: 10px;
            }
        }
        .buy {
            width: 80%;
            background-color: orangered;
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