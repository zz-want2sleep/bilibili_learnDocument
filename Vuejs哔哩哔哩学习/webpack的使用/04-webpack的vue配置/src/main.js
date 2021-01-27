/*
 * @Author: your name
 * @Date: 2020-08-13 00:04:42
 * @LastEditTime: 2020-08-16 21:18:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\webpack的使用\04-webpack的vue配置\src\main.js
 */
// 1. CommonJS的导入
const {add1, mul} = require('./js/mathUtils.js');

console.log(add1(20, 30));
console.log(mul(10, 20));
// 2. 浏览器本身不支持CommonJs规范，使用webpack进行打包使得生成的包中不存在CommonJS规范的代码（转化为了原生的js代码），且webpack会自动处理各种模块之间的依赖。
// es6的导入
import {name, age, height} from './js/info.js'
// 3. 刻意的去依赖css
require('./css/normal.css');

console.log(name);
console.log(age);
console.log(height);
//4. 依赖less文件
require('./css/special.less');
//目前每更改一次文件就需要重新去打一次包。后期使用本地服务器就可以使用热加载功能
document.writeln('<h2>今天是个不错的天气</h2>');

// 使用Vue进行开发
// 一般webpack打包不会将node_modules打包进去
import Vue from 'vue'//因为模块化了，要在一个模块使用另一个模块，就需要导入/导出模块

// 同时存在el和template时，template会替换掉el绑定的div,这样的好处就是以后不用再去更改el绑定的div里面的内容了
import app from './js/App.vue'
new Vue({
    el: '#app',
    template: `<app/>`,
    components: {app}
});
