import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    title: "方法一：将 .content 的 margin-bottom 设为负数",
    path: "/margin-bottom",
    name: "MarginBottom",
    component: () =>
      import(
        /* webpackChunkName: "margin-bottom" */ "../views/MarginBottom.vue"
      ),
  },
  {
    title: "方法二：将 .footer 的 margin-top 设为负数",
    path: "/margin-top",
    name: "MarginTop",
    component: () =>
      import(/* webpackChunkName: "margin-top" */ "../views/MarginTop.vue"),
  },
  {
    title: "方法三：使用 calc() 设置 .content 的高度",
    path: "/calc",
    name: "Calc",
    component: () => import(/* webpackChunkName: "calc" */ "../views/Calc.vue"),
  },
  {
    title: "方法四：使用 Flexbox 弹性布局（推荐）",
    path: "/flex",
    name: "Flex",
    component: () => import(/* webpackChunkName: "flex" */ "../views/Flex.vue"),
  },
  {
    title: "方法五：使用 Grid 网格布局",
    path: "/grid",
    name: "Grid",
    component: () => import(/* webpackChunkName: "grid" */ "../views/Grid.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export { routes };
export default router;
