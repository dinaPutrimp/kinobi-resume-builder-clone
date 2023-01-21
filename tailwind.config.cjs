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
      },
      variants: {
        fill: ['hover', 'focus'],
      },
      backgroundColor: {
        'blue-grad': 'hsla(214, 92%, 47%, 1)',
        'glass': 'rgba(0, 0, 0, 0.8)',
        'dark-blue-grad': 'hsla(236, 100%, 8%, 1)',
        'modal': 'rgba(0, 0, 0, 0.2)'
      },
      backgroundImage: {
        'resume': "url('./src/assets/undraw_hiring.svg')",
      }
    },
  },
  plugins: [],
}
