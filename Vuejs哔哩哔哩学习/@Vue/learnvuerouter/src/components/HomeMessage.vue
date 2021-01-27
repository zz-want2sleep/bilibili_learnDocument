<!--
 * @Author: your name
 * @Date: 2020-09-21 23:15:41
 * @LastEditTime: 2020-09-21 23:17:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\@Vue\learnvuerouter\src\components\HomeMessage.vue
-->
<template>
 <div class="HomeMessage">
     <ul>
         <li>消息1</li>
         <li>消息2</li>
         <li>消息3</li>
         <li>消息4</li>
         <li>消息5</li>
     </ul>
 </div>
</template>

<script>
export default {
 name: "HomeMessage",
 data () {
 return {
 msg:'Welcome to your vuetemplate'
 }
 }
}
</script>

<style scoped>

</style>