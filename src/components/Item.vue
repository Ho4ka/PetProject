<template>
    <div class="item-wrapper">
        <h4 class="item-header">{{item.name}}</h4>
        <img class="item-img" :src="getImgUrl(item.image)" alt="">
    </div>


</template>

<script>
  export default {
    name: "Item",
    props: {
      item: Object
    },

    methods: {
      getImgUrl(i) {
        return 'src/assets/images/' + i;
      }
      }
  }
</script>

<style lang="scss">
 .item-wrapper {
     background: #e0e0e08c;
     border: 1px solid #c0c0c029;
     width: 200px;
     height: 200px;
     margin: 20px;
     box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
     text-align: center;
     transition: 0.3s;

     :hover {
         box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
         border: none;
     }
     .item-header {
         margin: 0;
     }
     .item-img {
         width: 200px;
         height: 182px;
     }
 }


</style>