<template>
    <container-box title="相关外链" subtitle="友情链接">
        <a-typography>
            <a-typography-title underline v-for="(el, index) in lineData" :heading="index + 1" :key="el">
                <component :is="el.icon" />
                <a :href="el.href" target="blank">{{ el.label }}</a>
            </a-typography-title>
        </a-typography>
        <a-divider class="top-16" orientation="left">
            <h3><icon-lark-color /> 快捷扫码区</h3>
        </a-divider>
        <a-image width="200" title="扫码关注公众号" description="每天9.30为你提供早读文章" footerPosition="outer" style="margin-left: 67px; vertical-align: top" :src="img" />
    </container-box>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";

let lineData = reactive([
    {
        label: "Github地址",
        href: "https://github.com/airhang-cloud/fast-system--template",
        icon: "icon-github",
    },
    {
        label: "Gitee地址",
        href: "https://gitee.com/huang_min_hang/fast-system-template",
        icon: "icon-github",
    },
    {
        label: "常用技术库分享(该网站访问加载较慢,后续优化,请见谅)",
        href: "https://airhang.ltd",
        icon: "icon-link",
    },
    {
        label: "CSDN",
        href: "https://blog.csdn.net/weixin_44971067/article/details/122867641?spm=1001.2014.3001.5501",
        icon: "icon-command",
    },
    {
        label: "视频演示",
        href: "https://www.bilibili.com/video/BV1VF411n7X6?spm_id_from=333.1007.top_right_bar_window_history.content.click",
        icon: "icon-live-broadcast",
    },
    {
        label: "公众号在线",
        // eslint-disable-next-line prettier/prettier
        href:
            "https://mp.weixin.qq.com/s?__biz=Mzg4MjE4MzMxMQ==&amp;mid=2247485312&amp;idx=1&amp;sn=03fd23d6a16b055edbaa2dea52527487&amp;chksm=cf5bda60f82c53761d8d3b9e6607c022549945864f26c93db9bfef7684ce05cf07dce64a5736&token=561036573&lang=zh_CN#rd",
        icon: "icon-wechat",
    },
]);
let img = ref(require("@/assets/qrcode/gzh.jpg"));
</script>

<style scoped>
a {
    text-decoration: none;
    color: #000;
    margin-left: 16px;
}
</style>
