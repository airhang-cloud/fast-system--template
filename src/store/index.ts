import { createStore } from "vuex";

import user from "@/store/Modules/user";
import route from "@/store/Modules/route";

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
