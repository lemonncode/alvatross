const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        /*similar a helvetica, en google-fonts*/
        roboto: ['Roboto']
        
      },
      colors: {
        darkblue: "#2E344D",
        lightblue: "#F5F7FB"
      },
    },
    plugins: [],
  }
};
