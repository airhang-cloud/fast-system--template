<template>
    <container-box title="个人中心" subtitle="我的信息">
        <a-timeline>
            <a-timeline-item label="2017-03-10" dotColor="#00B42A">The first milestone </a-timeline-item>
            <a-timeline-item label="2018-05-22">The second milestone</a-timeline-item>
            <a-timeline-item label="2020-06-22" dotColor="#F53F3F">
                The third milestone
                <IconExclamationCircleFill :style="{ color: 'F53F3F', fontSize: '12px', marginLeft: '4px' }" />
            </a-timeline-item>
            <a-timeline-item label="2020-09-30" dotColor="#C9CDD4">The fourth milestone </a-timeline-item>
        </a-timeline>
    </container-box>
</template>

<script>
import { IconExclamationCircleFill } from "@arco-design/web-vue/es/icon";
export default {
    name: "MyInfo",
    components: { IconExclamationCircleFill },
};
</script>

<style scoped></style>
