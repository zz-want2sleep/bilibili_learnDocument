import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home') 
const Cart = () => import('../views/cart/Cart') 
const Category = () => import('../views/category/Category') 
const Profile = () => import('../views/profile/Profile') 
// 注册路由
Vue.use(VueRouter)


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
        path: '/profile',
        component: Profile
    },
    {
        path: '/cart',
        component: Cart
    }
]
// 创建路由实例
const router = new VueRouter({
    mode: 'history',
    routes
})
//导出路由实例
export default router