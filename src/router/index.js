import { createRouter, createWebHashHistory } from "vue-router";
import login from '../views/login.vue'
import dashboardlayout from '../layout/dashboardlayout.vue'
import home from '../views/dashboard/home.vue'
import admin from "@/views/dashboard/admin.vue";
import teachers from "@/views/dashboard/teachers.vue";
import classes from "@/views/dashboard/classes.vue";
import parents from "@/views/dashboard/parents.vue";
import students from "@/views/dashboard/students.vue";
import attendance from "@/views/dashboard/attendance.vue";

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  {
    path: '/dashboard', component: dashboardlayout,
    meta: {requiresAuth: true},
    children: [
      { path: '', component: home },
      { path: 'parents', component: parents },
      { path: 'admin', component: admin },
      { path: 'teachers', component: teachers },
      { path: 'classes', component: classes },
      { path: 'students', component: students },
      { path: 'attendance', component: attendance },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true'
  if (to.meta.requiresAuth && !isLoggedIn) {
    return '/login'
  }
})
export default router