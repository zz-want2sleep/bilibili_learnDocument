<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar-item></main-tab-bar-item>
  </div>
</template>

<script>
import MainTabBarItem from 'components/content/MainTabBarItem'

export default {
  name: 'App',
  components: {
    MainTabBarItem
  }
}
</script>

<style>
@import '~assets/css/base.css'
</style>
