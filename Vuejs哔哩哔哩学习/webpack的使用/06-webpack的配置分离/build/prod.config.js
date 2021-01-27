/*
 * @Author: your name
 * @Date: 2020-08-27 06:43:47
 * @LastEditTime: 2020-08-27 06:59:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\webpack的使用\06-webpack的配置分离\build\prod.config.js
 */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');//用来压缩打包完后的js文件（丑化）
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig, {//合并两个配置文件
    plugins: [
        new UglifyJsPlugin()
    ]
})