/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  darkMode: ['selector', '[data-bs-theme="dark"]'],
  plugins: [],
  prefix: 'tw-',
  theme: {
    extend: {},
  },
};
