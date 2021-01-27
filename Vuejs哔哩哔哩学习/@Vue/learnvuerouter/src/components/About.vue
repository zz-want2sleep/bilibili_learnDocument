<!--
 * @Author: your name
 * @Date: 2020-09-21 20:14:23
 * @LastEditTime: 2020-09-23 02:28:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\@Vue\learnvuerouter\src\components\About.vue
-->
<template>
 <div class="About">
     <h2>About</h2>
     <span>今天是个好天气，秋风送爽，漫天黄沙（雾霾）</span>
 </div>
</template>

<script>
export default {
    name: "About",
    data () {
        return {
            msg:'Welcome to your vuetemplate'
        }
    },
     created () {
        console.log('About created');
    },
    destroyed() {
        console.log('About destoryed')
    },
}
</script>

<style scoped>

</style>