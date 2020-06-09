import Vue from 'vue'
import VueRouter from 'vue-router'
//import Login from '../components/Login.vue'
const Login = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Login.vue')
//import Home from '../components/Home.vue'
const Home = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Home.vue')
//import Welcome from '../components/Welcome.vue'
const Welcome = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Welcome.vue')

//import Users from '../components/user/Users.vue'
const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/user/Users.vue')
//import Rights from '../components/power/Rights.vue'
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Rights.vue')
//import Roles from '../components/power/Roles.vue'
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Roles.vue')

//import Cate from '../components/goods/Cate.vue'
const Cate = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Cate.vue')
//import Params from '../components/goods/Params.vue'
const Params = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Params.vue')

//import GoodsList from '../components/goods/List.vue'
const GoodsList = () => import(/* webpackChunkName: "List_Add" */ '../components/goods/List.vue')
//import Add from '../components/goods/Add.vue'
const Add = () => import(/* webpackChunkName: "List_Add" */ '../components/goods/Add.vue')

//import Order from '../components/order/Order.vue'
const Order = () => import(/* webpackChunkName: "Order_Roport" */ '../components/order/Order.vue')
//mport Roport from '../components/report/Report.vue'
const Roport = () => import(/* webpackChunkName: "Order_Roport" */ '../components/report/Report.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home,
    redirect: "/welcome",
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
        path:'/rights',
        component: Rights
      },
      {
        path:'/roles',
        component: Roles
      },
      {
        path:'/categories',
        component: Cate
      },
      {
        path:'/params',
        component: Params
      },
      {
        path:'/goods',
        component: GoodsList
      },
      {
        path:'/goods/add',
        component: Add
      },
      {
        path:'/orders',
        component: Order
      },
      {
        path:'/reports',
        component: Roport
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next();

  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')

  next()
})

export default router
