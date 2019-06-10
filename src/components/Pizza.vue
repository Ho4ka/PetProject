<template>
    <div>
        <ul>
            <li v-for="item in items" v-bind:key="item.id">
                {{item.name}}
                <h3 v-bind:onclick="$emit('clicked')" >Test</h3>

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