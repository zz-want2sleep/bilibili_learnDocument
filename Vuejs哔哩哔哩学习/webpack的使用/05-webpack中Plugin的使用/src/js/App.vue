<!--
 * @Author: your name
 * @Date: 2020-08-16 20:58:46
 * @LastEditTime: 2020-08-16 21:22:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\webpack的使用\04-webpack的vue配置\src\js\App.vue
-->
<template>
    <div>
    <h2 class="title">{{message}}</h2>
    <button onclick="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>

    </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
    data: function(){
        return {message: '你好呀！', name: '凡人'}
    },
    components: {
        Cpn
    },
    methods: {
        btnClick: function(){

        }
    }
}
</script>

<style scoped>
 .title {
     color: green;
 }
</style>