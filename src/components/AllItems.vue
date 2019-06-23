<template>
    <b-container>
        <b-row>
            <b-col class="d-flex justify-content-center">
                <b-form-input v-model="search" placeholder="What do you search ?"></b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col :key="item.id" v-for="item in filteredList">
                <Item  :item="item"/>
            </b-col>
        </b-row>
    </b-container>
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

<style  lang="scss">
    .form-control {
        width: 50%;
    }

</style>