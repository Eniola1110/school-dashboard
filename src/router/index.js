import { createRouter, createWebHistory } from "vue-router";
import login from '../views/login.vue'
import dashboardlayout from '../layout/dashboardlayout.vue'
import home from '../views/dashboard/home.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  {
    path: '/dashboard', component: dashboardlayout,
    children: [
      { path: '', component: home }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router