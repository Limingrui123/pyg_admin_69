import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/home/Home'
import Welcome from '@/components/home/welcome'
import Users from '@/components/users/users'
import Rights from '@/components/auth/right'
import Roles from '@/components/auth/roles'
import Categories from '@/components/goods/Categories'
import Params from '@/components/goods/params'
import Goods from '@/components/goods/Goods'
import GoodsAdd from '@/components/goods/GoodsAdd'
import Orders from '@/components/Orders/Orders'
import Reports from '@/components/reports/Reports'

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
      component: Home,
      redirect: 'welcome',
      // 二级路由配置 将会在home组件下使用
      children: [
        {path: '/welcome', name: 'welcome', component: Welcome},
        {path: '/users', name: 'users', component: Users},
        {path: '/rights', name: 'rights', component: Rights},
        {path: '/roles', name: 'roles', component: Roles},
        {path: '/params', name: 'params', component: Params},
        {path: '/categories', name: 'categories', component: Categories},
        {path: '/goods', name: 'goods', component: Goods},
        {path: '/goodsAdd', name: 'goods', component: GoodsAdd},
        {path: '/orders', name: 'orders', component: Orders},
        {path: '/reports', name: 'reports', component: Reports}
      ]
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
