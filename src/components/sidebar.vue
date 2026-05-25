<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()

const logout = () => {
  sessionStorage.removeItem('isLoggedIn')
  router.push('/Login')
}

const menuItems = [
  { path: '/dashboard', icon: 'fa-solid fa-house', label: 'Home' },
  { path: '/dashboard/admin', icon: 'fa-solid fa-user-shield', label: 'Admin' },
  { path: '/dashboard/students', icon: 'fa-solid fa-children', label: 'Students' },
  { path: '/dashboard/teachers', icon: 'fa-solid fa-chalkboard-user', label: 'Teachers' },
  { path: '/dashboard/classes', icon: 'fa-solid fa-school', label: 'Classes' },
  { path: '/dashboard/parents', icon: 'fa-solid fa-people-roof', label: 'Parents' },
  { path: '/dashboard/attendance', icon: 'fa-solid fa-calendar-check', label: 'Attendance' },
]
</script>

<template>
  <div class="sidebar">

    <!-- Logo -->
    <div class="logo">
      <RouterLink to="/dashboard">
        <div class="logo-wrapper">
          <div class="logo-icon">
            <i class="fa-solid fa-school"></i>
          </div>
          <div class="logo-text">
            <span class="logo-main">Kell's School</span>
            <span class="logo-sub">Preschool & Nursery</span>
          </div>
        </div>
      </RouterLink>
    </div>

    <!-- Menu -->
    <nav class="nav">
      <ul>
        <li v-for="item in menuItems" :key="item.path">
          <RouterLink
            :to="item.path"
            :class="{ active: route.path === item.path }"
          >
            <div class="nav-icon">
              <i :class="item.icon"></i>
            </div>
            <span>{{ item.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Logout -->
    <div class="logout-section">
      <button class="logout-btn" @click="logout">
        <i class="fa-solid fa-right-from-bracket"></i>
        <span>Logout</span>
      </button>
    </div>

  </div>
</template>

<style scoped>
.sidebar {
  width: 260px;
  min-height: 100vh;
  background: var(--dark);
  display: flex;
  flex-direction: column;
}

/* Logo */
.logo {
  padding: 24px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.logo a {
  text-decoration: none;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 46px;
  height: 46px;
  background: var(--primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
  flex-shrink: 0;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-main {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  font-family: var(--font-display);
}

.logo-sub {
  font-size: 0.75rem;
  color: #a0aec0;
}

/* Nav */
.nav {
  flex: 1;
  padding: 16px 12px;
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav ul li a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: #a0aec0;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s;
  font-family: var(--font-body);
}

.nav ul li a:hover {
  background: rgba(255,255,255,0.07);
  color: white;
}

.nav ul li a.active {
  background: var(--primary);
  color: white;
}

.nav-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.nav ul li a.active .nav-icon {
  background: rgba(255,255,255,0.2);
}

/* Logout */
.logout-section {
  padding: 16px 12px;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.logout-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 71, 87, 0.1);
  border: 1px solid rgba(255, 71, 87, 0.3);
  border-radius: 10px;
  color: #ff4757;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--font-body);
}

.logout-btn:hover {
  background: #ff4757;
  color: white;
  border-color: #ff4757;
}
</style>