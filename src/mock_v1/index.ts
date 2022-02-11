import { mock } from "./service";
interface Data {
    data: any;
}

class MockModule {
    constructor() {}
    // eslint-disable-next-line no-unused-vars
    getUserInfo(val: any) {
        let { user, psw } = val;
        const quick = ["admin", "666666"];
        const res: Data = {
            data: {
                msg: "登录成功",
                code: 200,
                data: {
                    user: "airhang",
                    identity: "admin",
                    ...mock,
                },
            },
        };
        if (quick.includes(user) && quick.includes(psw)) {
            return res;
        } else
            return {
                data: {
                    msg: "登录失败",
                    code: 403,
                },
            };
    }
}

export const appService = new MockModule();
