const path = require('path')

// https://cli.vuejs.org/zh/config/#全局-cli-配置
module.exports = {
  lintOnSave: false,

  outputDir: 'docs',

  publicPath: './',

  devServer: {
    port: 1024
  },

  configureWebpack: config => {

    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置
    } else if (process.env.NODE_ENV === 'test') {
      // 为测试环境修改配置
    } else {
      // 为开发环境修改配置
    }

    // 注意：对象直接赋值有可能覆写原有的配置
    config.resolve.alias['@views'] = path.resolve(__dirname, './src/views')
    config.resolve.alias['@images'] = path.resolve(__dirname, './src/images')
    config.resolve.alias['@components'] = path.resolve(__dirname,
      './src/components')
  },

  chainWebpack: config => {}
}
