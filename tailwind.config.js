module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    screens: {
      "mobile-m": "320px",
      "mobile-l": "375px",
      "tablet": "425px",
      "desktop-s": "768px",
      "desktop-m": "1024px",
      "desktop-l": "1366px",
      "desktop-xl": "1600px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
