import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import "@arco-design/web-vue/dist/arco.css";
import "animate.css";
import VueI18n from "@/language/index";

const EZ = createApp(App);
//独立组件
import { install } from "@/components";

install.forEach((el) => {
    EZ.component(el.name, el);
});

EZ.use(store).use(router).use(ArcoVue).use(ArcoVueIcon).use(VueI18n).mount("#app");
