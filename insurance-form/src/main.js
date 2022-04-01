import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import router from "./router"
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vSelect from "vue-select";

Vue.component("v-select", vSelect);
Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(require('vue-cookies'))
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
