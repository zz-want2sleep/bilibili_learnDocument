<!--
 * @Author: your name
 * @Date: 2020-09-21 01:15:05
 * @LastEditTime: 2020-09-23 02:46:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\@Vue\learnvuerouter\src\App.vue
-->
<template>
  <div id="app">
    <!-- <router-link tag="button" to="/home" replace active-class="active">首页</router-link>
    <router-link tag="button" to="/about" replace active-class="active">关于</router-link> -->
    <!-- <router-link tag="button" to="/home" replace>首页</router-link>
    <router-link tag="button" to="/about" replace>关于</router-link> -->
    <!-- <button @click="homeClick">Home</button>
    <button @click="aboutClick">About</button> -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/' + userName">用户</router-link>
    <router-link :to="{path: '/profile', query: {name: 'zhangzhe', age: 18, height: 1.77}}">档案</router-link> -->
    <button @click="userClick">用户</button><button @click="profileClick">档案</button>
    <!-- 单独想让一个或者两个组件频繁的创建和销毁 -->
    <keep-alive exclude="Home,About">
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
let profile =  {name: 'zhangzhe', age: '23', height: 1.77}
export default {
  name: 'App',
  data(){
      return {
          userName: 'zhangsan'
      }
  },
  methods: {
      homeClick() {
          //不要绕过vue-router去直接使用history.pushState和history.replaceState
        //   this.$router.push('/home')
        this.$router.replace('/home')
      },
      aboutClick() {
        //   this.$router.push('/about')
          this.$router.replace('/about')
      },
      userClick() {
          this.$router.push('/user/' + this.userName).catch(err => err)
      },
      profileClick() {
          this.$router.push({
              path: '/profile',
              query: { profile, lover: 'Girl'}
          }).catch(err => err)
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .router-link-active {
    color: red;
} */
.active {
    color: red;
}
</style>
