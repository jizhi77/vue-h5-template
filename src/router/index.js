import Vue from "vue";
import VueRouter from "vue-router";

import my from "./modules/my";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home"  */ "@/views/Home")
  },
  my
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
