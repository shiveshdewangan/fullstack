import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '127.0.0.1',
    open: true,
    proxy: {
      '/api': {
        target: 'https://fullstack-backend-s31w.onrender.com/',
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
