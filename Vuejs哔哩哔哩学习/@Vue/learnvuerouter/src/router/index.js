/*
 * @Author: your name
 * @Date: 2020-09-21 01:15:05
 * @LastEditTime: 2020-09-23 02:32:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\@Vue\learnvuerouter\src\router\index.js
 */
//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2. 创建VueRouter对象，可以将其中的映射关系单独抽离出来
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeMessage = () => import('../components/HomeMessage')
const HomeNews = () => import('../components/HomeNews')
const Profile = () => import('../components/Profile')
const routes = [
    {
        path: '',// ''和'/'都行
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页'
        },
        beforeEnter: (to, from, next) => {
            console.log('组件独享的守卫,进入组件前');
            // 可以通过业务逻辑，选择性的改变next中的参数：例如，验证用户是否登录，如果没有登陆，就next('/login')返回登录页面
            next();
        },
        children: [
            //路由嵌套子组件的path路径前面默认会要加上'/home/'
            {
                path: '',
                redirect: 'news'
            },
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'message',
                component: HomeMessage
            }
        ]
    },
    {
        path: '/About',
        meta: {
            title: '关于'
        },
        component: About
    },
    {
        path: '/user/:userName',
        meta: {
            title: '用户'
        },
        name: 'User',
        component: User
    },
    {
        path: '/profile',
        meta: {
            title: '档案'
        },
        component: Profile
    }
]
const router = new VueRouter({
    //配置路由和组件之间的应用关系，我将其抽离出来
    routes,
    mode: 'history',
    linkActiveClass: 'active'//相当于在每一个<router-link></router-link>标签中添加了active-class="active"
})
//3.导出路由实例，挂载到Vue实例中
//前置守卫（guard）
router.beforeEach((to, from, next) => {
    // 实现每次路由跳转时，改变HTML的title的值，因为SPA只有一个HTML，类似于监听路由发生变化后执行的操作
    //从from:route 路由 跳转到 to:route 路由
    console.log("+++")
    document.title = to.matched[0].meta.title;

    next();
})
//后置钩子（hook）
router.afterEach((to, from) => {
    console.log("---")
})
//全局守卫包含前置守卫和后置钩子，相较于前置守卫，后置钩子不需要next，此外守卫和钩子都属于回调函数
export default router