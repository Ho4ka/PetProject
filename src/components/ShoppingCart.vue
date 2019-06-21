<template>
    <div class="shopping-cart">
        <font-awesome-icon class="icon" size="2x" icon="shopping-cart" />
    </div>
</template>

<script>
  export default {
    name: "ShoppingCart"
  }
</script>

<style lang="scss">
    .shopping-cart {
        width: 200px;
        height: 50px;
        background: green;
        .icon {
            color: white;
        }
    }
</style>