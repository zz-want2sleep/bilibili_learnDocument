<template>
    <div id="MainTabBarItem">
        <tab-bar>
        <tab-bar-item path="/home"  activeColor="yellow">
            <img slot="slot-img-active" src="~build/logo.png"/>
            <img slot="slot-img" src=""/>
            <div slot="slot-text">首页</div>
          </tab-bar-item>
          <tab-bar-item path="/category" activeColor="black">
        <img slot="slot-img-active" src="~build/logo.png"/>
        <img slot="slot-img" src=""/>
        <div slot="slot-text">分类</div>
          </tab-bar-item>
          <tab-bar-item path="/cart">
        <img slot="slot-img-active" src="~build/logo.png"/>
        <img slot="slot-img" src=""/>
        <div slot="slot-text">购物车</div>
          </tab-bar-item>
          <tab-bar-item path="profile">
        <img slot="slot-img-active" src="~build/logo.png"/>
        <img slot="slot-img" src=""/>
        <div slot="slot-text">我的</div>
          </tab-bar-item>
      </tab-bar>  
    </div>
</template>

<script>
import TabBar from '..common/TabBar'
import TabBarItem from '..common/TabBarItem'
export default {
name: 'MainTabBarItem',
  components: {
    TabBar, TabBarItem
  }
}
</script>

<style>

</style>