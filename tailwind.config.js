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
      },
    },
  },
  plugins: [],
};
