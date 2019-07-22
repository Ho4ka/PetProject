<template>
    <div class="history">
        <ul class="order-list">
            <li class="order-item first-line">
                <button class="sort-item" @click="sortedItems">Sort by date</button>
                <button class="sort-item" @click="sortByPrice">Sort by price</button></li>
            <li class="order-item" v-for="(bill, index) in bills" :key="index">
                <h3 class="order-date">{{ bill.date | formatTime }}</h3>
                <div class="order-detail">
                    <span class="header">Product</span>
                    <span class="header">Product name</span>
                    <span class="header">Price</span>
                </div>

                <div class="item-box" v-for="(b, index) in bill.bill" :key="index">
                    <img :src="getImgUrl(b.photo)" width="50px" height="50px" alt=""> <span
                        class="item-name">{{b.name}} </span> <span class="item-price">{{ b.price | dollars }}</span>
                </div>
                <div class="item-total">
                    <span>Total: </span> <span>{{ bill.total | dollars }}</span>
                </div>
                <div class="waiter-data">
                    <span class="waiter">Waiter: </span>
                    <span class="waiter-name">{{bill.name}}</span>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
    import db from '../fb.js';
    import moment from "moment";
    import {dollars} from '../filters.js';

    export default {
        name: "History",
        data() {
            return {
                bills: [],
                orders: []
            }
        },
        filters: {
            formatTime(value) {
                return moment(value).format('MMMM Do, h:mm');
            },
            dollars
        },
        methods: {
            getImgUrl(i) {
                return 'src/assets/images/' + i;
            },
            sortedItems: function () {
                this.bills.sort((a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
                return this.items;
            },
            sortByPrice() {
                return this.bills.sort((a, b) => a.total - b.total);

            },

        },
      computed: {
        auth() {
          return this.$store.getters.isAuthenticated
        }
      },
        created() {
            db.collection("history")
                .get()
                .then(querySnapshot => {
                    this.bills = querySnapshot.docs.map(doc => doc.data());
                });
        }
    }
</script>

<style lang="scss">
    .history {
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background: white;

        .order-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            overflow: scroll;
            .first-line {
                display: flex;
                justify-content: space-between;
            }
            .sort-item {
                border: none;
                background: none;
                outline: none;
                font-weight: 700;
                color: #f1b601;
            }

            .order-item {
                background: white;
                font-size: 18px;
                padding: 20px;
                width: 600px;
                border-bottom: 1px solid #ddd;
                transition: all 0.3s cubic-bezier(.25, .8, .25, 1);

                .order-detail {
                    font-size: 23px;
                    display: flex;
                    justify-content: space-between;
                    color: #c10a28;
                }

                .order-date {
                    text-align: center;
                }

                .item-name {
                    color: #616161;
                    font-weight: 700;
                }

                .item-price {
                    font-weight: 700;
                }

                .item-box {
                    display: flex;
                    margin: 10px 0;
                    justify-content: space-between;
                    align-items: center;
                }

                .item-total {
                    display: flex;
                    justify-content: space-between;
                    font-weight: 700;
                }
            }
        }
        .waiter {
            color: #c10a28;
            font-size: 23px;
            font-weight: 500;
        }
        .waiter-name {
            color: #521751;
            font-weight: 500;
        }
    }
</style>