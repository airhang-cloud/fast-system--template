<template>
    <div id="container" />
</template>

<script>
import { Column } from "@antv/g2plot";

export default {
    name: "index",
    props: {
        data: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    data() {
        return { list: [] };
    },
    mounted() {
        let that = this;
        const stackedColumnPlot = new Column("container", {
            data: that.data,
            isGroup: true,
            xField: "月份",
            yField: "月均降雨量",
            seriesField: "name",
            /** 设置颜色 */
            //color: ['#1ca9e6', '#f88c24'],
            /** 设置间距 */
            // marginRatio: 0.1,
            label: {
                // 可手动配置 label 数据标签位置
                position: "middle", // 'top', 'middle', 'bottom'
                // 可配置附加的布局方法
                layout: [
                    // 柱形图数据标签位置自动调整
                    { type: "interval-adjust-position" },
                    // 数据标签防遮挡
                    { type: "interval-hide-overlap" },
                    // 数据标签文颜色自动调整
                    { type: "adjust-color" },
                ],
            },
        });
        stackedColumnPlot.render();
    },
};
</script>

<style></style>
