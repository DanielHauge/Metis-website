import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import store from '@/store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Login,
      meta: {
        goToLogin: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if ((store.getters.isLoggedIn) || store.getters.authStatus === 'success') {
      next()
      return
    }
    next('/login')
  } else if (to.matched.some(record => record.meta.goToLogin)) {
    store.dispatch('logout')
    next('/login')
  } else {
    next()
  }
})

export default router
