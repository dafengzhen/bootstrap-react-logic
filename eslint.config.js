import js from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import { config, configs } from 'typescript-eslint';

export default config(
  { ignores: ['dist', 'dist-lib'] },
  {
    extends: [js.configs.recommended, ...configs.recommended],
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: ['eslint.config.mjs', '**/exports-unused.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      curly: 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  perfectionist.configs['recommended-natural'],
);
