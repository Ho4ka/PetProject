<template>
    <div class="row mb-3">
        <div class="shopping-cart col-md-3">
            <b-button class="in-cart d-flex justify-content-between align-items-center" v-b-modal.modal-1
                      variant="success" data-toggle="modal" data-target="#shoppingCart">
                <font-awesome-icon icon="shopping-cart"/>
                ({{ numInCart }})
            </b-button>
            <router-link to='/history'>
                <button>History</button>
            </router-link>
            <b-modal id="modal-1" ref="modal-1" title="Cart"
                     :cancel-disabled="true">
                <table class="table">
                    <b-list-group v-for="(item, index) in cart" :key="item.id">
                        <b-list-group-item class="d-flex justify-content-between align-items-center">{{ item.name}}
                            <b-badge variant="success" pill>{{ item.price | dollars }}
                                <font-awesome-icon @click="removeFromCart(index)" icon="trash"/>
                            </b-badge>
                        </b-list-group-item>
                    </b-list-group>
                    <span class="total d-flex justify-content-around align-items-center"> Total:
                     <b-badge variant="primary" pill>{{ total | dollars }}</b-badge>
                    </span>
                </table>
                <div slot="modal-footer" class="w-100">
                    <p class="float-left">Modal Footer Content</p>
                    <b-button
                            variant="primary"
                            size="sm"
                            class="float-right"
                            @click="submit"
                    >
                        Close
                    </b-button>
                </div>
            </b-modal>
        </div>
    </div>
</template>

<script>
  import {dollars} from '../filters.js';
  import db from '../fb.js';
  import moment from "moment";

  export default {
    name: "ShoppingCart",
    filters: {
      dollars
    },
    data() {
      return {
        allItems: []
      }
    },
    methods: {
      submit() {
        this.$refs['modal-1'].hide();
        this.allItems = db.collection('history');
        const bill = [...this.inCart];
        db.collection("history").add({
          bill,
          data: moment().format('MMMM Do YYYY, h:mm:ss a')
        })
          .then(function () {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });


        db.collection("history")
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
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