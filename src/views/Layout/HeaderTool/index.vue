<template>
    <div class="header-tool">
        <!--消息-->
        <a-badge :count="9" :max-count="99">
            <a-avatar shape="square">
                <icon-notification style="font-size: 22px" />
            </a-avatar>
        </a-badge>
        <a-divider direction="vertical" />
        <!--系统设置-->
        <a-dropdown @select="handle">
            <a-avatar shape="square" />
            <template #content>
                <a-doption v-for="el in headerMenu.setting" :key="el.key">{{ el.label }}</a-doption>
            </template>
        </a-dropdown>
        <a-divider direction="vertical" />
        <!--头像个人数据详情-->
        <a-dropdown @select="handlerLog">
            <img class="user-icon" />
            <template #content>
                <a-doption value="user">用户: airhang</a-doption>
                <a-doption value="level">等级: Dsvip</a-doption>
                <a-doption value="log">登出当前账号</a-doption>
            </template>
        </a-dropdown>
    </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { headerMenu } from "./data";
import { loginOut } from "./methods";
import { Modal } from "@arco-design/web-vue";
import router from "@/router";

export default defineComponent({
    name: "index",
    setup() {
        function handlerLog(val) {
            switch (val) {
                case "user":
                    console.log("用户");
                    break;
                case "level":
                    console.log("等级");
                    break;
                case "log":
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
                    break;
            }
        }

        let DROP_MENU = reactive({});
        return {
            handlerLog,
            headerMenu,
        };
    },
});
</script>

<style scoped>
.header-tool {
    width: 270px;
    height: 100%;
    display: inline-flex;
    align-items: center;
    /*background-color: yellow;*/
}

.user-icon {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #c9cdd4;
    border: none;
}
</style>
