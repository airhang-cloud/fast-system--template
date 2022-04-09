<template>
    <div id="scene">
        <div data-depth="0.6">
            <img class="cover" src="../../../assets/dd.png" alt="" />
            <div data-depth="0.9">
                <h1 class="teset">Airhang</h1>
            </div>
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
#scene {
    position: relative;
}
.cover {
    width: 100%;
    height: 450px;
    object-fit: cover;
}
.teset {
    position: absolute;
    top: 30px;
    color: #fff;
    left: 50%;
}
</style>
