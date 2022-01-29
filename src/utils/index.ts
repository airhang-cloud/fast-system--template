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

export function clearConfig() {
    localStorage.clear();
    sessionStorage.clear();
}
