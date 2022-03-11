<template>
    <div id="scene">
        <div data-depth="0.6">
            <img class="cover" src="../../../assets/Welcome.gif" alt="" />
        </div>
    </div>
</template>

<script>
import Parallax from "parallax-js";
export default {
    name: "index",
    mounted() {
        var scene = document.getElementById("scene");
        new Parallax(scene);
    },
};
</script>

<style scoped>
.cover {
    width: 100%;
    height: 450px;
    object-fit: cover;
}
</style>
