import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/techlinx/",
  build: {
    target: "es2015" // ✅ FIXES "Unexpected token ?"
  }
})
