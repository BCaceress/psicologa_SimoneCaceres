/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D5E1DF",
        secondary: "#FFFFFF",
        tertiary: "#424746",
        text: "#000",
      },
      fontFamily: {
        brutel: ["Brutel", "sans-serif"],
        'futura-LT': ['Futura Round', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
