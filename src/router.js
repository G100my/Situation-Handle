import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import ImageCompress from './views/ImageCompress.vue'
import NotFound from './views/NotFound.vue'
import Vue3ref from './views/Vue3ref.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: 'Home' },
  },
  {
    path: '/image-compress',
    meta: { title: 'Image Compress' },
    component: ImageCompress,
  },
  {
    path: '/vue3ref',
    meta: { title: 'vue3 ref' },
    component: Vue3ref,
  },
  {
    path: '/:path(.*)',
    component: NotFound,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
