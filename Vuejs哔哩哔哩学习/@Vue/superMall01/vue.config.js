module.exports = {
  devServer: {
    overlay: {
        warnings: false,
        errors: false
    }
},
  lintOnSave: false,
  configureWebpack: {
    resolve: {//resolve专门用来解决路径问题
      alias: {//为路径取别名
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views',
      }
    }
  }
}