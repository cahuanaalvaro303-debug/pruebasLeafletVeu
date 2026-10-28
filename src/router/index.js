// Archivo: src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '../views/InicioView.vue'
import LoginView from '../views/LoginView.vue'
import MotocicletasView from '../views/MotocicletasView.vue'
import ConductoresView from '../views/ConductoresView.vue'
import MonitoreoView from '../views/MonitoreoView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/motocicletas',
    name: 'motocicletas',
    component: MotocicletasView,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/conductores',
    name: 'conductores',
    component: ConductoresView
  },

  {
    path: '/monitoreo',
    name: 'monitoreo',
    component: MonitoreoView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    return '/login'
  }

  return true
})

export default router