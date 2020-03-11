<template>
  <div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { signIn } from '@/services/modules/common';

export default {
  name: 'Login',
  methods: {
    login() {
      signIn({
        username: 'admin',
        password: 'admin',
      }).then((res) => {
        this.$store.dispatch('setAccessToken', { accessToken: res.token, expire: res.expire });
        let { redirect } = this.$route.query;
        redirect = redirect || '/';
        this.$router.replace(redirect);
      });
    },
  },
};
</script>
