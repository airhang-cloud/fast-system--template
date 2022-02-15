import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/EntryMain.vue";
import { getToken, setCurSelect } from "@/utils";
import NProgress from "@/utils/progress";

// 导入模块路由
import { relateRoute } from "./BussinessRouter/ModuleRelate";

export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "主包",
        component: Home,
        redirect: "/dashboard",
        children: [
            {
                path: "/about",
                name: "About",
                meta: {
                    title: "关于",
                    icon: "icon-link",
                    identity: ["admin", "user1"],
                    hide: true,
                },
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
            },
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: "面板中心",
                    icon: "IconHome",
                    identity: ["admin", "user1", "user2"],
                },
                component: () => import("../views/Pages/DashBoard/index.vue"),
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
                component: () => import("../views/Pages/Mine/index.vue"),
                children: [
                    {
                        path: "mystars",
                        name: "mystars",
                        meta: {
                            title: "我的星星",
                            officalTitle: "个人中心",
                            icon: "",
                        },
                        component: () => import("../views/Pages/Mine/MyStars/index.vue"),
                    },
                    {
                        path: "myproject",
                        name: "myproject",
                        meta: {
                            title: "我的工程",
                            officalTitle: "个人中心",
                            icon: "",
                        },
                        component: () => import("../views/Pages/Mine/MyProject/index.vue"),
                    },
                    {
                        path: "myInfo",
                        name: "myInfo",
                        meta: {
                            title: "我的信息",
                            officalTitle: "个人中心",
                            icon: "",
                        },
                        component: () => import("../views/Pages/Mine/MyInfo/index.vue"),
                    },
                ],
            },
            {
                path: "/role",
                name: "role",
                redirect: "/role-setting",
                meta: {
                    title: "权限控制",
                    icon: "icon-settings",
                    identity: ["admin", "user1", "user2"],
                },
                component: () => import("../views/Pages/Role/index.vue"),
                children: [
                    {
                        path: "role-setting",
                        name: "role-setting",
                        meta: {
                            title: "切换角色",
                            officalTitle: "权限控制",
                            icon: "",
                        },
                        component: () => import("../views/Pages/Role/RoleSetting/index.vue"),
                    },
                ],
            },
            {
                path: "/info",
                name: "info",
                redirect: "/infosystem",
                meta: {
                    title: "系统信息",
                    icon: "icon-apps",
                    identity: ["admin", "user1"],
                },
                component: () => import("../views/Pages/Infos/index.vue"),
                children: [
                    {
                        path: "infosystem",
                        name: "infosystem",
                        meta: {
                            title: "系统介绍",
                            officalTitle: "系统信息",
                            icon: "",
                        },
                        component: () => import("../views/Pages/Infos/InfoSystem/index.vue"),
                    },
                ],
            },
            ...relateRoute["config"],
        ],
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: "登录",
        },
        component: () => import("../views/Pages/Login/index.vue"),
    },
    {
        path: "/404",
        name: "404",
        meta: {
            title: "404",
        },
        component: () => import(/* webpackChunkName: "Result" */ "../views/Pages/Result/404/index.vue"),
    },
    {
        path: "/tips",
        name: "Tips",
        meta: {
            title: "建议",
        },
        component: () => import(/* webpackChunkName: "Result" */ "../views/Pages/Result/Tips/index.vue"),
    },
    {
        path: "/500",
        name: "500",
        meta: {
            title: "500",
        },
        component: () => import(/* webpackChunkName: "Result" */ "../views/Pages/Result/500/index.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
    /**业务路由可拆包放入**/
});
router.beforeEach((from, to, next) => {
    let tit = from.meta.title;
    NProgress.start();
    if (getToken() != null) {
        setCurSelect(JSON.stringify([from.fullPath]));
        next();
    } else {
        if (from.fullPath === "/login") {
            next();
        } else next(`/login`);
    }
    document.title = JSON.parse(JSON.stringify(tit));
});
router.afterEach(() => {
    NProgress.done();
});
export default router;
