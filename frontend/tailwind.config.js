/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'bgc': {
        '1': '#D4C0E7',
        '2': '#613E69',
        '3': '#AF80BA',
        '4': '#D5C4D9',
        '5': '#D0D6D9',
        '6': '#E6C1B0',
      },
      'txt': {
        '1': '#1E0D23',
        '2': '#3e3A3F',
        '3': '#613E69',
        '4': '#FFA61E'
      }
    },
    extend: {
      fontFamily: {
        magilio: ['magilio']
      }
    },
  },
  plugins: [],
}

