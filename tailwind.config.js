/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-bs-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  prefix: 'tw-',
  plugins: [],
};
