/** @type {import('tailwindcss').Config} */
export default {
  content: ["./client/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

