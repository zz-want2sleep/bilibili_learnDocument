/*
 * @Author: your name
 * @Date: 2020-09-21 01:15:05
 * @LastEditTime: 2020-09-22 22:53:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\@Vue\learnvuerouter\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
//如果是一个文件夹会自动找其中的index文件
Vue.config.productionTip = false
Vue.prototype.name = 'zhangzhe'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
console.log(router)
//在模块化工程中使用路由插件
// 第一步：导入路由对象，并且调用Vue.use(VueRouter)
//第二部：创建路由实例，并且传入路由映射配置
//第三步：在Vue实例中挂载创建的路由实例
//使用vue-router的步骤
//1. 创建路由组件
//2. 配置路由映射：组件和路由映射关系
//3. 使用路由：通过<router-link></router-link>和<router-view></router-view>