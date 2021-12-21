module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        cursive: "'Fruktur', cursive"
      },
      maxHeight: {
        '82': '21rem'
       },
       inset:{
         '7': '7rem'
       },
      fontSize: {
        'half': '2.5rem',
        '2.5xl': '1.7rem'
      },
      spacing: {
        '18': '4.5rem',
        '19': '19.4rem',
        '73': '23rem',
        '74': '19rem',
        '88': '34rem',
        '81': '27rem',
        '82': '21rem',
        '89': '35rem',
        '86': '32rem',
        '87': '32.2rem',
        '84': '28rem',
        '83': '29rem',
        '90': '37rem',
        '91': '38rem',
        '100': '40rem',
        '103': '43rem',
        '105': '45rem',
        '120': '53.3rem',
        '200': '86.5rem',
        '6/6': '90%',
      },
      lineHeight: {
        'loose': '4rem',
        'semiLoose': '5rem',
        'semiExtraLoose': '3.5rem',
        '81': '15rem',
        'extraLoose': '3rem'
      },
      maxWidth: {
        'headerWrapper': '150rem',
        'xxl': '115rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
