import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.lib.json' })],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['mixed-decls', 'color-functions'],
      },
    },
  },
  build: {
    outDir: 'dist-lib',
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'BRL',
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        assetFileNames: 'bootstrap-react-logic.[ext]',
        globals: {
          react: 'React',
          'react/jsx-runtime': 'ReactJsxRuntime',
          'react-dom': 'ReactDom',
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@lib',
        replacement: resolve(__dirname, 'lib'),
      },
      {
        find: '@assets',
        replacement: resolve(__dirname, 'lib/assets'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'lib/components'),
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, 'lib/hooks'),
      },
      {
        find: '@hocs',
        replacement: resolve(__dirname, 'lib/hocs'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'lib/pages'),
      },
      {
        find: '@types',
        replacement: resolve(__dirname, 'lib/types'),
      },
      {
        find: '@store',
        replacement: resolve(__dirname, 'lib/store'),
      },
      {
        find: '@contexts',
        replacement: resolve(__dirname, 'lib/contexts'),
      },
      {
        find: '@tools',
        replacement: resolve(__dirname, 'lib/tools'),
      },
    ],
  },
});
