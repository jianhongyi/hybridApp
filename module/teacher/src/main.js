// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/default.css'
import '~common/assets/css/default.css'
import store from './store'
import axios from '~common/assets/js/axios'
import { Toast, Icon } from 'vant'
// import VConsole from 'vconsole'
import rem from '../../../resize.js' // 引入rem--xuemingli
rem(750, 1440)

Vue.use(Toast)
Vue.use(Icon)
Vue.config.productionTip = false
// const Tool = new VConsole()
// Vue.prototype.$vconsole = Tool
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
