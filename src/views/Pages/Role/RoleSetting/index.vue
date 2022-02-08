<!--样例模板-->
<template>
    <container-box :loading="loading" title="权限控制" subtitle="切换角色">
        <!-- 当前角色 -->
        <a-typography :style="{ marginTop: '-40px' }">
            <a-typography-title
                >当前身份: {{ identity }}
                <a-popconfirm @popup-visible-change="handlerPopupChnage" @ok="handlerToggleRole" :content="content">
                    <a-button>点击切换身份</a-button>
                </a-popconfirm>
            </a-typography-title>
            <a-typography-paragraph>浏览器存储: Cookie、LocalStorage、SessionStorage、IndexedDB、WebSql</a-typography-paragraph>
            <a-typography-paragraph>
                <ul>
                    <li>
                        程序人生
                        <ul>
                            <li>兴趣是最好的导师</li>
                        </ul>
                    </li>
                    <li>坚持不一定会胜利，但能加强你面对困难的毅力</li>
                    <li>多走弯路，让所有路都留下你前行的踏记</li>
                </ul>
            </a-typography-paragraph>
        </a-typography>
    </container-box>
</template>
<script>
import { putCurIdentity, putCurIdentity2Admin } from "@/utils/index";
// eslint-disable-next-line no-unused-vars
const DOCS = {
    admin: "是否切换为普通用户",
    user2: "是否切换为管理员",
    user1: "是否切换为管理员",
};
const METHODS = {
    admin: putCurIdentity,
    user1: putCurIdentity2Admin,
    user2: putCurIdentity2Admin,
};
import { mapState } from "vuex";
export default {
    name: "RoleSetting",
    computed: {
        ...mapState("user", ["identity"]),
    },
    data() {
        return {
            content: "是否切换为普通用户",
            loading: false,
        };
    },
    methods: {
        handlerChange(val) {
            console.log("变化了", val);
        },
        // 气泡
        handlerPopupChnage() {
            // eslint-disable-next-line no-prototype-builtins
            this.content = DOCS.hasOwnProperty(this.identity) ? DOCS[this.identity] : "身份异常，系统自动匹配菜单";
        },
        handlerToggleRole() {
            METHODS[this.identity]();
            window.location.reload();
        },
    },
};
</script>
