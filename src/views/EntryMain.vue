<template>
    <a-layout class="layout-demo">
        <!--菜单-->
        <a-layout-sider hide-trigger collapsible :collapsed="collapsed">
            <div class="logo" />
            <!--导航菜单-->
            <Nav v-for="el in routes[0].children" :item="el" :select-arr="targetArr" @selectNode="onClickMenuItem" />
        </a-layout-sider>
        <!--内容外部-->
        <a-layout>
            <!--内容头部-->
            <a-layout-header class="header-sty">
                <a-button shape="round" @click="onCollapse">
                    <IconCaretRight v-if="collapsed" />
                    <IconCaretLeft v-else />
                </a-button>
                <header-tool />
            </a-layout-header>
            <!--内容内部-->
            <a-layout style="padding: 0 24px">
                <!--面包屑-->
                <!--主试图盒子区域-->
                <a-layout-content>
                    <router-view class="animate__animated animate__fadeIn animate__faster" />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
import router, { routes } from "@/router";
import Nav from "./Layout/Nav";
import HeaderTool from "./Layout/HeaderTool/index";
import { defineComponent, ref, watch, reactive, computed } from "vue";
import { useStore } from "vuex";
import { Message } from "@arco-design/web-vue";
import { setCurSelect, getCurSelect } from "@/utils";
import { service } from "@/utils/request";
import { onResize } from "@/utils/resize";
import { IconCaretRight, IconCaretLeft, IconHome, IconCalendar } from "@arco-design/web-vue/es/icon";

export default defineComponent({
    components: {
        IconCaretRight,
        IconCaretLeft,
        IconHome,
        IconCalendar,
        Nav,
        HeaderTool,
    },
    setup() {
        // service.post("/login").then(res => {
        //   console.log("r",res)
        // })
        const collapsed = ref(false);
        console.log("f", getCurSelect());
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
        let store = useStore();
        console.log("vuex当前用户", store.state.user);
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
});
</script>
<style scoped>
.layout-demo {
    height: 100vh;
    background: var(--color-fill-2);
    /*border: 1px solid var(--color-border);*/
}

.layout-demo :deep(.arco-layout-sider) .logo {
    height: 32px;
    margin: 12px 8px;
    background: rgba(255, 255, 255, 0.2);
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
    background: var(--color-fill-2);
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
    padding: 22px 0;
    /*text-align: center;*/
}

.header-sty {
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
