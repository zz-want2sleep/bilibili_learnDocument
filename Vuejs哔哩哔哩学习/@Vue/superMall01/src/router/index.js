import VueRouter from 'vue-router'
import Vue from 'vue'

const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
// 安装插件
Vue.use(VueRouter)
// 创建路由映射
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
] 

const router = new VueRouter({
  mode: 'history',
  routes
})


// 导出路由实例
export default router