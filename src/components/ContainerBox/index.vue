<template>
    <a-card class="container-box">
        <a-page-header :title="title" :subtitle="subtitle">
            <slot></slot>
        </a-page-header>
    </a-card>
</template>

<script>
export default {
    name: "ContainerBox",
    props: {
        // eslint-disable-next-line vue/require-prop-type-constructor
        subtitle: "",
        // eslint-disable-next-line vue/require-prop-type-constructor
        title: "",
    },
};
</script>
