/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Space: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
