<template>
  <div class="login-container">
    <el-card
      class="login-card"
      shadow="hover"
    >
      <div
        slot="header"
        class="clearfix"
      >
        <span>请登录</span>
      </div>
      <el-form
        label-width="60px"
        @submit.native.prevent="login"
        :model="model"
        ref="model"
      >
        <el-form-item
          label="用户名:"
          prop="username"
        >
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密 码:"
          prop="password"
        >
          <el-input
            type="password"
            v-model="model.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item style="margin-right:3rem">
          <el-button
            type="primary"
            native-type="submit"
          >登录</el-button>
          <el-button @click="resetForm('model')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div class="footer-icp">
      <a href="http://beian.miit.gov.cn">
        <span>鄂ICP备2020016395号-1</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async login() {
      const res = await this.$http.post('login', this.model)
      console.log(res.data);

      //   保持登录
      localStorage.token = res.data.token
      //   跳转首页
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功'
      })

    },
    resetForm(formName) {
      console.log('cao');
      this.$refs[formName].resetFields();
    }
  },
}
</script>

<style scoped>
.footer-icp{
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;

}
.footer-icp a{
  text-decoration: none;
  color: gay;
}
.login-container {
  width: 100%;
  height: 100%;
  background: url(http://localhost:5000/uploads/6b27ca37f725c0b11fbceef869602d53)
    no-repeat center;
  position: relative;
}

.login-card {
  width: 25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  opacity: 0.7;
  text-align: center;
}
</style>