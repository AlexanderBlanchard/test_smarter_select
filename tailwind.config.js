/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/javascript/**/*.{js,jsx,ts,tsx}',
    './app/views/**/*.{html,erb}',
  ],
  theme: {
    extend: {
      maxHeight: {
        '40': '10rem',
        '60': '15rem',
        '80': '20rem',
      }
    },
  },
  plugins: [],
}
