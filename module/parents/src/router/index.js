import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index'
import myIndex from '../pages/myIndex'
import situationIndex from '../pages/situationIndex'
import addChild from '../pages/addChild'
import childInfo from '../pages/childInfo'
import aboutOurs from '../pages/aboutOurs'
import historyList from '../pages/historyList'
import taskDetails from '../pages/taskDetails'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: 'Diplo家长'
      },
      children: [
        {
          path: '/my',
          name: 'myIndex',
          component: myIndex,
          meta: {
            title: 'Diplo家长'
          }
        },
        {
          path: '/situation',
          name: 'situationIndex',
          component: situationIndex,
          meta: {
            title: 'Diplo家长'
          }
        }
      ]
    },
    {
      path: '/addChild',
      name: 'addChild',
      component: addChild,
      meta: {
        title: '添加孩子'
      }
    },
    {
      path: '/childInfo',
      name: 'childInfo',
      component: childInfo,
      meta: {
        title: '孩子信息'
      }
    },
    {
      path: '/aboutOurs',
      name: 'aboutOurs',
      component: aboutOurs,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/historyList',
      name: 'historyList',
      component: historyList,
      meta: {
        title: '历史完成任务'
      }
    },
    {
      path: '/taskDetails',
      name: 'taskDetails',
      component: taskDetails,
      meta: {
        title: '任务详情'
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
