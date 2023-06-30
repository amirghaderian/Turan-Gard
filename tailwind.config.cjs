/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      maxWidth:{ "1800":"1800px"},
      minWidth:{"900":"900px",100:"100px"},
      colors: {
        "myblue" : "#BFD7ED",
        "myorange" : "#FF8300",
        "mywhite" : "#FAFAFA",
        "myblack" : "#1D1D1D",
        "mylight" : "#EBF1F7",
        "mygray" : " #878383",
        "mybody" :"#FEF2F2",
        
        "mycard":"rgb(255, 153,0,0.7)",
        "card1":"#f43f5e",
        "card2":"#3b82f6",
        "card3":"#22c55e"
      },
      fontFamily: {
        'sans': ['"iranyekan"'],
      },
      backgroundImage : {
        'bestTrip' : "url('./public/assets/Vector.png')",
      },
      spacing : {
        200:"50rem",
        1800:"1800px"
        
      }
      
    },
    
  },
  plugins: [],
}
