/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "780px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      //primary colors
      primaryPurple: "#854dff",
      primaryLightRed: "#ff5757",

      //neutral colors
      nWhite: "#ffffff",
      nOffWhite: "#f0f0f0",
      nLightGrey: "#dbdbdb",
      nSmokeyGreye: "#716f6f",
      nOffBlack: "#141414",
    },
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
      width: {
        vw: "90vw",
        fixed: "450px",
        mFixed: "1440px",
      },
    },
  },
  plugins: [],
};
