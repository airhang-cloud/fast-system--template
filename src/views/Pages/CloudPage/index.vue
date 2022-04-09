<template>
    <container-box title="词云图" subtitle="">
        <CloudGenerate />
    </container-box>
</template>

<script>
import CloudGenerate from "@/components/G2Template/CloudGenerate.vue";
export default {
    name: "CloudPage",
    components: {
        CloudGenerate,
    },
};
</script>
