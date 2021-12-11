import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Sutiation-Handle/' : './',
  plugins: [
    vue(),
    Pages({
      dirs: 'src/views',
      extendRoute(route, parent) {
        return {
          ...route,
          meta: { title: route.name },
        }
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    open: true,
  },
}))
