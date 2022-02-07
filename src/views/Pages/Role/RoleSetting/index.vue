<!--样例模板-->
<template>
    <container-box title="权限控制" subtitle="切换角色">
        <!-- 当前角色 -->
        <a-typography :style="{ marginTop: '-40px' }">
            <a-typography-title
                >当前身份: {{ identity }}
                <a-switch type="round" v-model="value" @change="handlerChange" checked-value="yes" unchecked-value="no">
                    <template #checked>开启管理员模式</template>
                    <template #unchecked>关闭管理员切换为普通</template>
                </a-switch></a-typography-title
            >
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
    </container-box>
</template>
<script>
import { mapState } from "vuex";
// eslint-disable-next-line no-unused-vars
import { Modal } from "@arco-design/web-vue";
export default {
    name: "RoleSetting",
    computed: {
        ...mapState("user", ["identity"]),
    },
    data() {
        return {
            value: "yes",
        };
    },
    methods: {
        handlerChange(val) {
            console.log("变化了", val);
        },
    },
};
</script>
