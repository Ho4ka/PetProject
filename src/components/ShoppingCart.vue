<template>
        <div class="row mb-3">
            <div class="shopping-cart col-md-3">
                <button class="btn btn-primary">Cart ({{ inCart.length }})</button>
            </div>
        </div>
</template>

<script>
  export default {
    name: "ShoppingCart",
      computed: {
          inCart() { return this.$store.getters.inCart; },
      },
  }
</script>

<style lang="scss">

</style>