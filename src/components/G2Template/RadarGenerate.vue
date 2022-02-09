<script>
import { defineComponent, onMounted } from "@vue/runtime-core";
import { Radar } from "@antv/g2plot";

export default defineComponent({
    name: "index",
    props: {
        data: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    // eslint-disable-next-line no-unused-vars
    setup(props, ctx) {
        onMounted(() => {
            const radarPlot = new Radar("container3", {
                data: props.data.map((d) => ({ ...d, star: Math.sqrt(d.star) })),
                xField: "name",
                yField: "star",
                meta: {
                    star: {
                        min: 0,
                        nice: true,
                    },
                },
                area: {},
            });
            radarPlot.render();
        });
    },
});
</script>
<template>
    <div id="container3" class="rateSty animate__animated animate__fadeIn animate__faster animate__zoomIn" />
</template>
