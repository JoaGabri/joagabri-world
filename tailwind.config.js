/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js, jsx,ts,tsx}"],
  theme: {
    colors: {
      'blue': '#44C5E1',
      'yellow': '#E1DB44',
      'purple': '#C076FB',
      'brazil': '#BEF676',
      'red': '#FF7373',
      'lblue': 'rgba(68, 197, 225, 0.25)',
      'black': 'rgb(0,0,0)',
      'white': 'rgb(255,255,255)',
      'green': '#44E196'
    },
    fontFamily:{
      'mont': ['Montserrat', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    fontSize:{
      xl: '80px',
      lg: '60px'
    }


  },
  plugins: [],
}

