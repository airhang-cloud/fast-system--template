let {myHost} = require("./src/utils/net")

module.exports = {
    publicPath: "./",
    devServer: {
        port: 9078,
        hot: true,
        open: true,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: `http://${myHost}:3000`,  //启动ez-server，这里为模拟服务端，具体结合自己的业务服务地址
                changeOrigin: true,
            }
        }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = "EZAdmin"
            return args;
        })
    }
}
