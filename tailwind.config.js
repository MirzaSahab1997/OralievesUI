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
        },
        'teal-custom': 'rgb(79, 209, 199)',
        'teal-dark': 'rgb(59, 189, 179)',
        'blue-dark': '#003b7b',
        'blue-medium': '#005a9e'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'heading': ['Raleway', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
