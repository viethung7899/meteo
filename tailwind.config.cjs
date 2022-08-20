const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens
    },
    extend: {},
  },
  plugins: [],
}
