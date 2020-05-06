import Layout from "@/views/Layout";

export default {
  path: "/message",
  component: Layout,
  children: [
    {
      path: "",
      component: () =>
        import(/* webpackChunkName: "message" */ "@/views/message"),
      meta: { title: "消息主页" }
    }
  ]
};
