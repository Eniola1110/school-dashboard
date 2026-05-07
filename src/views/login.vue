<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const login = () => {
  sessionStorage.setItem('isLoggedIn', 'true')
  router.push('/dashboard')
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Kell's School</h2>
      <p>Preschool & Nursery</p>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="enter your email" required> <br> <br>
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="enter your password" required> <br> <br>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(236, 114, 114);
}
.login-box {
  background: var(--primary);
  padding: 40px;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.login-box h2{
  margin-bottom: 5px;
  color: var(--secondary);
}
.login-box p{
  margin-bottom: 20px;
  color: var(--secondary);
}
label{
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
}
button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--primary);
}
</style>