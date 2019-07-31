<template>
    <div class="card">
        <img :src="getImgUrl(pos.photo)"  alt="">
        <div class="description">
            <h3 class="description-header">{{ pos.name }}</h3>
           <div class="description-text">{{ pos.description }}</div>
            <div class="description-price"> {{ pos.price | dollars }}</div>
        </div>
        <button class="buy" @click="addToCart(pos)">Add to order</button>
    </div>
</template>

<script>
import { dollars } from '../filters.js';
export default {
    name: "Card",
    data() {
        return {
            count: 0
        }
    },
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
            this.makeToast('b-toaster-top-center', invId);
        },
        makeToast(toaster,invId) {
            const h = this.$createElement;
            // Increment the toast count
            this.count++;
            // Create the message
            const vNodesMsg = h(
                'p',
                { class: ['text-center', 'mb-0'] },
                [
                    h('b-spinner', { props: { type: 'grow', big: true } }),
                    '  ',
                    h('strong', {}, `${invId.name}`),
                    h('b-spinner', { props: { type: 'grow', big: true } })
                ]
            );
            // Create the title
            const vNodesTitle = h(
                'div',
                { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] },
                [
                    h('strong', { class: 'mr-2' }, 'Item was added'),
                ]
            );
            // Pass the vNodes as an array for message and title
            this.$bvToast.toast([vNodesMsg], {
                title: [vNodesTitle],
                solid: true,
                toaster: toaster,
                variant: 'warning'
            })
        }
    }
}
</script>

<style  lang="scss">
.card {
    width: 17.6%;
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
        font-weight: 700;
        letter-spacing: 1px;
        margin: 30px auto;
        padding: 10px 27px;
        text-align: center;
        text-decoration: none;
        display: block;
        outline: none;
    }
}
</style>