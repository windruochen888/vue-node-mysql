import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Alert from './components/modules/alert/index'
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(Alert)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
