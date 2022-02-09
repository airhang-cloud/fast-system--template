<template>
    <div id="container1" class="rateSty animate__animated animate__fadeIn animate__faster animate__zoomIn" />
</template>

<script>
import { Gauge } from "@antv/g2plot";

export default {
    name: "index",
    data() {
        return { list: [] };
    },
    mounted() {
        const gauge = new Gauge("container1", {
            percent: 0.75,
            range: {
                color: "#30BF78",
                width: 16,
            },
            indicator: {
                pointer: {
                    style: {
                        stroke: "#D0D0D0",
                    },
                },
                pin: {
                    style: {
                        stroke: "#D0D0D0",
                    },
                },
            },
            axis: {
                label: {
                    formatter(v) {
                        return Number(v) * 100;
                    },
                },
                subTickLine: {
                    count: 3,
                },
            },
            statistic: {
                content: {
                    formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
                    style: {
                        color: "rgba(0,0,0,0.65)",
                        fontSize: 16,
                    },
                },
            },
        });

        gauge.render();
    },
};
</script>

<style></style>
