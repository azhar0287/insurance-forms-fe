<template>
  <div class="vue-bg1" style="width: 100%">
    <b-navbar toggleable="lg" type="dark" variant="dark"  v-if="!['login','personal-image','insurance-image'].includes($route.name)">
      <b-navbar-brand href="#">
      <!-- <img   src="./assets/logo.jpg" height="50px" width="50px">     -->
      Sethi Labs
      </b-navbar-brand>

        
      <b-navbar-nav class="ml-auto">
        
        <b-nav-form>
          <b-nav-item class="app-nav-link active md my-2 my-sm-0" :to="{ name: 'createorder'}">Create Order</b-nav-item>               
        </b-nav-form>
        
        <b-nav-form>
           <!-- <b-nav-item href="#/${url}">Patient Count</b-nav-item> -->
          <b-nav-item class="app-nav-link active md my-2 my-sm-0" :to="{ name: 'patient-count'}">Patient Count</b-nav-item>               
           <!-- <router-link :to="{ name: 'patient-count'}" target="_blank">
              Link Text
          </router-link> -->
        </b-nav-form>

        
        <b-nav-form>
          <!-- <b-nav-item class="app-nav-link active md my-2 my-sm-0" :to="{ name: 'dashboard' }">Dashboard</b-nav-item>                -->
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
  data: function () {
        return {
          url:''
        };
    },
  components: {
    // Login
  },
  created() {
    this.url =  window.location.origin +"/patient-count";
  },

  methods: {
    openPatienCount() {
      let routeData = this.$router.resolve({name: 'patient-count' });
      window.open(routeData.href, '_blank');
    }
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
