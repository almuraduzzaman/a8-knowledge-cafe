/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#56d8af",

          "secondary": "#ed9ce9",

          "accent": "#98d849",

          "neutral": "#1A2229",

          "base-100": "#F1EEF1",

          "info": "#55ABEC",

          "success": "#168D6B",

          "warning": "#F18109",

          "error": "#F75557",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

