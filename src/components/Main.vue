<template>
    <section class="main">
        <div class="input-group">
            <input class="search" type="text" placeholder="Searching for something?"/><span class="bar"></span>
        </div>
        <div class="items-wrapper">
            <div class="item" :key="data.id" v-for="data in items">
                <div>{{data.name}}</div>
                <img :src="getImgUrl(data.image)" alt="">
            </div>

                <router-link to='/'>Home</router-link>
                <router-link to='/register'>Register</router-link>
                <router-link to='/login'>Login</router-link>

            <router-view />
        </div>
    </section>
</template>

<script>
  import json from '../data/data.json';

  export default {
    name: "Main",
    data(){
      return{
        items: json
      }
    },
    methods: {
      getImgUrl(i) {
        return 'src/assets/images/' + i;
      },
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

            .item {
                background: #e0e0e08c;
                border: 1px solid #c0c0c029;
                width: 200px;
                height: 200px;
                margin: 20px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
                text-align: center;
                transition: 0.3s;

                img {
                    width: 200px;
                    height: 182px;
                }

                &:hover {
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                }
            }
        }
    }
</style>