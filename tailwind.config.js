/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/index.js',
    './app/layout.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

