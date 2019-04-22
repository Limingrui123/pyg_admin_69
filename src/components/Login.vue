<template>
    <div class="login_container">
        <div class="box">
            <img src="../assets/images/hm.png" alt="">
            <el-form ref="form" :model="form" :rules="rules">
                <el-form-item prop="username">
                    <el-input prefix-icon="iconfont icon-icon_zhanghao" placeholder="请输入用户名" v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input prefix-icon="iconfont icon-miwen" type="password" placeholder="请输入密码" v-model="form.password"></el-input>
                </el-form-item>
            </el-form>
            <el-button>注册</el-button>
            <el-button type="primary" @click="submit()">登录</el-button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 18, message: '密码长度6-18个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submit () {
      // 验证表单
      this.$refs.form.validate(async valid => {
        if (valid) {
        // valid返回布尔值为true时验证成功
          // console.log('登陆成功')
          const {data: {data, meta}} = await this.$http.post('login', this.form)
          if (meta.status !== 200) return this.$message.error(meta.msg || '登陆失败')
          // 登录成功
          // 保存token sessionStorage
          sessionStorage.setItem('token', data.token)
          // 跳转 首页
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>
<style scoped>
.login_container{
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #EEF7FE, #105763);
}
.login_container .box {
  width: 400px;
  height: 250px;
  background: linear-gradient(45deg, #D2ECF1, #EFF8FF);
  box-shadow: 0 0 10px #eee;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-60%);
  border-radius: 2px;
  padding: 0 15px;
  box-sizing: border-box;
}
.login_container .box img {
    width: 200px;
    display: block;
    margin: 15px auto;
}
</style>
