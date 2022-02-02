<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "Item",
    props: {
        item: {
            type: Object,
            default: () => {
                return {};
            },
        },
        parents: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    setup() {
        function addPath(node, parents) {
            return `${parents}/${node}`;
        }
        return {
            addPath,
        };
    },
});
</script>
<template>
    <a-menu-item v-if="!item.meta.hide" class="right-flat" :key="addPath(item.path, parents.path)">
        <!--        <component :is="item.meta.icon"/>-->
        <icon-drag-dot-vertical />
        {{ item.meta.title }}
    </a-menu-item>
</template>
