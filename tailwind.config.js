/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: { "3xs": "8px", "2xs": "10px", "2.5xl": "28px" },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        primary: {
          orange: {
            500: "#f57d34",
          },
          accent: {
            50: "#E7F9FD",
          },
          chronos: {
            50: "#F5F6FF",
          },
          fusion: {
            30: "#FDF7E9",
            700: "#BA7507",
          },
          dawn: {
            30: "#FFF1EB",
            700: "#CE5511",
          },
          labs: {
            30: "#FFF2F9",
          },
          peddle: {
            30: "#EDFFFF",
          },
          magenta: {
            30: "#FDF2FF",
            lightest: "#F9E3FC",
            lighter: "#F4C4F7",
            light: "#F282F5",
            medium: "#C44EB9",
            dark: "#903795",
            darker: "#451451",
            darkest: "#2A192D",
          },
          neutral: {
            50: "#FAFAFA",
            100: "#F3F2F2",
            200: "#E7E6E5",
            400: "#9C9A96",
            500: "#696763",
            800: "#363430",
          },
        },
        secondary: {
          fusion: { 30: "#F7F7FF", 500: "#816FE9" },
          accent: {
            500: "#FBC920",
          },
        },

        caarya: {
          blue: {
            30: "#F5FBFF",
          },
        },

        error: {
          500: "#E72113",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
