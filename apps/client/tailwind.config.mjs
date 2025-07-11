import { heroui } from "@heroui/react";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  plugins: [heroui(), typography()],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem"
      }
    }
  }
};
