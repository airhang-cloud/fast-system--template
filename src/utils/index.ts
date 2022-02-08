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
