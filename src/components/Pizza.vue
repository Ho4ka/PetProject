<template>
    <div>
        <ul>
            <li v-for="item in items" v-bind:key="item.id">
                <ul v-if="item.type === 'pizza'">
                    <h1>{{item.name}}</h1>
                    <li  v-bind:onload="$emit('clicked')" v-for="pos in item.allItems" v-bind:key="pos.type" >
                        <Card :pos="pos"/>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
  import Card from "./Card.vue";
  export default {
      components: {Card},
      props : {
            items: Array,
        },
      methods: {

      }
  }
</script>

<style scoped lang="scss">

</style>