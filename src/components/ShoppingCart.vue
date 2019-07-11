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
                        <b-list-group-item class="d-flex justify-content-between align-items-center"> <img :src="getImgUrl(item.photo)"  width="50px" height="50px" alt=""> {{ item.name}}
                           <div class="item-price">
                            <b-badge variant="warning" pill>{{ item.price | dollars }}
                            </b-badge>
                            <font-awesome-icon class="trash" @click="removeFromCart(index)" icon="trash"/>
                           </div>
                        </b-list-group-item>
                    </b-list-group>
                    <span class="total d-flex justify-content-around align-items-center"> Total:
                     <b-badge variant="warning" pill>{{ total | dollars }}</b-badge>
                    </span>
                </table>
                <div slot="modal-footer" class="w-100">
                    <b-button
                            variant="primary"
                            size="sm"
                            class="float-right"
                            @click="submit"
                    >
                        Order printing
                    </b-button>
                </div>
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
          date: Date.now(),
            total: this.total
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
        this.clearCart();
      },
      removeFromCart(index) {
        this.$store.dispatch('removeFromCart', index);
      },
        clearCart() {
            this.$store.dispatch('clearCart');
        }
        ,
        getImgUrl(i) {
            return 'src/assets/images/' + i;
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

<style scoped lang="scss">
    .in-cart {
        width: 70px;
    }

    .list-group {
        margin: 10px 0;
    }

    .list-group-item {
        box-shadow: 0 0 10px rgba(73, 74, 78, .1);
        border: none;
    }

    .total {
        margin-top: 25px;
    }

    .item-price {
        width: 113px;
        display: flex;
        justify-content: space-between;
    }

    .trash {
        color: silver;
        cursor: pointer;
    }
</style>