/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto'
      },
      gridTemplateColumns: {
        books: 'repeat(auto-fill, minmax(100px, 180px))'
      },
      aspectRatio: {
        book: '10/16'
      },
      colors: {
        'background-start': '#213f',
        'background-via': '#204f',
        'background-end': '#223f',
        black: '#1f1f1f',
        white: '#f3f3f3',
        primary: '#f17d'
      }
    },
  },
  plugins: [],
}
