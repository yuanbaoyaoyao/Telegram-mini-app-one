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
    {
        path: '/order',
        meta: {
            title: "订单",
            hidden: true,
        },
        component: () => import('../views/OrderPage.vue'),
    },
    {
        path: '/checkout',
        meta: {
            title: "结账",
            hidden: true,
        },
        component: () => import('../views/Checkout.vue'),
    },
    {
        path: '/newCard',
        meta: {
            title: "新卡",
            hidden: true,
        },
        component: () => import('../views/NewCard.vue'),
    },
    {
        path: '/shippingInfo',
        meta: {
            title: "购物信息",
            hidden: true,
        },
        component: () => import('../views/ShippingInfo.vue'),
    },
]

const router = createRouter({
    //路由模式带“#”号
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router;