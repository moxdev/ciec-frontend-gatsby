module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primario: "#0276df",
        secundario: "#01b748",
        terciario: "#02b3dd",
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive", "hover", "focus", "group-hover"],
      animation: ["hover"],
      fontWeight: ["hover"],
    },
  },
  plugins: [],
}