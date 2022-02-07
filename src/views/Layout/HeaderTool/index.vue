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
        <a-dropdown @select="handlerLog($event, 0)">
            <a-avatar shape="square" />
            <template #content>
                <a-doption v-for="el in headerMenu.setting" :value="el.key" :key="el.key">{{ el.label }}</a-doption>
            </template>
        </a-dropdown>
        <a-divider direction="vertical" />
        <!--头像个人数据详情-->
        <a-dropdown @select="handlerLog($event, 1)">
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
import { defineComponent } from "vue";
import { headerMenu, methods } from "./data";

export default defineComponent({
    name: "index",
    setup() {
        function handlerLog(val, flag) {
            methods[flag][val]();
        }
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
