/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tastfonia: ['Tastfonia', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
