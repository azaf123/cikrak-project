module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'sc': '414px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Roboto: "Roboto"
      },
      colors: {
        primary: "#3E82FC",
        lightprimary: "#2CB8E4",
        greenprimary: "#28DEB2",
        greenav: "#72CDDF",
        "main-blue": "#2CB8E4",
        "main-green": "#15C89E",
        "mid-green": "#DFF6F1",
        "light-green": "#F2FFFC",
        "main-yellow": "#FFC225"
      },
      backgroundcolors: {
        primary: "#3E82FC",
        lightprimary: "#2CB8E4",
      },
      backgroundImage: {
        Hero: "url('assets/background.png')",
        Blur: "url('assets/background2.png')",
      },
    },
  },
  plugins: [],
};
