import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index'
import myIndex from '../pages/myIndex'
import dataIndex from '../pages/dataIndex'
import login from '../pages/login'
import choiceOrg from '../pages/choiceOrg'
import haveClass from '../pages/haveClass'
import courseDataList from '../pages/courseDataList'
import courseDetail from '../pages/courseDetail'
import teacherDetail from '../pages/teacherDetail'
import countList from '../pages/countList'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: 'Diplo校长'
      },
      children: [
        {
          path: '/my',
          name: 'myIndex',
          component: myIndex,
          meta: {
            title: 'Diplo校长'
          }
        },
        {
          path: '/dataIndex',
          name: 'dataIndex',
          component: dataIndex,
          meta: {
            title: 'Diplo校长'
          }
        }
      ]
    },
    {
      path: '/haveClass',
      name: 'haveClass',
      component: haveClass,
      meta: {
        title: '已有课程'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: 'Diplo校长端-登录'
      }
    },
    {
      path: '/choiceOrg',
      name: 'choiceOrg',
      component: choiceOrg,
      meta: {
        title: 'Diplo校长端-选择机构'
      }
    },
    {
      path: '/courseDataList',
      name: 'courseDataList',
      component: courseDataList,
      meta: {
        title: '课程数据列表'
      }
    },
    {
      path: '/courseDetail',
      name: 'courseDetail',
      component: courseDetail,
      meta: {
        title: '课程详情'
      }
    },
    {
      path: '/teacherDetail',
      name: 'teacherDetail',
      component: teacherDetail,
      meta: {
        title: '教师详情'
      }
    },
    {
      path: '/countList',
      name: 'countList',
      component: countList,
      meta: {
        title: '练习布置次数'
      }
    }
  ]
})

// 多次点击同一路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
  document.getElementById('app').scrollTop = 0
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
