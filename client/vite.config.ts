import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.vitest': 'undefined'
  },
  server: {
    port: 3002,
    host: '0.0.0.0',
    proxy: {
      '/trpc': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
