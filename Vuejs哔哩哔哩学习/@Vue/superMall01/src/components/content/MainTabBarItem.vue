<template>
    <div id="MainTabBarItem">
        <tab-bar>
        <tab-bar-item path="/home" >
            <img slot="slot-img-active" src="~assets/img/tabbar/home_active.svg"/>
            <img slot="slot-img" src="~assets/img/tabbar/home.svg"/>
            <div slot="slot-text">首页</div>
          </tab-bar-item>
          <tab-bar-item path="/category">
        <img slot="slot-img-active" src="~assets/img/tabbar/category_active.svg"/>
        <img slot="slot-img" src="~assets/img/tabbar/category.svg"/>
        <div slot="slot-text">分类</div>
          </tab-bar-item>
          <tab-bar-item path="/cart">
        <img slot="slot-img-active" src="~assets/img/tabbar/shopcart_active.svg"/>
        <img slot="slot-img" src="~assets/img/tabbar/shopcart.svg"/>
        <div slot="slot-text">购物车</div>
          </tab-bar-item>
          <tab-bar-item path="profile">
        <img slot="slot-img-active" src="~assets/img/tabbar/profile_active.svg"/>
        <img slot="slot-img" src="~assets/img/tabbar/profile.svg"/>
        <div slot="slot-text">我的</div>
          </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
import TabBar from 'components/common/TabBar'
import TabBarItem from 'components/common/TabBarItem'
export default {
  name: 'MainTabBarItem',
    components: {
      TabBar, TabBarItem
    }
  }
</script>

<style>
</style>