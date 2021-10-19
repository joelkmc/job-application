module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        30: '7.5rem',
        100: '30rem',
        105: '33rem',
        107: '36.5rem',
        110: '40rem',
        120: '50rem',
        121: '50.5rem',
      },
      screens: {
        xs: '480px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'kmc-red': '#eb5757',
        'kmc-blue-200': '#2D9CDB',
        'kmc-blue-300': '#2F80ED',
        'kmc-green-100': '#6FCF97',
        'kmc-green-200': '#27AE60',
        'kmc-green-300': '#219653',
        'kmc-gray-50': '#FDFCFC',
        'kmc-gray-100': '#E0E0E0',
        'kmc-gray-200': '#BDBDBD',
        'kmc-gray-300': '#828282',
        'kmc-gray-400': '#4F4F4F',
        'kmc-gray-500': '#333333',
        'kmc-primary': '#f99d3a',
        'kmc-secondary': '#f2c94c',
        'kmc-yellow': '#ffff67',
        'kmc-visited-link': '#733d90',
      },
      fontFamily: {
        proxiLight: ['ProximanovaLight'],
        proxiRegular: ['ProximanovaRegular'],
        proxiSemiBold: ['ProximanovaSemiBold'],
        proxiExtraBold: ['ProximanovaExtraBold'],
        sans: [
          'ProximanovaRegular',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['disabled'],
    },

    backgroundColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    backgroundImage: ['responsive'],
    backgroundOpacity: [
      'responsive',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    borderColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
      'active',
    ],

    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],

    width: ['responsive', 'group-hover', 'focus', 'focus-within'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
