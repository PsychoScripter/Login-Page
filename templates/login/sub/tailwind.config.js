/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'iransans':["ReemKufiFun" , "sans"],
      },
colors : {
        primary : '#FF6363' ,
        secondary :{
              100:'#E2E2D5',
              200:'#888883',
        }
      },
      backgroundImage: {
        'hero': "url('../public/img/Eu6U_VfWgAAl4W9.jpg')",
        'herosec' : "url('../public/img/yourart-yourrules.jpg')",
        'odilon' : "url('../public/img/Odilon_Redon_-_The_Cyclops,_c._1914.jpg')",
        'clouds' : "url('../public/img/ramiro.jpg')",
        'cloud1' : "url('../public/img/cloud1.jpg')",
        'sky1' : "url('../public/img/sky1.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}

