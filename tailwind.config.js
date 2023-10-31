/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    fontFamily: {
      'poppins' : ['"Poppins"', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '769px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}

