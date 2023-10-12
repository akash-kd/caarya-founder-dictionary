/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: {
          orange: {
            500: "#f57d34",
          },
        },
        accent: {
          primary: {
            50: "#E7F9FD",
          },
        },
        chronos: {
          primary: {
            50: "#F5F6FF",
          },
        },
        fusion: {
          primary: {
            30: "#FDF7E9",
          },
          secondary: {
            30: "#F7F7FF",
          },
        },
        caarya: {
          blue: {
            30: "#F5FBFF",
          },
        },
        dawn: {
          primary: {
            30: "#FFF1EB",
            700: "#CE5511",
          },
        },
        labs: {
          primary: {
            30: "#FFF2F9",
          },
        },
        error: {
          500: "#E72113",
        },
        peddle: {
          primary: {
            30: "#EDFFFF",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
