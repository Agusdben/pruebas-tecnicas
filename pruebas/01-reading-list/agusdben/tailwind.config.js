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
        books: 'repeat(auto-fill, minmax(100px, 150px))'
      },
      aspectRatio: {
        book: '10/16'
      }
    },
  },
  plugins: [],
}
