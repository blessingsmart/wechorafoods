/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flash: {
          '0%, 100%': { opacity: 1 },
          '10%': { opacity: 0 },
        },
      },
      animation: {
        flash: 'flash 30s infinite',
      },
    },
  },
  plugins: [],
}

