<template>
  <div class="page-message-index-wrap">
    <h3 style="text-align: center">消息列表</h3>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>
<script>
import { List, Cell } from "vant";

export default {
  name: "Message",
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  data() {
    return {
      list: [],
      finished: true,
      loading: false
    };
  },

  methods: {
    onLoad() {
      this.loading = false;

      this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      this.loading = false;
    }
  },

  mounted() {
    this.loading = false;

    this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.loading = false;
  }
};
</script>
<style>
.page-message-index-wrap {
}
</style>
