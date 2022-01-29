import axios from "axios";
import { setToken, setRoute } from "@/utils";
import { Message } from "@arco-design/web-vue";

export default {
    state: {
        user: "airhang",
    },
    mutations: {
        GET_CUR_USR: (state: any, val: any) => {
            state.user = val;
        },
    },
    actions: {
        handlerlogin: async (ctx: any, val: any) => {
            const { data } = await axios.post("/api/login", val);
            if (Number(data.code) === 200) {
                setToken(data.data.token);
                setRoute(data.data.route);
                return {
                    login: true,
                    msg: data.msg,
                };
            } else Message.error(data.msg);
        },
    },
    namespaced: true,
};
