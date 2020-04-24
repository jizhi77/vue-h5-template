const path = require("path");

module.exports = {
  lintOnSave: false,

  outputDir: "docs",

  publicPath: "./",

  devServer: {
    port: 1024
  },

  chainWebpack: config => {
    config.resolve.alias.set("@views", path.resolve(__dirname, "./src/views"));
    config.resolve.alias.set(
      "@images",
      path.resolve(__dirname, "./src/images")
    );
    config.resolve.alias.set(
      "@components",
      path.resolve(__dirname, "./src/components")
    );
  }
};
