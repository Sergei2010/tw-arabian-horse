/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "main": ["Inter"],
        "additional-1": ["Cormorant Garamond"],
        "additional-2": ["Cormorant"],
      },
    },
    screens: {
      "sm": "576px",
      // => @media (min-width: 576px) { ... }

      "md": "960px",
      // => @media (min-width: 960px) { ... }

      "lg": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      "black": "#0D0A07",
      "black-light": "#191919",
      "brown": "#583E29",
      "brown-light": "#A2734A",
      "gray": "#BDB6B0",
      "gray-light": "#EBEBEB",
      "neutral/2": "#F7F7F7",
      "neutral/3": "#EBEBEB",
      "neutral/4": "#D9D9D9",
      "neutral/5": "#BFBFBF",
      "white": "#FFFFFF",
    }
  },
  plugins: [],
}

