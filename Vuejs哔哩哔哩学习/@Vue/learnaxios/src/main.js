import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import axios from 'axios'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
// axios的基本使用,因为支持promise所以可以直接在后面使用then来接受返回的值
axios({
    url: 'http://123.207.32.32:8000/home/multidata'
}).then(res => {
    console.log(res)
    // 控制台中返回的数据是一个对象，除了data外，其他的属性都是axios帮我们自动生成的
})


//全局配置，一般不会这样使用
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

//一般不使用全局配置，而是创建实例，在实例里面做配置，使用axios.create({})方法
const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
})
// const instance2 = axios.create({
//     baseURL: 'http://xxxxxxx:8000',
//     timeout: 5000
// })


//axios的并发操作
// axios.all([
//     axios.get('/home/multidata'),
//     axios.get('/home/data', {params: {
//         type: 'sell',
//         page: 2
//     }
//     })//使用axios.spread(function(res1,...,resn))可以将数组类型的对象解构，类似es6的数组解构
// ]).then(axios.spread(function(res1, res2) {
//     console.log(res1)
//     console.log(res2)
// }))

instance1.get('/home/multidata').then(res => {
    console.log(res)
})