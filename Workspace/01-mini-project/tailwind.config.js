module.exports = {
  /*
    If you replace “ enabled: true ” with “enabled: false”, then it no longer works. You should only
    set it to “true” if you want to publish the project.
    You should also temporarily set “enabled” back to false if you want to make subsequent
    changes to the tailwind.css or the Tailwind configuration
    (new plugins or changes in the tailwind.config.js ).
    Background info:
    https://tailwindcss.com/docs/optimizing-for-production
  */
  purge: {
    enabled: true, // set to false
    content: ['./dist/**/*.html'],
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
