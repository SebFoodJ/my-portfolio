
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontWeight: {
      
    },
    extend: {
      backgroundImage:{
        'background-image': "url('./images/background.jpg')",
      },
      colors: {
        'indigo': '#4B0082',
        'lavender': '#E9EBF8',
        'frenchgray': '#B4B8C5',
        'silver': '#A5A299',
        'taupegray': '#8D818C'
      },
      animation: {
        'pulse': 'wave 10s infinite',
        'introtext': 'focus-in-contract-bck 1s easeOutQuad both',
      },
      fontFamily: {
        'sans': ['Mooli', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['Open Sans'],
      },
    },
  },
  plugins: [],
}

