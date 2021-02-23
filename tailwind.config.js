module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.css'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightblue: {
          DEFAULT: '#9DDEFF',
        },
        dark: {
          light: '#282828',
          DEFAULT: '#181818',
        },
      },
      margin: {
        70: '17.58rem',
        mobile: '41rem',
      },
      keyframes: {
        'bounce-fast': {
          '0%, 100%': { transform: 'translateY(3px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'bounce-fast': 'bounce-fast 1s infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
