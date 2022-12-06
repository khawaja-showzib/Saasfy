/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#0F0CC9",
          200: "#b8b7fb"
        },

        secondary: {
          400: "#1E5EF4",
          // 200: "#cbdafc",
          200: "#dbe5fd",
          300: "#c5d6fc"
          // 300: "#acc4fb"
        },

        accent: {
          400: "#040335"
        }
      },
    },
  },
  plugins: [],
}
