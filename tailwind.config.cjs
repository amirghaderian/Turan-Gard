/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      maxWidth: { 1700: "1700px", 1900: "1910px", 700: "700px" },
      minWidth: { 900: "900px", 100: "100px", 1000: "1000px" },
      minHeight: { 900: "900px" },
      textUnderlineOffset: { 20: "20px" },
      textDecorationThickness: { 3: "3px" },
      screens: {
        mobileL: "425px",
      },
      boxShadow: {
        "sp": "0 0 30px 0 rgba(0, 0, 0, 0.3)",
      },
      colors: {
        myblue: "#BFD7ED",
        myorange: "#FF8300",
        mywhite: "#FAFAFA",
        myblack: "#1D1D1D",
        mylight: "#EBF1F7",
        mygray: " #878383",
        mybody: "#FEF2F2",
        mycard: "rgb(255, 153,0,0.7)",
        card1: "#f43f5e",
        card2: "#3b82f6",
        card3: "#22c55e",
        aboutcolor: "rgb(245,245,245)",
        bordcolor: "rgb(229,229,229)",
      },
      fontFamily: {
        sans: ['"yekanbakh"'],
      },
      backgroundImage: {
        bestTrip: "url('./public/assets/Vector.png')",
      },
      spacing: {
        200: "50rem",
        680: "680px",
        900: "960px",
        1700:"1700px",
        1900: "1900px",
        1200: "1200px",
        "40%": "40%",
      },
    },
  },
  plugins: [],
};
