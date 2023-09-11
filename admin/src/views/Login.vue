<template>
  <div class="container">
    <div class="loginBox"></div>
    <a-form :model="formdata" class="loginForm" ref="loginFormRef" :rules="rules">
      <a-form-item name="username">
        <a-input v-model="formdata.username" aria-placeholder="请输入用户名">
          <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 4,
            max: 12,
            message: '用户名必须在4到12个字符之间',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: '密码必须在6~20个字符之间',
            trigger: 'blur'

          }
        ]
      }
    }
  }
}
</script>
