const path = require('path')
const autoprefixer = require('autoprefixer')
const px2viewport = require('postcss-px-to-viewport')

// https://cli.vuejs.org/zh/config/#全局-cli-配置
module.exports = {
  lintOnSave: false,

  outputDir: 'docs',

  publicPath: './',

  assetsDir: 'static',

  devServer: {
    port: 1024,
    proxy: {
      '/eas': {
        target: 'https://test.luxelakes.com/',
        ws: true,
        port: 443,
        https: true,
        changeOrigin: true
      },
      '/suppliermeeting': {
        target: 'https://test.luxelakes.com/',
        ws: true,
        port: 443,
        https: true,
        changeOrigin: true
      }
    }
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'button-info-color': '#FFF',
          'button-info-background-color': '#00B2A9',
          'button-info-border-color': '#00B2A9',
          'checkbox-checked-icon-color': '#00B2A9',
          'tab-active-text-color': '#00B2A9',
          'tabs-default-color': '#00B2A9',
          'tabs-bottom-bar-color': '#00B2A9'
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          px2viewport({ viewportWidth: 375 })
        ]
      }
    }
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
    config.resolve.alias['@components'] = path.resolve(__dirname, './src/components')
  },

  chainWebpack: config => {}
}
