/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '60vw': '60vw',
      },
      colors: {
        darkBlue: {
          900: '#1e3a8a',
          200: '#e9edf5',
          600: '#3d608c'
          
        },
      },
    },
  },
  plugins: [],
};