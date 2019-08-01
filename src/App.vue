
<script>
import Main from "./components/Main.vue";
import Header from "./components/Header.vue";
import "./assets/scss/style.scss";
export default {
  name: "App",
  components: {
      Main,
    Header
  }
}
</script>

<template>
    <div id="app">
        <Header/>
        <Main />
    </div>
</template>

<style lang="scss"></style>
