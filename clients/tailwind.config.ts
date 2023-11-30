/** @type {import('tailwindcss').Config}*/
module.exports = {
   content: [
     './pages/**/*.{js,ts,jsx,tsx}',
     './components/**/*.{js,ts,jsx,tsx}',
     './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily : {
          'GillSans' : ['GillSansNova','sans-serif']
        },
        // letterSpacing: {
        //   tighter: '-0.05em',
        //   tight: '-0.025em',
        //   normal: '0',
        //   wide: '0.025em',
        //   wider: '0.05em',
        //   widest: '0.1em',
        //   morewidest: '0.2em',
        // }
      },
    },
    plugins: [],
}