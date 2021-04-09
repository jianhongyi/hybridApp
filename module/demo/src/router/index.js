import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/Index.vue'
import Prectice from '@/pages/Prectice.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/prectice',
      name: 'Prectice',
      component: Prectice,
      meta: {
        title: 'demo'
      }
    }
  ]
})
