// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/default.css'
import '~common/assets/css/default.css'
import store from './store'
import { Toast } from 'vant'
import axios from '~common/assets/js/axios'
import Bridge from '~common/assets/js/dsBridge'
import queens from 'queens-unipus'
import 'queens-unipus/lib/index.css'
Vue.use(queens)
// import { QueensDescription } from 'queens-unipus'
// Vue.use(QueensDescription)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$bridge = Bridge
Vue.use(Toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
