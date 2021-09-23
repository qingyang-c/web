<template>
  <div id="app">
    <div id="colorlib-page">
      <Sidebar></Sidebar>
      <!-- END COLORLIB-ASIDE -->
      <div id="colorlib-main">
        <router-view/>
      </div>
      <!-- END COLORLIB-MAIN -->
    </div>
    <!-- END COLORLIB-PAGE -->
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .icon-home::before {
    color: red;
    font-size: 26px;
  }
}
</style>
