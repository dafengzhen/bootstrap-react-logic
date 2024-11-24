import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import reactRefresh from 'eslint-plugin-react-refresh';
import { configs, config } from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import js from '@eslint/js';

export default config(
  { ignores: ['dist', 'dist-lib'] },
  {
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
    },
    extends: [js.configs.recommended, ...configs.recommended],
    ignores: ['eslint.config.mjs', '**/exports-unused.ts'],
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  },
  perfectionist.configs['recommended-line-length'],
  eslintConfigPrettier,
);
