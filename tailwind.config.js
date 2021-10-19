module.exports = {
  mode: 'jit',
  purge: ['./index.html', './public/main.css', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#eeeee"
      }, fontFamily: {
        joyride: ["Joyride STD", "sans-serif"],
        manrope: ["Manrope", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
