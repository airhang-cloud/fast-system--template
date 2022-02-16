export function setToken(token: string) {
    localStorage.setItem("ez-admin-token", token);
}

export function getToken() {
    return localStorage.getItem("ez-admin-token");
}

export function setRoute(routes: Array<any>) {
    localStorage.setItem("ez-admin-routes", JSON.stringify(routes));
}

export function setMetaTitle(title: string) {
    sessionStorage.setItem("ez-admin-nav-title", title);
}

export function getMetaTitle() {
    return sessionStorage.getItem("ez-admin-nav-title");
}

export function setCurSelect(nav: string) {
    sessionStorage.setItem("ez-admin-nav", nav);
}

export function getCurSelect(): string {
    return sessionStorage.getItem("ez-admin-nav") || JSON.stringify(["/dashboard"]);
}

export function setCurUser(user: string) {
    localStorage.setItem("ez-admin-nav-user", user);
}

export function getCurUser(): string {
    return localStorage.getItem("ez-admin-nav-user") || "EZ-Admin";
}

export function setCurIdentity(identity: string) {
    localStorage.setItem("ez-admin-nav-identity", identity);
}

export function getCurIdentity(): string {
    return localStorage.getItem("ez-admin-nav-identity") || "admin";
}

export function putCurIdentity() {
    localStorage.setItem("ez-admin-nav-identity", "user2");
}

export function putCurIdentity2Admin() {
    localStorage.setItem("ez-admin-nav-identity", "admin");
}

export function clearConfig() {
    localStorage.clear();
    sessionStorage.clear();
}

export function curSysteType(type: string, flag: boolean) {
    if (type === "set") sessionStorage.setItem("isPc", JSON.stringify(flag));
    else if (type === "get") return sessionStorage.getItem("isPc");
}

/**
 * @description: 移动端/PC端
 * */
export function checkPCMobile(cb: any) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        cb({ isPc: false });
    } else {
        cb({ isPc: true });
    }
}

/**
 * @description: 获取url参数,特别处理,代码较粗糙,插眼优化
 * */

export function getQueryString(name: string, search: string, success: any, fail: any) {
    search = search || window.location.search.substr(1) || window.location.hash.split("?")[1];
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    try {
        let r = search.match(reg);
        let val;
        if (r != null) val = unescape(r[2]);
        else val = null;
        success(val);
    } catch (error) {
        fail({ type: "error", msg: "参数错误" });
    }
}
