<template>
    <a-menu
        :accordion="!0"
        v-if="!item.meta.hide && checkIdentity(item)"
        :default-open-keys="openKeysArr(targetArr)"
        :selected-keys="targetArr"
        :style="{ width: '100%' }"
        @menuItemClick="onClickMenuItem"
    >
        <a-menu-item v-if="!checkNodes(item)" :key="item.path">
            <component :is="item.meta.icon" />
            {{ item.meta.title }}
        </a-menu-item>
        <a-sub-menu v-if="checkNodes(item)" :key="item.path">
            <template #title>
                <span>
                    <component :is="item.meta.icon" />
                    {{ item.meta.title }}
                </span>
            </template>
            <Item v-for="ele in item.children" :item="ele" :key="ele" :parents="item" />
        </a-sub-menu>
    </a-menu>
</template>

<script>
import Item from "./NavItem.vue";
import { defineComponent, ref, watch } from "vue";
import { routes } from "../../../router";
import { useStore } from "vuex";

export default defineComponent({
    name: "Nav",
    props: {
        //节点元素
        item: {
            type: Object,
            default: () => {
                return {};
            },
        },
        //选中元素
        selectArr: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    components: { Item },
    setup(props, ctx) {
        let store = useStore();
        let { identity } = store.state.user;
        const collapsed = ref(false);
        let targetArr = ref(props.selectArr);
        watch(
            () => props.selectArr,
            // eslint-disable-next-line no-unused-vars
            (x, y) => {
                targetArr.value = x;
            }
        );
        const onCollapse = () => {
            collapsed.value = !collapsed.value;
        };

        function checkIdentity(item) {
            // eslint-disable-next-line no-prototype-builtins
            // if (!item.hasOwnProperty("identity")) return true;
            return item.meta.identity.includes(identity);
        }

        function addPath(parents, node) {
            return `${parents}/${node}`;
        }

        function checkNodes(el) {
            if (el.__proto__ === Object.prototype) {
                // eslint-disable-next-line no-prototype-builtins
                return el.hasOwnProperty("children");
            }
        }

        function openKeysArr(value) {
            return new Array(`/${value[0].split("/")[1]}`);
        }

        return {
            collapsed,
            onCollapse,
            onClickMenuItem(key) {
                // console.log(key);
                ctx.emit("selectNode", { path: key });
            },
            addPath,
            routes,
            checkNodes,
            targetArr,
            openKeysArr,
            checkIdentity,
        };
    },
});
</script>
