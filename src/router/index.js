import Vue from "vue";
import VueRouter from "vue-router";

import my from "./modules/my";
import message from "./modules/message";
import Layout from "@views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import(/* webpackChunkName: "home"  */ "@/views/Home")
      }
    ]
  },
  my,
  message,
  {
    path: "*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: 404  */ "@/views/404")
  }
];

const router = new VueRouter({
  routes
});

export default router;
