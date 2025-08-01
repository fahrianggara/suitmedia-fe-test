import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    allowedHosts: [],
    proxy: {
      '/suitmedia-api': {
        target: 'https://suitmedia-backend.suitdev.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/suitmedia-api/, ''),
      }
    }
  }
})
