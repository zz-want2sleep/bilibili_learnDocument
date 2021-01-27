<!--
 * @Author: your name
 * @Date: 2020-08-16 21:13:34
 * @LastEditTime: 2020-08-16 21:23:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\webpack的使用\04-webpack的vue配置\src\js\Cpn.vue
-->
<template>
 <div class="title">
 {{message}}
 </div>
</template>

<script>
export default {
 name: "Cpn",
 data () {
 return {
 messag:'Welcome to your vuetemplate'
 }
 }
}
</script>
 .title {
     color: blue;
 }
<style scoped>

</style>