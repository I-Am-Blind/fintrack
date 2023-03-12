/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgimage': "url('bg.png')",
      },
      fontFamily: {
        'primary': ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}