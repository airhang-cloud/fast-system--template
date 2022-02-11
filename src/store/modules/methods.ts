import { appService } from "@/mock_v1";
import axios from "axios";
import { setToken, setRoute, setCurUser, setCurIdentity } from "@/utils";

export default {
    production: appService.getUserInfo,
    development: async (val: any) => {
        return await axios.post("/api/login", val);
    },
    login: (token: any, route: any, user: any, identity: any) => {
        setToken(token);
        setRoute(route);
        setCurUser(user);
        setCurIdentity(identity);
    },
};
