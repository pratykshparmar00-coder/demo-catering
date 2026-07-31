/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./libraries/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ninja: {
          orange: "#FF6B00",
          orangeHover: "#E05E00",
          lightOrange: "#FFF4EC",
          dark: "#1A1D20",
          cardDark: "#24282C",
          accentYellow: "#FFC700",
          green: "#10B981"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
