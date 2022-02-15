<template>
    <div id="main">
        <div className="fof">
            <h1 class="msgSty">{{ state }}</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: "template",
    data() {
        return {
            state: "设立状态",
        };
    },
};
</script>

<style>
@import url("../style/index.css");
</style>
