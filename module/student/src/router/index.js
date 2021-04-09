import Vue from 'vue'
import VueRouter from 'vue-router'
import Share from '@/pages/Share.vue'
import Download from '@/pages/Download.vue'
import UserPrivacy from '../pages/UserPrivacy'
import UserProtocol from '../pages/UserProtocol'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/share',
      name: 'Share',
      component: Share,
      meta: {
        title: '外研趣学'
      }
    },
    {
      path: '/download',
      name: 'Download',
      component: Download,
      meta: {
        title: '外研趣学'
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
