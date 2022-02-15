<script lang="ts">
import template from "@/views/Pages/Result/Template/index.vue";
import "../style/tips.css";

export default {
    extends: template,
    name: "Tips",
    data() {
        return {
            state: "系统暂未完全兼容小屏幕,建议您再浏览器端用正常窗口大小打开查看",
        };
    },
};
</script>
