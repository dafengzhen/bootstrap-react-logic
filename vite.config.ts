import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['mixed-decls', 'color-functions'],
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: '@assets',
        replacement: resolve(__dirname, 'src/assets'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'src/pages'),
      },
      {
        find: '@store',
        replacement: resolve(__dirname, 'src/store'),
      },
      {
        find: '@tools',
        replacement: resolve(__dirname, 'src/tools'),
      },
      {
        find: '@lib',
        replacement: resolve(__dirname, 'lib'),
      },
    ],
  },
});
