import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['esm-dep > cjs-dep'],
  },
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  // base: './',
})