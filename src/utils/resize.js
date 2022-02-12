/* eslint-disable no-unused-vars */
import { Message } from "@arco-design/web-vue";
export function onResize(cb) {
    window.onresize = function (event) {
        const e = window.Event || event;
        let winWidth;
        if (window.innerWidth) {
            winWidth = window.innerWidth;
        } else if (document.body && document.body.clientWidth) {
            winWidth = document.body.clientWidth;
        }
        winWidth <= 600 && Message.info("检测当前窗口较小,系统暂时未对移动端做到完全兼容,建议您到PC浏览器进行打开");
        cb({ type: "resize", width: winWidth });
    };
}
