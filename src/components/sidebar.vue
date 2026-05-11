<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const logout = () => {
  sessionStorage.removeItem('isLoggedIn')
  router.push('/Login')
}
</script>

<template>
  <div>
        <div class="sidebar">
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
        <div class="bars">
          <ul>
            <li><router-link to="/dashboard"> <i class="fa-solid fa-house"></i> Home</router-link></li>
            <li><router-link to="/dashboard/admin"><i class="fa-solid fa-user-shield"></i> Admin</router-link></li>
            <li><router-link to="/dashboard/students"><i class="fa-solid fa-children"></i> Pupils</router-link></li>
            <li><router-link to="/dashboard/teachers"><i class="fa-solid fa-chalkboard-user"></i>Teachers</router-link></li>
            <li><router-link to="/dashboard/classes"><i class="fa-solid fa-school"></i>Classes</router-link></li>
            <li><router-link to="/dashboard/parents"><i class="fa-solid fa-people-roof"></i>Parents</router-link></li>
            <li><router-link to="/dashboard/attendance"> <i class="fa-solid fa-calendar-check"></i> Attendance</router-link></li>
          </ul>
        </div>
        <button class="logout-btn" @click="logout">
          <i class="fa-solid fa-right-from-bracket">Logout</i>
        </button>
       </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  min-height: 100vh;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  padding: 5px 0;
}
.logo{
  padding: 20px;
  border-bottom: 1px solid rgb(178, 100, 100);
}
.logo-wrapper{
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-icon {
  width: 45px;
  height: 45px;
  display: flex;
  background: white;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #2c3e50;
}
.logo a{
  text-decoration: none;
}
.logo-text{
  display: flex;
  flex-direction: column;
  color: var(--secondary);
  font-size: 1.1rem;
}
.logo-main{
  font-size: 1.1rem;
}
.logo-sub{
  color: var(--secondary);
  /* color: #aaa; */
}

.bars {
  flex: 1;
  padding: 20px;
}
.bars ul{
   list-style: none;
   padding: 0;
   display: flex;
   flex-direction: column;
}
.bars ul li{
  margin-bottom: 10px;
}
.bars ul a {
  color: var(--secondary);
  font-size: 1.2rem;
  text-decoration: none;
  display: block;
  border-radius: 5px;
  padding: 10px;
}
.bars ul a:hover{
  background:rgba(255, 255, 255, 0.1) ;
}
.bars ul i {
  padding-right: 40px;
}
.logout-btn{
  margin: 20px;
  background: none;
  border: 1px solid var(--secondary);
  padding: 10px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.5s;
}
.logout-btn i{
  padding-right: 70px;
}
.logout-btn:hover {
  background: var(--secondary);
  color: #2c3e50;
}
</style>