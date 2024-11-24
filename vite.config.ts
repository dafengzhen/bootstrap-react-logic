import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

import addScriptPlugin from './add-script-plugin.ts';

const env = loadEnv('app', process.cwd(), '');
const base = env.PUBLIC_BASE_PATH || '';
const href = env.PUBLIC_BASE_HREF || '';
const outputVisualizer = env.OUTPUT_VISUALIZER === 'true';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
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
        input: {
          notFound: resolve(__dirname, '404.html'),
          main: resolve(__dirname, 'index.html'),
        },
      },
      sourcemap: true,
    },
    resolve: {
      alias: {
        '@components': resolve(__dirname, 'src/components'),
        '@contexts': resolve(__dirname, 'src/contexts'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@hooks': resolve(__dirname, 'src/hooks'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@store': resolve(__dirname, 'src/store'),
        '@tools': resolve(__dirname, 'src/tools'),
        '@types': resolve(__dirname, 'src/types'),
        '@hocs': resolve(__dirname, 'src/hocs'),
        '@lib': resolve(__dirname, 'lib'),
        '@src': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import', 'legacy-js-api'],
          api: 'modern-compiler',
        },
      },
      modules: {
        localsConvention: 'camelCase',
      },
      devSourcemap: true,
    },
    plugins: [
      react(),
      outputVisualizer &&
        visualizer({
          filename: 'stats.html',
          emitFile: true,
        }),
      command === 'build' && addScriptPlugin(),
    ],
    define: {
      __APP_PUBLIC_BASE_HREF__: JSON.stringify(href),
      __APP_PUBLIC_BASE_PATH__: JSON.stringify(base),
    },
    base,
  };
});
