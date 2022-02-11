interface Mock {
    token: string;
    route: Array<any>;
}

export const mock: Mock = {
    token: "AZXCVFH1269723GHSDSTRYREY6R",
    route: [
        {
            path: "/",
            name: "主包",
            component: "Home",
            redirect: "/dashboard",
            children: [
                {
                    path: "/about",
                    name: "About",
                    meta: {
                        title: "关于",
                        icon: "icon-link",
                        hide: true,
                        identity: ["admin", "user1"],
                    },
                },
                {
                    path: "/dashboard",
                    name: "dashboard",
                    meta: {
                        title: "面板中心",
                        icon: "IconHome",
                        identity: ["admin", "user1"],
                    },
                },
                {
                    path: "/mine",
                    name: "mine",
                    redirect: "/mystars",
                    meta: {
                        title: "个人中心",
                        icon: "icon-user",
                        identity: ["admin", "user1"],
                    },
                    children: [
                        {
                            path: "mystars",
                            name: "mystars",
                            meta: {
                                title: "我的星星",
                                icon: "",
                            },
                        },
                        {
                            path: "myproject",
                            name: "myproject",
                            meta: {
                                title: "我的工程",
                                icon: "",
                            },
                        },
                        {
                            path: "myInfo",
                            name: "myInfo",
                            meta: {
                                title: "我的信息",
                                icon: "",
                            },
                        },
                    ],
                },
            ],
        },
        {
            path: "/login",
            name: "Login",
        },
    ],
};
