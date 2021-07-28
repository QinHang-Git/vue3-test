const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  },
  // devServer: {  
  //   port: 8888, // 端口
  //   proxy: {
  //     '/api': {
  //       target: 'https://c.y.qq.com', // 控制台转换
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '' //代理的路径
  //       }
  //     },
  //   }
  // }
};