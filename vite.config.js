import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      'api': {
        target: 'http://localhost:3000',
        changeOrigin: true, 
        secure: false,
      }
      }
    },
  build: {
    rollupOptions: {
      // Externalize server.jsx to avoid bundling it in the frontend build
      external: ['server.jsx'],
      // No need to declare main entry manually, Vite assumes 'index.html' as the entry
    },
  },
})
