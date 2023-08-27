/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montreal)"],
      },
      animation: {
        "flip-once": "flip 350ms linear normal",
        wiggleLeft: "wiggleLeft 20s ease-in-out infinite",
        wiggleRight: "wiggleRight 20s ease-in-out infinite",
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
        wiggleLeft: {
          "0%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg) skew(0deg) ",
            borderRadius: "9999px 9999px 9999px 9999px",
          },
          "33%": {
            transform:
              "translate(-40px, -20px) scale(0.9) rotate(90deg) skew(10deg)",
            borderRadius: "400px 9999px 9999px 2000px",
          },
          "66%": {
            transform:
              "translate(-20px, 20px) scale(1.5) rotate(180deg) skew(-10deg)",
            borderRadius: "1000px 200px 3000px 9999px",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg) skew(0deg)",
            borderRadius: "9999px 9999px 9999px 9999px",
          },
        },
        wiggleRight: {
          "0%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg) skew(0deg)  ",
            borderRadius: "9999px 9999px 9999px 9999px",
          },
          "33%": {
            transform:
              "translate(50px, -200px) scale(1.5) rotate(90deg) skew(0deg) ",
            borderRadius: "9999px 4000px 9999px 2000px",
          },
          "66%": {
            transform:
              "translate(60px, 200px) scale(0.9) rotate(180deg) skew(0deg) ",
            borderRadius: "1000px 9999px 3000px 4000px",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg) skew(0deg) ",
            borderRadius: "9999px 9999px 9999px 9999px",
          },
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
