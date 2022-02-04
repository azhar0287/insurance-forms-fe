<template>
  <div class="wrapper">
    <div class="row bg-white display">
      <!-- <div class="col-md-3 bg-white"></div>
      <div class="col-md-8 d-flex bg-white"> -->
          <div class="col-lg-2 col-md-2"></div>
        <div class="col-lg-8 col-md-8 rounded px-5 py-4 shadow bg-white text-left" style="width: 100%; height: 450px">
          <div class="col-lg-2 col-md-2"></div>
          <Login />
        </div>
       </div>
    <!-- </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
export default {
  name: "Index",
  components: {
    Login,
  },
};
</script>s

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vue-bg {
  background: #bce5d0;
}

.wrapper {
  /* margin-top: 100px; */
  width: 100%;
  height: 800px;
  display:flex;
  justify-content: center;
}

.display{
    align-items: center;
}
</style>