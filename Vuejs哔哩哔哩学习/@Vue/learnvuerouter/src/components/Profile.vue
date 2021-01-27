<!--
 * @Author: your name
 * @Date: 2020-09-22 02:23:35
 * @LastEditTime: 2020-09-23 02:47:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\@Vue\learnvuerouter\src\components\profile.vue
-->
<template>
 <div class="Profile">
     这是一个档案
    <div>{{$route.query}}</div>
    <div>{{$route.query.name}}</div>
    <div>{{$route.query.age}}</div>
    <div>{{$route.query.height}}</div>
 </div>
</template>

<script>
export default {
 name: "Profile",
 data () {
 return {
 msg:'Welcome to your vuetemplate'
 }
 },
     created () {
        console.log('created');
    },
    destroyed() {
        console.log('destoryed')
    },
}
</script>

<style scoped>

</style>