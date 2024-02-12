/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red-1': '#F3E6E6',
      'red-2': '#ECDADA',
      'red-3': '#D9B3B3',
      'red-4': '#CA9393',
      'red-5': '#570606',
      'red-6': '#4F0505',
      'red-7': '#2E0303',
      'yellow-1': '#DBD781',
    },
    fontFamily: {
      sans: ['Urbanist', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}