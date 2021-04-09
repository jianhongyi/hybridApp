// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import { Toast, Loading } from 'vant'
import axios from '~common/assets/js/axios'
import queens from 'queens-unipus'
import 'queens-unipus/lib/index.css'
import './assets/style/default.css'
import '~common/assets/css/default.css'
// import VConsole from 'vconsole'
// const Tool = new VConsole()
// Vue.prototype.$vconsole = Tool
if (process.env.NODE_ENV !== 'production') {
  require('./mockData/mockData.js')
}
Vue.use(Toast)
Vue.use(Loading)
Vue.use(queens)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
