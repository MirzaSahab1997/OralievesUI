/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oralieves': {
          'primary': '#4FD1C7',
          'secondary': '#81E6D9',
          'accent': '#B2F5EA',
          'light': '#E6FFFA',
          'dark': '#2D7D78',
        }
      }
    },
  },
  plugins: [],
}
