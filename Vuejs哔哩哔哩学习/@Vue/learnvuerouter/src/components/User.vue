<!--
 * @Author: your name
 * @Date: 2020-09-21 21:45:14
 * @LastEditTime: 2020-09-23 02:29:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\@Vue\learnvuerouter\src\components\User.vue
-->
<template>
 <div class="User">
     <h2>用户</h2>
     <span>展示一下动态路由如何取值</span>
     <p>{{$route.params.userName}}</p>
     <!-- 不需要this.$route.params.userName的原因和使用{{}}和使用methods或者computed取值一样，可以不用加this -->
     <p>{{userName1}}</p>
     <button @click="btnClick">点击</button>
 </div>
</template>

<script>
export default {
 name: "User",
 data () {
    return {
    msg:'Welcome to your vuetemplate',
    userName: this.$route.params.userName
    }
 },
 computed: {
     userName1() {
         return this.$route.params.userName;
     }
 },
 methods: {
    //  所有的组件都继承Vue的原型
     btnClick() {
        console.log(this.$router)
        console.log(this.$route)
        console.log(this.name)
     }
 },
//  beforeRouteEnter (to, from, next) {
//      console.log('路由组件还没有真正创建，所以还不能调用this')
//     next()
//  },
//  beforeRouteUpdate (to, from, next) {
//      console.log('可以调用this')
//      next()
//  },
//  beforeRouteLeave (to, from, next) {
//      next()
//  }
}
</script>

<style scoped>

</style>