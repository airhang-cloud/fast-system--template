/* eslint-disable no-unused-vars */
export function onResize(cb) {
    window.onresize = function (event) {
        const e = window.Event || event;
        let winWidth;
        if (window.innerWidth) {
            winWidth = window.innerWidth;
        } else if (document.body && document.body.clientWidth) {
            winWidth = document.body.clientWidth;
        }
        cb({ type: "resize", width: winWidth });
    };
}
