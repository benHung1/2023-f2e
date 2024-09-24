import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": {
            transform: "translateY(200%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        fly: {
          "0%, 100%": {
            transform: "tramslateY(50%)",
          },

          "50%": {
            transform: "translateY(20%)",
          },
        },
      },
      animation: {
        fade: "fade .5s ease-in-out ",
        fly: "fly 3s ease-in-out infinite",
      },
      screens: {
        pc: "1440px",
      },
      fontSize: {
        clamp: "clamp(80px, 18vw, 260px)",
      },
      colors: {
        primeBlue: "#E3F5FD",
        primeBlue2: "#D5F0FC",
        primeBlue3: "#72CEF5",
        gray1: "#383735",
        gray2: "#AEADAB",
        gray3: "E2E2E2",
      },
      backgroundColor: {
        secondaryPink: "#FFF3F7",
        secondaryPink2: "#FFECF3",
        secondaryPink3: "FFC1D8",
        gray1: "#383735",
        gray2: "#AEADAB",
        gray3: "E2E2E2",
      },
    },
  },
  plugins: [],
};
