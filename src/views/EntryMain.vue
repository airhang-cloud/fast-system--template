<template>
    <a-layout class="layout-demo">
        <!--菜单-->
        <a-layout-sider hide-trigger collapsible :collapsed="collapsed">
            <div class="logo">
                <img v-if="!collapsed" class="iconSty" src="@/assets/float1.png" alt="" />
                <img v-else class="navIcon" src="@/assets/Logo.png" alt="" />
            </div>
            <!--导航菜单-->
            <Nav v-for="el in routes[0].children" :key="el" :item="el" :select-arr="targetArr" @selectNode="onClickMenuItem" />
        </a-layout-sider>
        <!--内容外部-->
        <a-layout class="router-box">
            <!--内容头部-->
            <a-layout-header class="header-sty">
                <a-button shape="round" @click="onCollapse">
                    <IconCaretRight v-if="collapsed" />
                    <IconCaretLeft v-else />
                </a-button>
                <header-tool />
            </a-layout-header>
            <!--内容内部-->
            <a-layout>
                <!--面包屑--有空再做-->
                <!--主试图盒子区域-->
                <a-layout-content class="padding-box">
                    <router-view class="animate__animated animate__fadeIn animate__faster content-box" />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
import router, { routes } from "@/router";
import Nav from "./Layout/Nav";
import HeaderTool from "./Layout/HeaderTool/index";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
// eslint-disable-next-line no-unused-vars
import { setCurSelect, getCurSelect, getCurUser, getCurIdentity, checkPCMobile } from "@/utils";
import { onResize } from "@/utils/resize";
import { IconCaretRight, IconCaretLeft } from "@arco-design/web-vue/es/icon";

export default defineComponent({
    name: "index",
    components: {
        IconCaretRight,
        IconCaretLeft,
        Nav,
        HeaderTool,
    },
    setup() {
        const collapsed = ref(false);
        // console.log("CurSelect", getCurSelect());
        let targetArr = ref(JSON.parse(getCurSelect()));
        const onCollapse = () => {
            collapsed.value = !collapsed.value;
        };
        const hideCollapse = () => {
            collapsed.value = true;
        };
        const openCollapse = () => {
            collapsed.value = false;
        };
        onResize((res) => {
            res["width"] < 900 ? hideCollapse() : openCollapse();
        });
        // eslint-disable-next-line no-unused-vars
        let store = useStore();
        // console.log("vuex当前用户", store.state.user);
        return {
            collapsed,
            onCollapse,
            onClickMenuItem(key) {
                const { path } = key;
                targetArr.value = [];
                targetArr.value.push(path);
                setCurSelect(JSON.stringify(targetArr.value));
                router.push(path);
            },
            routes,
            targetArr,
        };
    },
    mounted() {
        this.$notification.info({ content: `欢迎回来,${getCurUser()},当前身份：${getCurIdentity()}`, position: "bottomRight" });
    },
});
</script>
<style scoped>
.layout-demo {
    height: 100vh;
    background: var(--color-fill-2);
    /*border: 1px solid var(--color-border);*/
}

.layout-demo :deep(.arco-layout-sider) .logo {
    height: 60px;
    margin: 2px;
    background: rgba(255, 255, 255);
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
    background: rgba(255, 255, 255);
}

.layout-demo :deep(.arco-layout-header) {
    height: 64px;
    line-height: 64px;
    background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer) {
    height: 48px;
    color: var(--color-text-2);
    font-weight: 400;
    font-size: 14px;
    line-height: 48px;
}

.layout-demo :deep(.arco-layout-content) {
    color: var(--color-text-2);
    font-weight: 400;
    font-size: 14px;
    /*background: var(--color-bg-3);*/
}

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    color: var(--color-black);
    font-size: 16px;
    font-stretch: condensed;
    box-sizing: border-box;
    /* padding: 22px 0; */
    /*text-align: center;*/
}

.header-sty {
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.router-box {
    overflow: hidden;
}
.content-box {
    height: calc(100vh - 60px);
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #fff;
}

.iconSty,
.navIcon {
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.navIcon {
    object-fit: contain;
}
</style>
