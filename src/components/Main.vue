<template>
    <section class="main">
        <div class="input-group">
            <input class="search" type="text" placeholder="Searching for something?"/><span class="bar"></span>
        </div>
        <div class="items-wrapper">

            <ul class="food-list">
                <li class="food-item" :key="item.id" v-for="item in items">
                    <Item :item="item"/>
                </li>
            </ul>
            <router-link to='/'>Home</router-link>
            <router-link to='/register'>Register</router-link>
            <router-link to='/login'>Login</router-link>

            <router-view/>
        </div>
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
        items: json
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
            }
        }
    }
</style>