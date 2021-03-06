const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        gray: colors.warmGray,
      },
      zIndex: {
        1: "1",
      },
      minHeight: {
        page: "calc(100vh - 68px)",
      },
      maxHeight: {
        page: "calc(100vh - 68px)",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["first"],
    },
  },
  plugins: [],
}
