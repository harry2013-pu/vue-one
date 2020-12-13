import Vue from 'vue'
import VueRouter from 'vue-router'
/* import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/Users.vue'
import Rights from '../components/Power/Rights'
import Roles from '../components/Power/Roles'
import Categories from '../components/Goods/Categories.vue'
import Params from '../components/Goods/Params.vue'
import List from '../components/Goods/List.vue'
import Add from '../components/Goods/Add.vue'
import Order from '../components/Orders/Order.vue'
import Report from '../components/Reports/Report.vue' */
// 路由懒加载更改
const Login = () => import(/* webpackChunkName: "login_home_welcome" */ '../components/Login.vue')
const Home = () => import(/* webpackChunkName: "login_home_welcome" */ '../components/Home.vue')
const Welcome = () => import(/* webpackChunkName: "login_home_welcome" */ '../components/Welcome.vue')

const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/Users.vue')
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/Power/Rights')
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/Power/Roles')

const Categories = () => import(/* webpackChunkName: "Categories_Params" */ '../components/Goods/Categories.vue')
const Params = () => import(/* webpackChunkName: "Categories_Params" */ '../components/Goods/Params.vue')

const List = () => import(/* webpackChunkName: "List_Add" */ '../components/Goods/List.vue')
const Add = () => import(/* webpackChunkName: "List_Add" */ '../components/Goods/Add.vue')

const Order = () => import(/* webpackChunkName: "Order_Report" */ '../components/Orders/Order.vue')
const Report = () => import(/* webpackChunkName: "Order_Report" */ '../components/Reports/Report.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Categories
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: List
      },
      {
        path: '/goods/add',
        component: Add
      },
      {
        path: '/orders',
        component: Order
      },
      {
        path: '/reports',
        component: Report
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 表示将要访问的路径
  // from 表示从哪个路径跳转过来
  // next 是一个函数 表示放行
  // next() 直接放行 next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 检验token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
