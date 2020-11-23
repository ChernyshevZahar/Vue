import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/Home')
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'empty' },
      component: () => import('../views/login')
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'empty' },
      component: () => import('../views/register')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/categories')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/detail-record')
    },
    {
      path: '/history',
      name: 'history',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/history')
    },
    {
      path: '/planning',
      name: 'planning',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/planning')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/profile')
    },
    {
      path: '/record',
      name: 'record',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/record')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router
