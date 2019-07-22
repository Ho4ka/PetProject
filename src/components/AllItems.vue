<template>
    <div class="all-items">
        <Item :key="item.index" v-for="item in items" :item="item"/>
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
</style>