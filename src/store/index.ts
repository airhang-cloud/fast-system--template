import { createStore } from "vuex";

import user from "@/store/modules/user";
import route from "@/store/modules/route";

export default createStore({
    // state: {
    // },
    // mutations: {
    // },
    // actions: {
    // },
    modules: {
        user,
        route,
    },
});
