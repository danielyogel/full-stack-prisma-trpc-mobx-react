/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},

    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      primary: '#07C597',

      gray: {
        darkest: '#1f2d3d',
        dark: '#757575',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc'
      }
    }
  },
  plugins: []
};
