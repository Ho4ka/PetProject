<template>
    <div>
        <ul>
            <li v-for="item in items" v-bind:key="item.id">
                <ul v-if="item.name === 'Pizza'">
                    <li  v-bind:onload="$emit('clicked')" v-for="pos in item.representation" v-bind:key="pos" >
                        {{pos}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
  export default {
        props : {
            items: Array,
        },
      methods: {

      }
  }
</script>

<style scoped>

</style>