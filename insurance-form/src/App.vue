<template>
  <div id="app" class="h-95">
    <div class="h-100">
      <div class="row h-100">
        <div class="h-300 justify-content-center align-items-center">
          <div class="px-5 py-4 shadow bg-white text-left">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from './components/SignupForm.vue'

export default {
  name: 'App',
  components: {
    SignupForm
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
.vue-bg {
  background: #bce5d0;
}
</style>
