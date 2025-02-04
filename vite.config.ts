import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';

import addScriptPlugin from './add-script-plugin.ts';

const env = loadEnv('app', process.cwd(), '');
const base = env.PUBLIC_BASE_PATH || '';
const href = env.PUBLIC_BASE_HREF || '';
const outputVisualizer = env.OUTPUT_VISUALIZER === 'true';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base,
    build: {
      chunkSizeWarningLimit: 1256,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          notFound: resolve(__dirname, '404.html'),
        },
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
    define: {
      __APP_PUBLIC_BASE_HREF__: JSON.stringify(href),
      __APP_PUBLIC_BASE_PATH__: JSON.stringify(base),
    },
    plugins: [
      tailwindcss(),
      react(),
      outputVisualizer &&
        visualizer({
          emitFile: true,
          filename: 'stats.html',
        }),
      command === 'build' && addScriptPlugin(),
    ],
    resolve: {
      alias: {
        '@assets': resolve(__dirname, 'src/assets'),
        '@components': resolve(__dirname, 'src/components'),
        '@contexts': resolve(__dirname, 'src/contexts'),
        '@hocs': resolve(__dirname, 'src/hocs'),
        '@hooks': resolve(__dirname, 'src/hooks'),
        '@lib': resolve(__dirname, 'lib'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@src': resolve(__dirname, 'src'),
        '@store': resolve(__dirname, 'src/store'),
        '@tools': resolve(__dirname, 'src/tools'),
        '@types': resolve(__dirname, 'src/types'),
      },
    },
  };
});
