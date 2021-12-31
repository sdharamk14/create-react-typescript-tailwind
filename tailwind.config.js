const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Monteserrat-Light', ...defaultTheme.fontFamily.sans],
        "monteserrat-thin": ['Monteserrat-Thin'],
        "monteserrat-light": ['Monteserrat-Light'],
      }
    },
  },
  plugins: [],
}