import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bootstrap-react-logic/',
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
          } else if (id.includes('@remix-run') || id.includes('react-router-dom') || id.includes('react-router')) {
            return 'react-router';
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'),
      '@lib': resolve(__dirname, 'lib'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@hocs': resolve(__dirname, 'src/hocs'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@types': resolve(__dirname, 'src/types'),
      '@store': resolve(__dirname, 'src/store'),
      '@contexts': resolve(__dirname, 'src/contexts'),
      '@tools': resolve(__dirname, 'src/tools'),
    },
  },
});
