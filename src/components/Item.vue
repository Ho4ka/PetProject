<template>
    <router-link :to='`${item.link}`'>
        <div class="item-wrapper">
            <font-awesome-icon class="icon fa-5x" :icon="item.image"/>
        </div>
    </router-link>
</template>

<script>
  export default {
    name: "Item",
    data() {
      return {}
    },
    props: {
      item: Object
    },
  }
</script>

<style  lang="scss">
.item-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f1b601;
    padding: 0;
    margin: 0;
    border: 1px solid #c0c0c029;
    width: 200px;
    height: 130px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
    text-align: center;
    -moz-transition: all .5s ease-out;
    -o-transition: all .5s ease-out;
    -webkit-transition: all .5s ease-out;

    .test {
        width: 25px;
        height: 25px;
    }
    .icon {
        color: white;
    }

    &:hover {
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
        -o-transform: scale(1.05);
        box-shadow: 0 0 10px 0 rgba(000, 000, 000, 0.1);
    }
}

.is-active .item-wrapper {
    background: rgba(241, 182, 1, 0.73);
}
</style>