/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          '8%':  '#f0f7f0',
          '12%': '#449c47',
          '16%': '#449c47',
          '50':  '#ecf5ed',
          '100': '#c5e0c6',
          '200': '#a9d1aa',
          '300': '#82bd84',
          '400': '#69b06c',
          '500': '#449c47',
          '600': '#3e8e41',
          '700': '#306f32',
          '800': '#255627',
          '900': '#1d421e'
        },
      }
    },
  },
  plugins: [],
}

