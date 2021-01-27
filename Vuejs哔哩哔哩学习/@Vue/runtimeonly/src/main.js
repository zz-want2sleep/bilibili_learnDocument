/*
 * @Author: your name
 * @Date: 2020-09-04 06:33:03
 * @LastEditTime: 2020-09-16 02:44:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ßÙÁ¨ßÙÁ¨Ñ§Ï°ÎÄµµ\VuejsßÙÁ¨ßÙÁ¨Ñ§Ï°\@Vue\runtimeonly\src\main.js
 */
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
//   render: h => h(App)
  render: createElement => createElement(App)
})
