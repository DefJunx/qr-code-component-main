const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: {
          light: "hsl(212, 45%, 89%)",
          dark: "hsl(220, 15%, 55%)"
        },
        darkBlue: "hsl(218, 44%, 22%)"
      }
    }
  },
  plugins: []
};
