<template>
    <div>
        <router-view />
    </div>
</template>
<script setup></script>
<style lang="less">
.right-flat {
    text-align: left;
}

.container-box {
    width: 100%;
    height: 100%;
}

.default-box {
    width: 100%;
    height: 99vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // background-color: #bdbdbd;
}

.default-box img {
    display: inline-block;
    width: 700px;
    height: auto;
}

.arco-input-wrapper {
    border: 1px solid #d8d8d8;
}

.icon-default {
    font-size: 22px;
}

.rateSty {
    width: 250px;
    height: 250px;
    margin: 0 auto;
}

.padding-box {
    background-color: #fafafa;
    padding: 0 0 0 8px;
    box-sizing: border-box;
}

.pagination-center {
    justify-content: flex-end;
}

#nprogress .bar {
    background: #156dff !important; //自定义颜色
}
</style>
