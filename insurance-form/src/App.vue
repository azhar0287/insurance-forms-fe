<template>
  <div class="vue-bg1" style="width: 100%">
    <b-navbar toggleable="lg" type="dark" variant="dark"  v-if="!['login','imageInfo','cardImage'].includes($route.name)">
      <b-navbar-brand href="#">
      <!-- <img   src="./assets/logo.jpg" height="50px" width="50px">     -->
      Sethi Labs
      </b-navbar-brand>

        
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-nav-item class="app-nav-link active md my-2 my-sm-0" :to="{ name: 'insurance' }">Create Order</b-nav-item>               
        </b-nav-form>
        
        <b-nav-form>
          <b-nav-item class="app-nav-link active md my-2 my-sm-0" :to="{ name: 'patientCount' }">Patient Count</b-nav-item>               
        </b-nav-form>

        
        <b-nav-form>
          <b-nav-item class="app-nav-link active md my-2 my-sm-0" :to="{ name: 'dashboard' }">Dashboard</b-nav-item>               
        </b-nav-form>


      </b-navbar-nav>

      </b-navbar>
    <div>
  <router-view/>
</div>
</div>
  
</template>

<script>
// import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    // Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vue-bg1 {
  background: white;
}

.navbar.navbar-dark.bg-dark{
    background-color: #1A374D!important;
 }

</style>
