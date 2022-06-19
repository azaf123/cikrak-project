module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primary: "#3E82FC",
        lightprimary: "#2CB8E4",
      },
      backgroundImage: {
        Hero: "url('assets/background.png')",
      },
    },
  },
  plugins: [],
};
