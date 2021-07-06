// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TodoList from './TodoList'
import Alert from './components/modules/alert/index'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Alert)
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { TodoList },
  template: '<TodoList/>'
})
