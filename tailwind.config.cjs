/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "flip-once": "flip 350ms linear normal",
        wiggle: "wiggle 20s ease-in-out infinite",
        wiggle2: "wiggle2 20s ease-in-out infinite",
      },
      screens: {
        xs: "400px",
        "2xs": "350px",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        wiggle: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(300px, -500px) scale(0.6)" },
          "66%": { transform: "translate(-200px, 200px) scale(1.4)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        wiggle2: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-300px, -500px) scale(0.6)" },
          "66%": { transform: "translate(200px, 200px) scale(1.4)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [
    "postcss-import",
    "tailwindcss/nesting",
    require("@tailwindcss/container-queries"),
  ],
};
