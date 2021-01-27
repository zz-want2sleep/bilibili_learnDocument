<!--
 * @Author: your name
 * @Date: 2020-09-21 20:14:16
 * @LastEditTime: 2020-09-23 02:37:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\@Vue\learnvuerouter\src\components\Home.vue
-->
<template>
 <div class="Home">
      <h2>Home</h2>
     <span>今天是个坏天气，秋风送爽，漫天黄沙（雾霾）</span>
     <router-link to="/home/news">新闻</router-link>
     <router-link to="/home/message">消息</router-link>
     <!-- 使用keep-alive来保持状态 -->

        <router-view/>

     <!-- router-view用来占位 -->
 </div>
</template>

<script>
let setT1 = null;
export default {
    name: "Home",
    data () {
        return {
            msg:'Welcome to your vuetemplate',
            path: '/home/news',
            i: 0
        }
    },
    mounted() {this.setTime()},
    methods: {
      setTime(){
                console.log(this.i++)
                setT1 = setTimeout(this.setTime,1000);
                this.$once('hook:beforeDestroy', () => {
//                     console.log(888)
//                     clearTimeout(setT1)
//                      console.log(setT1)
                })
            }
    },

    // 如果不使用keep-alive标签(Vue自带的),路由跳转后router-view会频繁的创建和销毁组件，同时也无法使用
    //acitivated()组件处于激活状态时调用和deactivated()组件从激活变为失活状态时调用，使用后组件会有缓存
    created () {
        console.log('home created');
    },
    destroyed() {
        console.log('home destoryed')
    },
    //为了实现点击路由跳转返回时当前路由还是跳转前的路由地址，使用这个keep-alive（包裹App组件就够了，会缓存里面所有的组件）包裹router-view保留组件缓存，data中定义一个path属性，并且使用activated方法和beforeRouteLeave方法进行操作
    //绝对不能忘记调用路由守卫的next，否则无法进行正常的路由跳转
    activated() {
        console.log ('activated')
        this.$router.push(this.path).catch(err => err);
    },
    deactivated() {
        console.log('deactivated')
    },
    // beforeRouteLeave (to, from, next) {
    //     console.log('beforeRouteLeave')
    //     this.path = this.$route.path;
    //     next();
    // }
    beforeRouteLeave(to,from,next){
            console.log(1232323)
            clearTimeout(setT1)
            next()
            }
}
</script>

<style scoped>

</style>