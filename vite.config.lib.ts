import type { OutputOptions } from 'rollup';

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// lite tools
const lightweightTools = ['clsx', 'cssmix', 'date-fns'];

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'BRL',
    },
    outDir: 'dist-lib',
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: ['es', 'cjs'].map((format) => ({
        chunkFileNames: format === 'cjs' ? '[name].cjs' : '[name].js',
        format,
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'react/jsx-runtime': 'ReactJsxRuntime',
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (lightweightTools.some((tool) => id.includes(`${tool}/`))) {
              return 'lite';
            }
            return 'vendor';
          }

          if (id.includes('lib/')) {
            const parts = id.split('lib/')[1].split('/');
            const fileName = parts[parts.length - 1].replace(/\.[^/.]+$/, '');
            if (fileName !== 'index') {
              return parts.length > 1 ? `${parts[0]}/${fileName}` : fileName;
            }
          }
        },
      })) as OutputOptions[],
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  plugins: [react(), dts({ tsconfigPath: './tsconfig.lib.json' })],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'lib/assets'),
      '@components': resolve(__dirname, 'lib/components'),
      '@contexts': resolve(__dirname, 'lib/contexts'),
      '@hocs': resolve(__dirname, 'lib/hocs'),
      '@hooks': resolve(__dirname, 'lib/hooks'),
      '@lib': resolve(__dirname, 'lib'),
      '@pages': resolve(__dirname, 'lib/pages'),
      '@store': resolve(__dirname, 'lib/store'),
      '@tools': resolve(__dirname, 'lib/tools'),
      '@types': resolve(__dirname, 'lib/types'),
    },
  },
});
