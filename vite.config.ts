/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: true,
    port: 3000,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  preview: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': '/src/components',
      '@data': '/src/data',
      '@lib': '/src/lib',
      '@hooks': '/src/lib/hooks',
      '@constants': '/src/lib/constants',
      '@styles': '/src/styles',
      '@types': '/src/types',
      '@utils': '/src/utils',
      '@store': '/src/store',
      '@api': '/src/api',
    },
  },
});
