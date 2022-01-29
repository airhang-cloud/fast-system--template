import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import { setCurSelect } from "@/utils";
import { getToken } from "@/utils";
import "@arco-design/web-vue/dist/arco.css";
import "animate.css";

const EZ = createApp(App);
//独立组件
import { install } from "@/components";

// router.beforeEach((from, to, next) => {
//     console.log(from.fullPath)
//     setCurSelect(JSON.stringify([from.fullPath]))
//     next()
// })

install.forEach((el) => {
    EZ.component(el.name, el);
});

EZ.use(store).use(router).use(ArcoVue).use(ArcoVueIcon).mount("#app");
