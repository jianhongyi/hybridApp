// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import { Toast, Loading, Image as VanImage } from 'vant'
import axios from '~common/assets/js/axios'
import queens from 'queens-unipus'
// import VConsole from 'vconsole'
import 'queens-unipus/lib/index.css'
import './assets/style/default.css'
if (process.env.NODE_ENV !== 'production') {
  require('./mockData/mockData.js')
}

// const Tool = new VConsole()
// Vue.prototype.$vconsole = Tool
Vue.use(Toast)
Vue.use(Loading)
Vue.use(VanImage)
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
