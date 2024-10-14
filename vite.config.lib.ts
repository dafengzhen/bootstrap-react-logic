import type { OutputOptions } from 'rollup';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import mergeCssPlugin from './merge-css-plugin';

// lite tools
const lightweightTools = ['clsx'];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.lib.json' }), mergeCssPlugin],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['mixed-decls', 'color-functions'],
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    outDir: 'dist-lib',
    copyPublicDir: false,
    lib: {
      name: 'BRL',
      entry: resolve(__dirname, 'lib/main.ts'),
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: ['es', 'cjs'].map((format) => ({
        format,
        globals: {
          react: 'React',
          'react/jsx-runtime': 'ReactJsxRuntime',
          'react-dom': 'ReactDom',
        },
        chunkFileNames: format === 'cjs' ? '[name].cjs' : '[name].js',
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
  resolve: {
    alias: {
      '@lib': resolve(__dirname, 'lib'),
      '@assets': resolve(__dirname, 'lib/assets'),
      '@components': resolve(__dirname, 'lib/components'),
      '@hooks': resolve(__dirname, 'lib/hooks'),
      '@hocs': resolve(__dirname, 'lib/hocs'),
      '@pages': resolve(__dirname, 'lib/pages'),
      '@types': resolve(__dirname, 'lib/types'),
      '@store': resolve(__dirname, 'lib/store'),
      '@contexts': resolve(__dirname, 'lib/contexts'),
      '@tools': resolve(__dirname, 'lib/tools'),
    },
  },
});
