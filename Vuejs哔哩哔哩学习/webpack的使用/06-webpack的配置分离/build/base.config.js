/*
 * @Author: your name
 * @Date: 2020-08-12 10:01:07
 * @LastEditTime: 2020-08-27 07:07:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\webpack的使用\04-webpack的vue配置\webpack.config.js
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//将自动生成一个index.html文件（可以自定义模板），会将打包完后的js自动使用script标签插入body中
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // 加上publicPath后涉及到url的东西，打包后路径都会加上dist/
        // 因为最后会想办法将index也放入dist文件夹，所以后期publicPath也将无意义，目前是环境配置阶段，多写一点无所谓
        // publicPath: 'dist/'
    },
    module: {
        rules: [
        {
            test: /\.vue$/,
            use: ['vue-loader']

        },
        {
            test: /\.css$/,
            //css-loader只负责将css文件进行加载
            //style-loader负责将样式添加到DOM上
            //使用多个loader时，是从右向左或从下向上

            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.less$/,
            //css-loader只负责将css文件进行加载
            //style-loader负责将样式添加到DOM上
            //使用多个loader时，是从右向左或从下向上
            use: [
            {
                loader: "style-loader" //create style nodes from JS strings
            },
            {
                loader: "css-loader" //translates CSS into CommonJS
            },
            {
                loader: "less-loader" //compiles less to CSS
            }
            ]
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
            {
                loader: 'url-loader',
                options:{
                // 当加载的图片，大于limit时，会将图片编译成base64字符串形式
                // 当加载的图片，小于limit时，需要使用file-loader模块进行加载，打包后会将图片放在输出文件dist中，图片名为图片内容MD5哈希值并会保留所引用资源（图片）的原始扩展名(为避免图片名重复冲突)。
                limit: 60000,
                name: 'img/[name].[hash:8].[ext]'
                }
            }
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['es2015']
            }
            }
        }
        ]
    },
    resolve: {//resolve一般解决路径问题
        //   alias别名
        extensions:['.js', '.css', '.vue', '.less'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归zz所有'),// 安装插件（用于扩展框架）
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}