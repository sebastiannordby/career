/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        'main': {
          100: "#2196F3"
        },
        'secondary': {
          100: '#eee61b57'
        },
        'accent': {
          100: '#9E9E9E'
        }
      }
    }
  }
}

