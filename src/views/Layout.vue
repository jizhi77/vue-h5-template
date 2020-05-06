<template>
  <div class="page-layout-wrap">
    <router-view />
    <van-tabbar
      v-model="active"
      safe-area-inset-bottom
      v-if="!$route.fullPath.includes('active')"
    >
      <van-tabbar-item replace to="/" name="home" icon="home-o">
        <span>主页</span>
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/message"
        name="message"
        badge="5"
        icon="chat-o"
      >
        <span>消息</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" name="my" icon="contact">
        <span>我的信息</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  name: "Layout",

  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },

  data() {
    return {
      active: "home"
    };
  },

  watch: {
    $route: function() {
      this.active = this.$route.fullPath.replace("/", "");
      if (this.active === "") this.active = "home";
    }
  },

  mounted() {
    document.body.addEventListener(
      "touchmove",
      function(e) {
        e.preventDefault();
      },
      { passive: false }
    );
  }
};
</script>
