/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8e3a76',
        background: '#f9fbfa',
        soft: '#e5c3dd',
        muted: '#8f6082',
        lightpurple: '#be92b2',
        dark: '#423f40',
        accentdark: '#7d406b',
        altbg: '#f0ebf7'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 12px 28px -16px rgba(66, 63, 64, 0.35)'
      }
    }
  }
}
