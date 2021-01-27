<!--
 * @Author: your name
 * @Date: 2020-09-23 02:53:12
 * @LastEditTime: 2020-09-23 04:15:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\@Vue\tabBar\src\App.vue
-->
<template>
  <div id="app">
      <router-view></router-view>
      <main-tab-bar-item/>
  </div>
</template>

<script>
import MainTabBarItem from './components/tabBar/MainTabBar/MainTabBarItem'
export default {
  name: 'App',
  data() {
      return {}
    },
  components: {
    MainTabBarItem
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
