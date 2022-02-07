<!--样例模板-->
<template>
    <container-box title="权限控制" subtitle="切换角色">
        <!-- 当前角色 -->
        <a-typography :style="{ marginTop: '-40px' }">
            <a-typography-title>当前身份: {{ user }} <a-button type="primary">切换角色</a-button></a-typography-title>
            <a-typography-paragraph>浏览器存储: Cookie、LocalStorage、SessionStorage、IndexedDB、WebSql</a-typography-paragraph>
            <a-typography-paragraph>
                <ul>
                    <li>
                        程序人生
                        <ul>
                            <li>兴趣是最好的导师</li>
                        </ul>
                    </li>
                    <li>坚持不一定会胜利，但能加强你面对困难的毅力</li>
                    <li>多走弯路，让所有路都留下你前行的踏记</li>
                </ul>
            </a-typography-paragraph>
        </a-typography>
        <!-- 角色切换 -->
    </container-box>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "RoleSetting",
    computed: {
        ...mapState("user", ["user"]),
    },
};
</script>
