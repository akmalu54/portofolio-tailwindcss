/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
        colors: {
            blue:'#3b82f6',
          
        },
        screens: {
            '2xl': '1320px',
        },
    },
  },
  plugins: [],
}

