<template>
    <section>
        <div v-for="item in items" :key="item.id">
            <div v-if="item.type === 'pizza'">
                <h1>{{item.name}}</h1>
                <Card v-for="pos in item.allItems" v-bind:key="pos.type" :pos="pos"/>
            </div>
        </div>
    </section>
</template>
<script>
    import Card from "./Card.vue";

    export default {
        components: {Card},
        props: {
            items: Array,
        },
        methods: {}
    }
</script>

<style scoped lang="scss">

</style>