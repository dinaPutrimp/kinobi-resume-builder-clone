/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        't-side': '0px 0px 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
