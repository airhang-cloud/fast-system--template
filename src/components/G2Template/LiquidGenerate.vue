<script>
import { defineComponent, onMounted } from "@vue/runtime-core";
import { Liquid } from "@antv/g2plot";

export default defineComponent({
    name: "index",
    setup() {
        onMounted(() => {
            const liquidPlot = new Liquid("container2", {
                percent: 0.25,
                shape: "circle",
                outline: {
                    border: 4,
                    distance: 8,
                },
                wave: {
                    length: 128,
                },
            });

            liquidPlot.render();
        });
    },
});
</script>
<template>
    <div id="container2" class="rateSty animate__animated animate__fadeIn animate__faster animate__zoomIn" />
</template>
