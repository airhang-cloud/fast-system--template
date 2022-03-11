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
            component: () => import(/* webpackChunkName: "ModuleRelate" */ "@/views/Pages/RelateLine/index.vue"),
        },
        {
            path: "/cloud",
            name: "Cloud",
            meta: {
                title: "词语图",
                icon: "icon-link",
                identity: ["admin", "user1"],
            },
            component: () => import(/* webpackChunkName: "ModuleRelate" */ "@/views/Pages/CloudPage/index.vue"),
        },
        {
            path: "/parallax",
            name: "Parallax",
            meta: {
                title: "视觉滚动",
                icon: "icon-link",
                identity: ["admin", "user1"],
            },
            component: () => import(/* webpackChunkName: "ModuleRelate" */ "@/views/Pages/Parallax/index.vue"),
        },
        {
            path: "/threedemo",
            name: "ThreeDemo",
            meta: {
                title: "3D模块",
                icon: "icon-lark-color",
                identity: ["admin", "user1"],
                hide: true,
            },
            component: () => import(/* webpackChunkName: "ModuleRelate" */ "@/views/Pages/ThreeModule/index.vue"),
        },
        {
            path: "/editormd",
            name: "EditorMd",
            meta: {
                title: "富文本使用",
                icon: "icon-pen-fill",
                identity: ["admin", "user1"],
                hide: true,
            },
            component: () => import(/* webpackChunkName: "ModuleRelate" */ "@/views/Pages/EditorMd/index.vue"),
        },
    ],
    desc: "相关外联配置模块",
};
