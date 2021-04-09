// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import axios from '~common/assets/js/axios'
import WxConfig from '~common/assets/js/wxConfig.js'
import {
  Toast,
  Notify,
  Loading,
  Tabbar,
  TabbarItem,
  Icon,
  Button,
  Circle,
  Progress,
  Popup,
  Empty,
  Overlay,
  tabs,
  tab,
  List,
  PasswordInput,
  NumberKeyboard,
  Popover
} from 'vant'
import './assets/style/default.css'
import '~common/assets/css/default.css'
// 开发中使用插件及数据
// import VConsole from 'vconsole'
if (process.env.NODE_ENV !== 'production') {
  require('./mockData/mockData.js')
  // require('./mockData/mockInfoData.js')
}
// const Tool = new VConsole()
// Vue.prototype.$vconsole = Tool

Vue.use(Toast)
Vue.use(Notify)
Vue.use(Loading)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Circle)
Vue.use(Progress)
Vue.use(Popup)
Vue.use(Empty)
Vue.use(Overlay)
Vue.use(tabs)
Vue.use(tab)
Vue.use(List)
Vue.use(PasswordInput)
Vue.use(NumberKeyboard)
Vue.use(Popover)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

window.wxConfig = new WxConfig()
window.wxConfig.shareLink({
  title: 'Diplo校长',
  desc: '运用个性化数据分析，帮助校长更好的运营',
  link: location.href.split('#')[0] + '#/?enter=1',
  imgUrl: 'https://h5.diplotalk.unischool.cn/static/img/logo.png'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
