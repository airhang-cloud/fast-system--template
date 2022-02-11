// import axios from "axios";
import { getCurUser, getCurIdentity } from "@/utils";
import { Message } from "@arco-design/web-vue";
import methods from "./methods";

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
            // const { data } = await axios.post("/api/login", val);
            //@ts-ignore
            const { data } = await methods[process.env.NODE_ENV](val);
            console.log(data);

            if (Number(data.code) === 200) {
                const { token, route, user, identity } = data.data;
                methods["login"](token, route, user, identity);
                return {
                    login: true,
                    msg: data.msg,
                    user: user,
                };
            } else {
                Message.error(data.msg);
            }
        },
    },
    namespaced: true,
};
