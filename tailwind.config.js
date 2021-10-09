const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      fontFamily: {
        mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
