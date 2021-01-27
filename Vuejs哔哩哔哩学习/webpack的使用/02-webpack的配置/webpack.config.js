//动态获取路径的前提，获取path对象（得存在path这个包）
const path = require('path');

// CommonJS的形式
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),//要求绝对路径，node的语法：动态的获取路径,__dirname,node上下文中定义的变量，值为当前文件所在的绝对路径，resolve函数用于拼接
    filename: 'bundle.js'
  },
}