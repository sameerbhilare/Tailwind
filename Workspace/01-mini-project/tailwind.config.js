module.exports = {
  /*
    You should only set 'enabled' to 'true' for production build as it will removed unused css styles.
    You should also temporarily set 'enabled' back to 'false' if you want to make subsequent
    changes to the tailwind.css or the Tailwind configuration
    (new plugins or changes in the tailwind.config.js ).

    Background info:
    https://tailwindcss.com/docs/optimizing-for-production
  */
  purge: {
    enabled: false, // set to 'true' only for production
    content: ['./dist/**/*.html'], // look in all html files under /dist folder to check which styles are used
  },
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
