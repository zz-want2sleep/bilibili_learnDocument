<!--
 * @Author: your name
 * @Date: 2020-09-23 04:02:25
 * @LastEditTime: 2020-09-23 04:08:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\@Vue\tabBar\src\components\tabBar\TabBar.vue
-->
<template>
 <div id="TabBar">
     <slot></slot>
 </div>
</template>

<script>
export default {
 name: "TabBar",
 data () {
 return {
 msg:'Welcome to your vuetemplate'
 }
 }
}
</script>

<style scoped>
 #TabBar {
    display: flex;
    background-color: #f6f6f6;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .2);
}
</style>