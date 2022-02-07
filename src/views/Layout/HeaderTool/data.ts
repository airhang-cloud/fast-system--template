import { loginOut } from "./methods";
import { Modal } from "@arco-design/web-vue";
import router from "@/router";
interface Data {
    setting: Array<any>;
}

export let headerMenu: Data = {
    setting: [
        {
            label: "主题设置",
            key: "theme",
        },
        {
            label: "界面布局",
            key: "layout",
        },
        {
            label: "全局搜索",
            key: "search",
        },
    ],
};

export let methods = [
    {
        theme: () => {
            console.log("点击1");
        },
        layout: () => {
            console.log("点击2");
        },
        search: () => {
            console.log("点击3");
        },
    },
    {
        user: () => {
            console.log("点击1");
        },
        level: () => {
            console.log("点击2");
        },
        log: () => {
            Modal.info({
                title: "提示",
                content: "是否确定退出当前账号?退出后您将不再接受后台消息",
                cancelText: "取消",
                hideCancel: false,
                onOk: () => {
                    console.log("tuic");
                    loginOut(() => {
                        router.push("/login");
                    });
                },
                onCancel: () => {
                    console.log("cancel");
                },
            });
        },
    },
];
