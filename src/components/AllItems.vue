<template>
    <div class="all-items">
        <Item :key="item.id" v-for="item in items" :item="item"/>
    </div>
</template>

<script>
  import Item from '../components/Item.vue';

  export default {
    name: "AllItems",
    components: {
      Item
    },
    props: {
      items: Array
    }
  }
</script>

<style lang="scss">
    .all-items {
        background: rgba(228, 228, 228, 0.4);
    }
    .form-control {
        width: 50%;
    }

</style>