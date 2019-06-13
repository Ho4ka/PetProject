<template>
    <section class="main">
        <div v-if="showItems === false" class="input-group">
            <input class="search" v-model="search" type="text" placeholder="Searching for something?"/><span class="bar"></span>
        </div>
        <div class="items-wrapper">
            <ul v-if="showItems === false" class="food-list">
                <li  class="food-item" :key="item.id" v-for="item in filteredList">
                    <Item :item="item"/>
                </li>
            </ul>
            <router-link v-if="showItems === false" to='/register'>Register</router-link>
            <router-link  v-if="showItems === false" to='/login'>Login</router-link>
        </div>
        <router-view @clicked="showItem" :items="items"></router-view>
    </section>
</template>

<script>
  import json from '../data/data.json';
  import Item from '../components/Item.vue';

  export default {
    name: "Main",
    components: {
      Item
    },
    data() {
      return {
        items: json,
        search: '',
        showItems: false,

      }
    },
      computed: {
          filteredList() {
              return this.items.filter(post => {
                  return post.name.toLowerCase().includes(this.search.toLowerCase())
              })
          }
      },
      methods: {
          showItem (value) {
              this.showItems = true;
          }
      }
  }
</script>

<style scoped lang="scss">
    .main {
        background: #fff;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;

        .input-group {
            margin: 50px;
            border: 1px solid #c0c0c029;

            .search {
                height: 25px;
                width: 200px;
                border-radius: 3px;
                color: silver;
                background-color: #fff;
                border: 0;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
                cursor: pointer;
                outline: none;
                padding: 5px;
                position: relative;
            }
        }

        .items-wrapper {
            width: 60%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            .food-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                list-style: none;

                .food-item {
                    animation-duration: .2s;
                    animation-name: bounceIn;
                    animation-timing-function: ease;
                }
            }
        }
    }
    @keyframes bounceIn {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }
        25% {
            transform: scale(0.6);
            opacity: .2;
        }
        50% {
            transform: scale(0.7);
            opacity: .5;
        }
        75% {
            transform: scale(0.8);
            opacity: .7;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>