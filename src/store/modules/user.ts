import axios from "axios";
import { setToken, setRoute, setCurUser, getCurUser, setCurIdentity, getCurIdentity } from "@/utils";
import { Message } from "@arco-design/web-vue";

export default {
    state: {
        user: getCurUser(),
        identity: getCurIdentity(),
    },
    mutations: {
        GET_CUR_USR: (state: any, val: any) => {
            state.user = val;
        },
    },
    actions: {
        handlerlogin: async (ctx: any, val: any) => {
            const { data } = await axios.post("/api/login", val);
            const { token, route, user, identity } = data.data;
            if (Number(data.code) === 200) {
                setToken(token);
                setRoute(route);
                setCurUser(user);
                setCurIdentity(identity);
                return {
                    login: true,
                    msg: data.msg,
                    user: user,
                };
            } else Message.error(data.msg);
        },
    },
    namespaced: true,
};
