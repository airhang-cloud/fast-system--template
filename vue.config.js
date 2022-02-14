let { myHost } = require("./src/utils/net");
// 打包的优化 引入压缩
let CompressionPlugin = require("compression-webpack-plugin");
let UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    publicPath: "./",
    productionSourceMap: false,
    devServer: {
        port: 9078,
        hot: true,
        open: true,
        disableHostCheck: true,
        proxy: {
            "/api": {
                target: `http://${myHost}:3000`, //启动ez-server，这里为模拟服务端，具体结合自己的业务服务地址
                changeOrigin: true,
            },
        },
    },
    chainWebpack: (config) => {
        /* 页面默认标题 */
        config.plugin("html").tap((args) => {
            args[0].title = "EZAdmin";
            return args;
        });
        /* 忽略I18相关warn,不够优雅的手段 */
        config.resolve.alias.set("vue-i18n", "vue-i18n/dist/vue-i18n.cjs.js");
        /* 添加分析工具,要查看打包文件大小情况时 记得先解开 取反 再执行 yarn build:report */
        if (!process.env.NODE_ENV === "production") {
            config.plugin("webpack-bundle-analyzer").use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin).end();
            config.plugins.delete("prefetch");
        } else {
        }
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === "production") {
            // 为生产环境修改配置...
            config.mode = "production";
            return {
                plugins: [
                    // 代码压缩优化
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css/, //匹配文件名
                        threshold: 10240, //对超过10k的数据进行压缩
                        deleteOriginalAssets: false, //是否删除原文件
                    }),
                    // 生产环境移除 控制台输出
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            compress: {
                                drop_console: true,
                            },
                        },
                    }),
                ],
            };
        }
    },
};
