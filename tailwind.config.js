/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
