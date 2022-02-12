<script>
import { defineComponent, onMounted } from "@vue/runtime-core";
import { Pie } from "@antv/g2plot";

export default defineComponent({
    name: "index",
    setup() {
        onMounted(() => {
            let data = [
                { type: "分类一", value: 27 },
                { type: "分类二", value: 25 },
                { type: "分类三", value: 18 },
                { type: "分类四", value: 15 },
                { type: "分类五", value: 10 },
                { type: "其他", value: 5 },
            ];
            const piePlot = new Pie("container5", {
                appendPadding: 10,
                data,
                angleField: "value",
                colorField: "type",
                radius: 1,
                innerRadius: 0.6,
                label: {
                    type: "inner",
                    offset: "-50%",
                    content: "{value}",
                    style: {
                        textAlign: "center",
                        fontSize: 14,
                    },
                },
                interactions: [{ type: "element-selected" }, { type: "element-active" }],
                statistic: {
                    title: false,
                    content: {
                        style: {
                            whiteSpace: "pre-wrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        },
                        content: "AntV\nG2Plot",
                    },
                },
            });
            piePlot.render();
        });
    },
});
</script>

<template>
    <div id="container5" class="rateSty animate__animated animate__fadeIn animate__faster animate__zoomIn" />
</template>

<style scoped>
.rateSty {
    width: 100%;
    height: 360px;
    margin: 0 auto;
}
</style>
