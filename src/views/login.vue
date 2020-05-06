<template>
  <div class="page-login-wrap">
    <div class="logo-area">
      <!--            <img src="https://cn.vuejs.org/images/logo.png" alt="logo">-->
    </div>
    <van-form @submit="onSubmit" class="form-area">
      <van-field
        v-model="formModel.name"
        label="用户名"
        placeholder="请输入用户名"
        clearable
      ></van-field>
      <van-field
        v-model="formModel.code"
        label="验证码"
        placeholder="请输入验证码"
        clearable
      >
        <template slot="button">
          <van-button size="small" type="info">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 30px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Form, Field, Button } from "vant";

export default {
  name: "Login",

  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },

  data() {
    return {
      formModel: {
        name: "", // 用户名
        code: "" // 短信验证码
      }
    };
  },

  methods: {
    onSubmit() {}
  }
};
</script>
<style scoped lang="less">
.page-login-wrap {
  .logo-area {
    padding: 30px;
    background-color: #1989fa;
    height: 150px;

    img {
      width: 150px;
      height: auto;
      margin: 30px auto;
      display: block;
    }
  }

  .form-area {
    margin-top: 40px;
  }

  // 提交
  .submit-btn {
    margin: 0 40px;
  }
}
</style>
