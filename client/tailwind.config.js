/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'loginForm': '1fr 50px 1fr',
      },
    },
  },
  plugins: [],
}

