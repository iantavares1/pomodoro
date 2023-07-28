/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'rgb(239 68 68)',
        secondary: 'rgb(5 150 105)',
        hover_primary: 'rgb(220 38 38)',
        hover_secondary: 'rgb(4 120 87)',
      },
    },
    fontFamily: {
      fira_code: ['Fira Code', 'sans-serif'],
    },
    screens: {
      xs: '360px',
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
