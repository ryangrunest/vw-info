const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      blue: colors.sky,
      gray: colors.blueGray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.emerald
    },
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
      border: ['hover']
    },
  },
  plugins: [],
}
