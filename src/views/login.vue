<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const login = () => {
  sessionStorage.setItem('isLoggedIn', 'true')
  router.push('/dashboard')
}
</script>

<template>
<div class="container">
      <div class="left">
        <div class="school-info">
          <h1>Kell's School</h1>
          <p>Preschool & Nursery</p>
          <div class="features">
            <div class="feature">Student Management</div>
            <div class="feature">Teacher Management</div>
            <div class="feature">Attendance Tracking</div>
            <div class="feature">Parent Records</div>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="login-box">
          <h2>Welcome Back!</h2>
          <p class="subtitle">Sign in to your dashboard</p>
         
         <form @submit.prevent="login">
          <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" placeholder="enter your email" required>
          </div>
          <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="enter your password" required>
          </div>
          <button type="submit">Login</button>
         </form>

         <p class="footer-text">Kell's School Management System</p>
        </div>
      </div>
</div>
</template>

<style scoped>
.container{
  display:flex;
  height: 100vh;
  font-family: var(--font-body);
}
.left{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: var(--dark);
}
.school-info{
  color: white;
  text-align: center;
}
.school-info h1{
  font-size: 2.5rem;
  font-weight: 700;
  font-family: var(--font-display);
  color: white;
  margin-bottom: 8px;
}
.school-info p{
  color:#a0aec0;
  margin-bottom: 40px;
  font-size: 1.1rem;
}
.features{
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 12px;

}
.feature {
  background: rgba(255, 255, 255, 0.08);
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  color: #e2e8f0;
  border-left: 3px solid var(--accent);
}

/* Right Side */
.right{
  width: 50%;
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.login-box {
  background: white;
  padding: 48px;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 420px;
  border-top: 4px solid var(--primary);
}

.login-box h2 {
  font-size: 1.8rem;
  color: var(--dark);
  font-family: var(--font-display);
  font-weight: 700;
  margin-bottom: 8px;
}

.subtitle {
  color: #718096;
  font-size: 0.95rem;
  margin-bottom: 32px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-group label {
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.form-group input {
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  outline: none;
  transition: border 0.3s;
  font-family: var(--font-body);
}

.form-group input:focus {
  border-color: var(--primary);
}

button {
  width: 100%;
  padding: 14px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 8px;
  font-family: var(--font-body);
}

button:hover {
  background: var(--accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.footer-text {
  text-align: center;
  color: #a0aec0;
  font-size: 0.85rem;
  margin-top: 24px;
}

/* responsiveness */
@media (max-width: 720px) {
  .container{
    display: flex;
    flex-direction:column;
  }
  .left,.right{
    width: 100%;
  }
}
</style>