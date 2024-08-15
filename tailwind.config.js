const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      "extra-xs": "400px",
      xs: "576px",
      lg: "895px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1320px",
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        cblue: "#123654",
        clight: "#f1f3f5",
        cred: "#880019",
        cwhite: "#fff",
        cblack: "#000",
      },

      zIndex: {
        overlay: "999",
        modal: "1000",
        navigationDrawer: "1100",
      },
    },
  },
  plugins: [],
};
