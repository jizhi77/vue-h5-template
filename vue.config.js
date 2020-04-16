const path = require('path')

module.exports = {
    lintOnSave: false,
    outputDir: 'docs',
    devServer: {},
    chainWebpack: config => {
        config.resolve.alias
            .set('@images', path.resolve(__dirname, './src/images'))
    }
};
