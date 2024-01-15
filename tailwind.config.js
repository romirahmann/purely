/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-login": "url(./../src/assets/img/bg-login.png)",
        "bg-register": "url(./../src/assets/img/bg-register.png)",
        "icon-register": "url(./../src/assets/img/icon-register.png)",
        "cloud-quiz": "url(./../src/assets/img/cloud-quiz.png)",
      },
    },
    colors: {
      primary: "#104360",
      secondary: "#C7E5F6",
      accent: "#D92D20",
      primary70: "#587B90",
      correct: "#8BC63F",
      wrong: "#EB2224",
    },
    fontFamily: {
      primary: "Poppins",
      secondary: "Potta One",
    },
  },
  plugins: [require("flowbite/plugin")],
};
