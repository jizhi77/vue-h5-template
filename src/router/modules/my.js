import Layout from "@/views/Layout";

export default {
    path: "/my",
    component: Layout,
    children: [
        {
            path: "",
            component: () => import(/* webpackChunkName: "my" */ "@/views/my"),
            meta: {title: "我的"}
        },
        {
            path: "message",
            name: "myMessage",
            component: () => import("@/views/my/message"),
            meta: {title: "我的信息"}
        },
        {
            path: "upload-face",
            name: "myUploadFace",
            component: () => import("@/views/my/upload"),
            meta: {title: " 上传人脸"}
        }
    ]
}

