<template>
    <div class="items-wrapper">
        <div class="input-group">
            <input class="search" v-model="search" type="text" placeholder="Searching for something?"/>
            <span class="bar"></span>
        </div>
        <ul class="food-list">
            <li class="food-item" :key="item.id" v-for="item in filteredList">
                <Item  :item="item"/>
            </li>
        </ul>
    </div>

</template>

<script>
    import Item from '../components/Item.vue';

    export default {
        name: "AllItems",
        components: {
            Item
        },
        props: {
          items: Array
        },
        data() {
            return {
                search: '',

            }
        },
        methods: {
        },

        computed: {
            filteredList() {
                return this.items.filter(post => {
                    return post.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },

    }
</script>

<style scoped lang="scss">
    .items-wrapper {
        width: 60%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

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
</style>