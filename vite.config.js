import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/proyecto-molon-project-promo-x-module-3-team-1/',
  plugins: [react()],
  server: {
    open: "/index.html",
    watch: {
      usePolling: true
    }
  },
})
