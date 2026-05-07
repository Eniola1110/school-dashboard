<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const login = () => {
  router.push('/dashboard')
}
</script>

<template>
  <div>
          <form @submit.prevent="login">
            <button>Login</button>
          </form>
  </div>
</template>

<style lang="scss" scoped>

</style>