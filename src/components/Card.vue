<template>
    <div class="card">
        <img :src="getImgUrl(pos.photo)"  alt="">
    </div>
</template>

<script>
    export default {
        name: "Card",
        props:{
            pos: Object
        },
        methods: {
            getImgUrl(i) {
                return 'src/assets/images/' + i;
            },
        }
    }
</script>

<style scoped>

</style>