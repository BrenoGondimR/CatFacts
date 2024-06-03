module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22223b',
        secondary: '#4a4e69',
        accent: '#9a8c98',
        muted: '#c9ada7',
        background: '#f2e9e4',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      width: {
        '325px': '325px',
        '155px': '155px',
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
