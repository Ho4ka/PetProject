<template>
        <div class="row mb-3">
            <div class="shopping-cart col-md-3">
                <b-button v-b-modal.modal-1  data-toggle="modal" data-target="#shoppingCart">Cart ({{ numInCart }})</b-button>
                <b-modal id="modal-1" title="Cart"><table class="table">
                    <b-list-group v-for="item in cart" :key="item.id">
                        <b-list-group-item class="d-flex justify-content-between align-items-center">{{ item.name}}
                            <b-badge variant="success" pill>{{ item.price | dollars  }}</b-badge>
                        </b-list-group-item>
                        <button class="btn btn-sm btn-danger" @click="removeFromCart(item.id)">delete</button>
                    </b-list-group>
                    <span class="d-flex justify-content-around align-items-center"> Total:
                     <b-badge variant="primary" pill>{{ total | dollars }}</b-badge>
                    </span>
                </table>
                </b-modal>
            </div>
        </div>
</template>

<script>
    import { dollars } from '../filters.js';
  export default {
    name: "ShoppingCart",
      filters: {
        dollars
      },
      methods: {
          removeFromCart(index) {
              this.$store.dispatch('removeFromCart', index);
          }
      },
      computed: {
          inCart() { return this.$store.getters.inCart; },
          numInCart() { return this.inCart.length; },
          cart() {
              return this.$store.getters.inCart;
      },
          total() {
              return this.cart.reduce((a,b) => a + +b.price, 0);
          },
  }}
</script>

<style lang="scss">
    .list-group {
        margin: 10px 0;
    }
</style>