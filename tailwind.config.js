/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      minHeight: {
        card: '25rem',
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['Space Mono'],
      display: ['Oswald'],
      body: ['"Open Sans"'],
    },
  },
  plugins: [],
}
