/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      fira_code: ['Fira Code', 'sans-serif'],
    },
    backgroundColor: {
      primary: 'rgb(239 68 68)',
      hover_primary: 'rgb(248 113 113)',
      secondary: 'rgb(5 150 105)',
      hover_secondary: 'rgb(52 211 153)',
      white: '#fff',
    },
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
      '3xl': '1920px',
      '4xl': '2196px',
      '5xl': '2560px',
    },
  },
  plugins: [],
}
