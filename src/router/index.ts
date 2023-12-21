import {
    createWebHashHistory,
    createRouter
} from "vue-router";

export const constantRoutes = [
    {
        path: '/',
        meta: {
            title: "首页",
            hidden: true,
        },
        component: () => import('../views/Home.vue'),
    },
]

const router = createRouter({
    //路由模式带“#”号
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router;