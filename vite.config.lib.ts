import type { OutputOptions } from 'rollup';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

import mergeCssPlugin from './merge-css-plugin';

// lite tools
const lightweightTools = ['clsx', 'cssmix'];

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: ['es', 'cjs'].map((format) => ({
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
        globals: {
          'react/jsx-runtime': 'ReactJsxRuntime',
          'react-dom': 'ReactDom',
          react: 'React',
        },
        chunkFileNames: format === 'cjs' ? '[name].cjs' : '[name].js',
        format,
      })) as OutputOptions[],
      external: ['react', 'react/jsx-runtime', 'react-dom'],
    },
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'BRL',
    },
    copyPublicDir: false,
    cssCodeSplit: true,
    outDir: 'dist-lib',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'lib/components'),
      '@contexts': resolve(__dirname, 'lib/contexts'),
      '@assets': resolve(__dirname, 'lib/assets'),
      '@hooks': resolve(__dirname, 'lib/hooks'),
      '@pages': resolve(__dirname, 'lib/pages'),
      '@store': resolve(__dirname, 'lib/store'),
      '@tools': resolve(__dirname, 'lib/tools'),
      '@types': resolve(__dirname, 'lib/types'),
      '@hocs': resolve(__dirname, 'lib/hocs'),
      '@lib': resolve(__dirname, 'lib'),
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
  plugins: [react(), dts({ tsconfigPath: './tsconfig.lib.json' }), mergeCssPlugin()],
});
