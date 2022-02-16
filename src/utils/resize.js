/* eslint-disable no-unused-vars */
import { Message } from "@arco-design/web-vue";
import { checkPCMobile, getCurSelect, getQueryString } from "@/utils";
import router, { routes } from "@/router";
import { debounce } from "lodash";

export function onResize(cb) {
    window.onresize = debounce(function (event) {
        let winWidth;
        if (window.innerWidth) {
            winWidth = window.innerWidth;
        } else if (document.body && document.body.clientWidth) {
            winWidth = document.body.clientWidth;
        }
        // winWidth <= 600 && Message.info("检测当前窗口较小,系统暂时未对移动端做到完全兼容,建议您到PC浏览器进行打开")
        checkPCMobile((val) => {
            if (!val.isPc) router.push(`/tips?redirect=${JSON.parse(getCurSelect())[0]}`);
            else {
                getQueryString(
                    "redirect",
                    "",
                    (res) => {
                        router.push(res);
                    },
                    (err) => {}
                );
            }
        }),
            cb({ type: "resize", width: winWidth });
    }, 100);
}
