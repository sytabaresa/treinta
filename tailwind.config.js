const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  // xwind options
  xwind: {
    mode: 'objectstyles',
  },
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        ...colors,
        // 'yellow': '#fbbf24',
        "yellow": {
          "50": "#ffff39",
          "100": "#fffa2f",
          "200": "#fff025",
          "300": "#ffe61b",
          "400": "#ffdc11",
          "500": "#fdd207",
          "600": "#f3c800",
          "700": "#e9be00",
          "800": "#dfb400",
          "900": "#d5aa00"
        },
        'principal': '#fdd207',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}


