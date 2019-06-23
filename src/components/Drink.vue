<template>
    <section class="item-component-wrapper">
        <button class="go-back" @click="goToMain">Go Back</button>
        <div v-for="item in items" :key="item.id">
            <div class="type" v-if="item.type === 'drinks'">
                <h1 class="item-header">{{item.name}}</h1>
                <Card v-for="pos in item.allItems" v-bind:key="pos.type" :pos="pos"/>
            </div>
        </div>
    </section>
</template>
<script>
  import Card from "./Card.vue";

  export default {
    components: {Card},
    props: {
      items: Array,
    },
    methods: {
      goToMain() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style  lang="scss">

    .item-component-wrapper {
        display: flex;
        width: 100%;
        height: 100vh;
        .go-back {
            position: absolute;
            left: 10%;
        }
        .type {
            display: flex;
            flex-wrap: wrap;
            background: #e4e4e4;

            .item-header {
                width: 100%;
                color: #a9a9a9;
                text-align: center;
            }
        }
    }
</style>