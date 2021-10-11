module.exports = {
  purge: [],
  // 'media' - means it it set darkMode based on device setting.
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      // with this change, 'font-headline' font will be available in our HTML page
      fontFamily: {
        headline: ['Oswald'],
      },
      // adding our own color
      colors: {
        mainColor: '#212f49',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
};
