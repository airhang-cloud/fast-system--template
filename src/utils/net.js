const os = require("os");
console.log(`%c 关注公众号:'部落单元阁,分享中心可点击:'http://airhang.ltd`, "color:#d8d8d8;font-size:16px;");
//获取主机ip
function getIPAdress() {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
                return alias.address;
            }
        }
    }
}

exports.myHost = getIPAdress();
