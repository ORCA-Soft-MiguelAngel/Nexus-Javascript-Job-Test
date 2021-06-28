module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    screens: {
      "mobile-m": "321px",
      "mobile-l": "376px",
      "tablet": "426px",
      "desktop-s": "769px",
      "desktop-m": "1025px",
      "desktop-l": "1367px",
      "desktop-xl": "1600px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
