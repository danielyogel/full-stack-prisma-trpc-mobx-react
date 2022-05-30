/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: { globals: true, includeSource: ['src/**/*.{ts,tsx}'] },
  define: {
    'import.meta.vitest': 'undefined'
  },
  server: {
    port: 3001,
    proxy: {
      '/trpc': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
