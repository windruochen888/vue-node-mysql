<template>
  <div class="home">
    <div>用户名：<input v-model="username" />密码：<input v-model="password" /><button @click="submit">登录</button></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit () {
      this.axios({
        method: 'POST',
        url: '/api/login',
        data: { username: this.username, password: this.password }
      }).then((res) => {
        if (res.data && res.data.responseCode === 0) {
          this.$router.push({ path: '/blog' })
        }
      })
    }
  }
}
</script>
