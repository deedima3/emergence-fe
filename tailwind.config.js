/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./splashscreen.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
    "./src/**/**/*.{js,ts,jsx,tsx,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-gradient-start": "#2E4B73",
        "bg-gradient-end": "#1D1D49"
      },
      fontFamily: {
        "poppins": ['poppins', 'sans-serif'],
        "mont": ['montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
