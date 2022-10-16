/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "spin-once": "spin 300ms linear normal",
      },
    },
  },
  plugins: ["postcss-import", "tailwindcss/nesting"],
};
