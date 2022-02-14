let { myHost } = require("./src/utils/net");
// 打包的优化 引入压缩
let CompressionPlugin = require("compression-webpack-plugin");

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
        config.plugin("html").tap((args) => {
            args[0].title = "EZAdmin";
            return args;
        });
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
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css/, //匹配文件名
                        threshold: 10240, //对超过10k的数据进行压缩
                        deleteOriginalAssets: false, //是否删除原文件
                    }),
                ],
            };
        }
    },
};
