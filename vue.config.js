const path = require('path')

module.exports = {
  lintOnSave: false,
  outputDir: 'docs',
  publicPath: 'vue-h5-template',
  devServer: {},
  chainWebpack: config => {
    config.resolve.alias.set('@images', path.resolve(__dirname, './src/images'))
  },
}
