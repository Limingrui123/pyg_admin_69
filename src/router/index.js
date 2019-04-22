import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
// 添加导航守卫
router.beforeEach((to, from, next) => {
  // 1.如果现在跳转是登录 则放行
  if (to.path === '/login') return next()
  // 2. 如果未登录 则拦截到登录页
  if (!sessionStorage.getItem('token')) return next('/login')
  // 3.其他情况
  next()
})

export default router
