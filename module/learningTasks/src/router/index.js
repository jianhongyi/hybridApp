import Vue from 'vue'
import VueRouter from 'vue-router'
import Exercises from '../pages/Exercises'
import ExercisesPreview from '../pages/ExercisesPreview'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/exercises',
      name: 'exercises',
      component: Exercises,
      meta: {
        title: '练习题'
      }
    },
    {
      path: '/preview',
      name: 'preview',
      component: ExercisesPreview,
      meta: {
        title: '练习题预览'
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
