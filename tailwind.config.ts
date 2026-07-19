import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
        display: [
          "Fraunces",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      colors: {
        ink: {
          950: "#161412",
          800: "#312c27",
          600: "#5d544b",
        },
        paper: {
          50: "#fbfaf7",
          100: "#f2eee7",
        },
        cinnabar: "#b6422c",
      },
      boxShadow: {
        "soft-panel": "0 24px 80px rgb(22 20 18 / 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
