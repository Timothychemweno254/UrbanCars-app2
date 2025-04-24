import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/Api': {
        target: 'https://urbancars-app2.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
