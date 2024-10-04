/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      borderColor:{
        'primary' : '#5551E3',
        'secondary' : '#2b2d77'
      }
    },
    fontFamily: {
      'hero-font':'Fredoka'
    }
  },
  plugins: [],
}


