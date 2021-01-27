/*
 * @Author: your name
 * @Date: 2020-08-27 06:43:55
 * @LastEditTime: 2020-08-27 07:06:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\webpack的使用\06-webpack的配置分离\build\dev.config.js
 */
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig, {
    devServer: {
        contentBase: './dist',//为哪一个文件夹提供本地服务，默认是根文件夹
        inline: true,//页面实时刷新

    }
})