interface Route {
    config: any;
    desc: string;
}

export const relateRoute: Route = {
    config: [
        {
            path: "/relateline",
            name: "RelateLine",
            meta: {
                title: "相关外链",
                icon: "icon-link",
                identity: ["admin", "user1"],
            },
            component: () => import("@/views/Pages/RelateLine/index.vue"),
        },
    ],
    desc: "相关外联配置模块",
};
