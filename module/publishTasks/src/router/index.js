import Vue from 'vue'
import VueRouter from 'vue-router'
import AssignDetail from '../pages/AssignDetail'
import AnswerDetail from '../pages/AnswerDetail'
import BillBoard from '../pages/Billboard'
import Demo from '../pages/demo'
import DemoPub from '../pages/demoPub'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/assignDetail',
      name: 'assignDetail',
      component: AssignDetail,
      meta: {
        title: '布置练习明细'
      }
    },
    {
      path: '/answerDetail',
      name: 'answerDetail',
      component: AnswerDetail,
      meta: {
        title: '学生作答明细'
      }
    },
    {
      path: '/billBoard',
      name: 'billBoard',
      component: BillBoard,
      meta: {
        title: '练习榜单'
      }
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo,
      meta: {
        title: 'demo'
      }
    },
    {
      path: '/demoPub',
      name: 'demoPub',
      component: DemoPub,
      meta: {
        title: 'demoPub'
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
