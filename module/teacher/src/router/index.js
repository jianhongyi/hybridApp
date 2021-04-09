import Vue from 'vue'
import VueRouter from 'vue-router'
import Guide from '@/pages/Guide.vue'
import Portal from '@/pages/Portal.vue'
import UserProtocol from '../pages/UserProtocol'
import UserPrivacy from '../pages/UserPrivacy'
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/guide',
      name: 'Guide',
      component: Guide,
      meta: {
        title: '新手指南'
      }
    },
    {
      path: '/portal',
      name: 'Portal',
      component: Portal,
      meta: {
        title: '外研趣学教师'
      }
    },
    {
      path: '/userProtocol',
      name: 'UserProtocol',
      component: UserProtocol,
      meta: {
        title: '用户服务协议'
      }
    },
    {
      path: '/userPrivacy',
      name: 'UserPrivacy',
      component: UserPrivacy,
      meta: {
        title: '用户信息隐私保护政策'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
