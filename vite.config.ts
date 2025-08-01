import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@photoEvents': path.resolve(__dirname, 'src/assets/events'),
      '@content': path.resolve(__dirname, 'src/data')
    }
  }
})
