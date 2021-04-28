module.exports = {
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    ,
    "./data/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    ringWidth: false,
    outline: false,
  },
  theme: {
    extend: {
      colors: {
        coc: {
          light: {
            light: "##fcf5ff",
            primary: "#F9EDFF",
            dark: "##e9d5f2",
          },
          purple: {
            light: "#b691d9",
            primary: "#A880CE",
            dark: "##8d66b3",
          },
          green: {
            light: "#8cd4a7",
            primary: "#7BC697",
            dark: "##63ab7e",
          },
          blue: {
            light: "#8bcfe0",
            primary: "#74C0D3",
            dark: "##61aec2",
          },
          dark: {
            light: "##0c3057",
            primary: "#05203D",
            dark: "##02101f",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
