import { clearConfig } from "@/utils";

export function loginOut(cb: any) {
    if (cb.__proto__ === Function.prototype) {
        clearConfig();
        cb({ msg: "清除登录信息" });
    } else throw new Error("THE QUERY YOU SHOULD USE FNC");
}
