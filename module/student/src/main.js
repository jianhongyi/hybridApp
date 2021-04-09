// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/default.css'
import '~common/assets/css/default.css'
import store from './store'
import { Toast } from 'vant'
// import VConsole from 'vconsole'
import axios from '~common/assets/js/axios'
import rem from '../../../resize.js' // 引入rem--xuemingli
rem(750, 1440)

// const Tool = new VConsole()
// Vue.prototype.$vconsole = Tool
Vue.use(Toast)
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
