<template>
  <div class="page-home-wrap">
    <h4>Welcome U, my Friend</h4>
    <!--        <div class="taichi"></div>-->
    <div>NODE_ENV:{{ NODE_ENV }}</div>
    <div>VUE_APP_NAME:{{ VUE_APP_NAME }}</div>
    <div>NAME：{{ NAME }}</div>
  </div>
</template>

<script>
import { CellGroup, Cell } from "vant";

export default {
  name: "Home",
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  },

  data() {
    return {
      NODE_ENV: process.env.NODE_ENV,
      VUE_APP_NAME: process.env.VUE_APP_NAME,
      NAME: process.env.foo
    };
  }
};
</script>

<style lang="less" scoped>
.page-home-wrap {
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.taichi {
  display: flex; /*弹性盒模型*/
  align-items: center;
  width: 200px;
  height: 200px;
  background: linear-gradient(#000 50%, #fff 50%);
  margin: 100px auto;
  border-radius: 50%;
}

/*利用伪元素来绘制两个小圆*/
.taichi::before,
.taichi::after {
  display: block;
  content: "";
  width: 50%;
  height: 50%;
  border-radius: 50%;
}

.taichi::before {
  background: radial-gradient(#000 25%, #fff 25%);
  animation: change 1s infinite alternate linear; /*动画名称 间隔 不停播 反方向也缓慢变*/
  transform-origin: 0 50%; /*把中心点坐标从正中间变成左中*/
}

/*右边动画提前一秒，就能达到左小右大的交叉效果*/
.taichi::after {
  background: radial-gradient(#fff 25%, #000 25%);
  animation: change 1s infinite alternate linear; /*动画名称 间隔 不停播 反方向也缓慢变 匀速播*/
  animation-delay: -1s;
  transform-origin: 100% 50%;
}

/*定义动画 从小变大 帧 动画不是匀速播*/
@keyframes change {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1.5);
  }
}
</style>
