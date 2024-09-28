import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      emitFile: true,
      filename: 'stats.html',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['mixed-decls', 'color-functions'],
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('highlight.js')) {
            return 'highlight';
          } else if (id.includes('react-dom')) {
            return 'react-dom';
          } else if (
            id.includes('@remix-run') ||
            id.includes('react-router-dom') ||
            id.includes('react-router')
          ) {
            return 'react-router';
          }
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@src',
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
        find: '@types',
        replacement: resolve(__dirname, 'src/types'),
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
