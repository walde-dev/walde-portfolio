/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "flip-once": "flip 350ms linear normal",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "50%" : { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      }
    },
  },
  plugins: ["postcss-import", "tailwindcss/nesting"],
};
