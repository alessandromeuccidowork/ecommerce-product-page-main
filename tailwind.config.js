/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    fontFamily: {
      'kumbh-sans': ['Kumbh Sans', 'sans-serif']
    },
    screens: {
      'xs': '375px',
      // => @media (min-width: 576px) { ... }
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
