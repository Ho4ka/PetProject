<template>
    <div class="row mb-3">
        <div class="shopping-cart col-md-3">
            <b-button class="in-cart d-flex justify-content-between align-items-center" v-b-modal.modal-1
                      variant="success" data-toggle="modal" data-target="#shoppingCart">
                <font-awesome-icon icon="shopping-cart"/>
                ({{ numInCart }})
            </b-button>
            <b-modal id="modal-1" title="Cart">
                <table class="table">
                    <b-list-group v-for="(item, index) in cart" :key="item.id">
                        <b-list-group-item class="d-flex justify-content-between align-items-center">{{ item.name}}
                            <b-badge variant="success" pill>{{ item.price | dollars }}
                                <font-awesome-icon @click="removeFromCart(index)" icon="trash"/>
                            </b-badge>
                        </b-list-group-item>
                    </b-list-group>
                    <span class="total d-flex justify-content-around align-items-center"> Total:
                     <b-badge @click="submit" variant="primary" pill>{{ total | dollars }}</b-badge>
                    </span>
                </table>
            </b-modal>
        </div>
    </div>
</template>

<script>
  import {dollars} from '../filters.js';
  import db from '../fb.js';

  export default {
    name: "ShoppingCart",
    filters: {
      dollars
    },
    data() {
      return {
        locations: []
      }
    },
    methods: {
      submit() {
        this.locations = db.collection('history');
        const project = {
          name: "Maaaaaaa",
          age: 22222222
        };
        db.collection('history').add(project).then(() => {
          console.log('added to db');
        });
        db.collection("history")
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data); // array of cities objects
          });
      },
      removeFromCart(index) {
        this.$store.dispatch('removeFromCart', index);
      }
    },
    computed: {
      inCart() {
        return this.$store.getters.inCart;
      },
      numInCart() {
        return this.inCart.length;
      },
      cart() {
        return this.$store.getters.inCart;
      },
      total() {
        return this.cart.reduce((a, b) => a + +b.price, 0);
      },
    }
  }
</script>

<style lang="scss">
    .in-cart {
        width: 70px;
    }

    .list-group {
        margin: 10px 0;
    }

    .list-group-item {
        box-shadow: 0 0 10px rgba(73, 74, 78, .1);
    }

    .total {
        margin-top: 25px;
    }
</style>