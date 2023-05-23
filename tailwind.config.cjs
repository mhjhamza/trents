/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg:"rgb(248,248,248)",
        card:"rgb(255,255,255)",
        primary:"rgb(10,102,194)",
        maintext:"rgb(117,117,117)",
        text:"rgb(31,37,51)",
      },
      fontFamily:{
        popins:['Poppins', 'sans-serif']
      },
      
    },
    screens:{
      xxs:"350px",
      xs:"480px",
      sm:"620px",
      md:"768px",
      lg:"960px",
      xl:"1024px",
      xxl:"1200px"
    }
  },
  
  plugins: [],
}
