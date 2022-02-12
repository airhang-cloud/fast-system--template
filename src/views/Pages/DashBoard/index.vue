<template>
    <container-box title="面板中心" subtitle="数据详情">
        <a-divider orientation="left"><h3>数据分析</h3></a-divider>
        <a-row class="grid-demo" :gutter="24">
            <a-col v-for="i in adList" :key="i" :xs="24" :sm="24" :md="8" :lg="8" :xl="8" :xxl="8">
                <a-card :style="{ width: '100%' }" :title="i.label" class="animate__animated animate__fadeIn animate__faster animate__zoomIn" hoverable>
                    <template #extra>
                        <a-link>More</a-link>
                    </template>
                    <a-statistic :title="i.title" :value="i.count" :precision="2" :value-from="0" animation>
                        <template #prefix>
                            <component :is="i.commponent" />
                        </template>
                        <template #suffix>{{ i.int }}</template>
                    </a-statistic>
                    <br />
                    {{ i.level }}
                </a-card>
            </a-col>
        </a-row>
        <!-- G2专区 -->
        <a-row class="grid-demo top-16" :gutter="24">
            <a-col v-for="el in comList2" :key="el" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12">
                <component :is="el.com" />
            </a-col>
        </a-row>
        <ColumGenerateVue class="top-16" :data="list" />
        <!-- G2专区 -->
        <a-divider class="top-16" orientation="left"><h3>图形分析</h3></a-divider>
        <a-row class="grid-demo" :gutter="24">
            <a-col v-for="el in comList" :key="el" :xs="24" :sm="24" :md="8" :lg="8" :xl="8" :xxl="8">
                <component :is="el.com" :data="Options[el.options]" />
            </a-col>
        </a-row>
        <SankeyGenerate />
    </container-box>
</template>

<script>
// 组件封装不完整，暂且局部注册引入，有空再封装
import ColumGenerateVue from "@/components/G2Template/ColumGenerate.vue";
import GaugeGenerateVue from "@/components/G2Template/GaugeGenerate.vue";
import LiquidGenerateVue from "@/components/G2Template/LiquidGenerate.vue";
import RadarGenerateVue from "@/components/G2Template/RadarGenerate.vue";
import PieGenerateVue from "@/components/G2Template/PieGenerate.vue";
import SankeyGenerate from "@/components/G2Template/SankeyGenerate";
import BarGenerate from "@/components/G2Template/BarGenerate";

export default {
    name: "index",
    data() {
        return {
            adList: [
                {
                    label: "操作记录",
                    title: "更新次数",
                    count: 36,
                    int: "",
                    commponent: "icon-arrow-rise",
                    level: "中等",
                },
                {
                    label: "使用记录",
                    title: "下载次数",
                    count: 0,
                    commponent: "icon-arrow-fall",
                    int: "",
                    level: "较低",
                },
                {
                    label: "用户访问",
                    title: "访问次数",
                    count: 105,
                    commponent: "icon-arrow-fall",
                    int: "",
                    level: "较低",
                },
            ],
            list: [
                {
                    name: "London",
                    月份: "Jan.",
                    月均降雨量: 18.9,
                },
                {
                    name: "London",
                    月份: "Feb.",
                    月均降雨量: 28.8,
                },
                {
                    name: "London",
                    月份: "Mar.",
                    月均降雨量: 39.3,
                },
                {
                    name: "London",
                    月份: "Apr.",
                    月均降雨量: 81.4,
                },
                {
                    name: "London",
                    月份: "May",
                    月均降雨量: 47,
                },
                {
                    name: "London",
                    月份: "Jun.",
                    月均降雨量: 20.3,
                },
                {
                    name: "London",
                    月份: "Jul.",
                    月均降雨量: 24,
                },
                {
                    name: "London",
                    月份: "Aug.",
                    月均降雨量: 35.6,
                },
                {
                    name: "Berlin",
                    月份: "Jan.",
                    月均降雨量: 12.4,
                },
                {
                    name: "Berlin",
                    月份: "Feb.",
                    月均降雨量: 23.2,
                },
                {
                    name: "Berlin",
                    月份: "Mar.",
                    月均降雨量: 34.5,
                },
                {
                    name: "Berlin",
                    月份: "Apr.",
                    月均降雨量: 99.7,
                },
                {
                    name: "Berlin",
                    月份: "May",
                    月均降雨量: 52.6,
                },
                {
                    name: "Berlin",
                    月份: "Jun.",
                    月均降雨量: 35.5,
                },
                {
                    name: "Berlin",
                    月份: "Jul.",
                    月均降雨量: 37.4,
                },
                {
                    name: "Berlin",
                    月份: "Aug.",
                    月均降雨量: 42.4,
                },
            ],
            Options: {
                radar: [
                    { name: "G2", star: 10371 },
                    { name: "G6", star: 7380 },
                    { name: "F2", star: 7414 },
                    { name: "L7", star: 2140 },
                    { name: "X6", star: 660 },
                    { name: "AVA", star: 885 },
                    { name: "G2Plot", star: 1626 },
                ],
            },
            comList: [
                { com: "GaugeGenerateVue", options: null },
                { com: "LiquidGenerateVue", options: null },
                { com: "RadarGenerateVue", options: "radar" },
            ],
            comList2: [{ com: "PieGenerateVue" }, { com: "BarGenerate" }],
        };
    },
    components: { ColumGenerateVue, GaugeGenerateVue, LiquidGenerateVue, RadarGenerateVue, PieGenerateVue, SankeyGenerate, BarGenerate },
    mounted() {},
};
</script>

<style scoped></style>
