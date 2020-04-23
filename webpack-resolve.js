const path = require("path");

module.exports = {
  resolve: {
    // 优化模块查找路径
    modules: [
      path.resolve("src"),
      path.resolve("node_modules") // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
    ],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@images": path.resolve(__dirname, "./src/images"),
      "@components": path.resolve(__dirname, "./src/components")
    }
  }
};
