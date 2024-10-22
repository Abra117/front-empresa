<template>
  <loginForm class="login-page" />
</template>

<script>
import loginForm from '~/components/ui/loginForm.vue'
export default {
  components: {
    loginForm
  },
  auth: false,
  layout: 'login'
}
</script>

<style scoped>
.login-page {
  max-width: 400px;
}
</style>
