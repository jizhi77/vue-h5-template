<template>
  <div class="page-layout-wrap">
    <router-view />
    <van-tabbar
      v-model="active"
      active-color="#F96B3F"
      inactive-color="#84888F"
      safe-area-inset-bottom
      v-if="!$route.fullPath.includes('active')"
    >
      <van-tabbar-item replace to="/manage" name="manage">
        <img
          slot="icon"
          slot-scope="props"
          :src="
            require('@/images/tabbar/manage' +
              (props.active ? '-active' : '') +
              '.png')
          "
        />
        <span>推广管理</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/history" name="history">
        <img
          slot="icon"
          slot-scope="props"
          :src="
            require('@/images/tabbar/history' +
              (props.active ? '-active' : '') +
              '.png')
          "
        />
        <span>推广记录</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" name="my">
        <img
          slot="icon"
          slot-scope="props"
          :src="
            require('@/images/tabbar/my' +
              (props.active ? '-active' : '') +
              '.png')
          "
        />
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
      active: "manage"
    };
  },

  watch: {
    $route: function() {
      this.active = this.$route.fullPath.replace("/", "");
    }
  },
};
</script>
