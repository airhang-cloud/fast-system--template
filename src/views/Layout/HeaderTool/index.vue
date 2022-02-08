<template>
    <div class="header-tool">
        <!--消息-->
        <a-badge :count="9" :max-count="99" class="animate__animated animate__fadeInUp animate__delay-.5s">
            <a-avatar shape="square">
                <icon-notification class="icon-default" />
            </a-avatar>
        </a-badge>
        <a-divider direction="vertical" />
        <!--系统设置-->
        <a-dropdown @select="handlerLog($event, 0)" class="animate__animated animate__flipInX">
            <icon-settings class="icon-default animate__animated animate__fadeInUp animate__delay-1s" />
            <template #content>
                <a-doption v-for="el in headerMenu.setting" :value="el.key" :key="el.key">{{ el.label }}</a-doption>
            </template>
        </a-dropdown>
        <a-divider direction="vertical" />
        <!--头像个人数据详情-->
        <a-dropdown @select="handlerLog($event, 1)" class="animate__animated animate__flipInX">
            <img class="user-icon animate__animated animate__fadeInUp animate__delay-1s" />
            <template #content>
                <a-doption value="user">用户: {{ user }}</a-doption>
                <a-doption value="level">等级: Dsvip</a-doption>
                <a-doption value="log">登出当前账号</a-doption>
            </template>
        </a-dropdown>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { headerMenu, methods } from "./data";
import { useStore } from "vuex";

export default defineComponent({
    name: "index",
    setup() {
        let store = useStore();
        let { user } = store.state.user;
        function handlerLog(val, flag) {
            methods[flag][val]();
        }
        return {
            handlerLog,
            headerMenu,
            user,
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
    justify-content: flex-end;
    box-sizing: border-box;
    padding-right: 45px;
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
