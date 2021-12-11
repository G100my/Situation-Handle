import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'
import autoRoutes from '~pages'
console.log(autoRoutes)

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: 'Home' },
  },
  ...autoRoutes,
  {
    path: '/:path(.*)',
    component: NotFound,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
