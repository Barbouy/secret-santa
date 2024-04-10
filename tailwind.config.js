const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: { fontFamily: { sans: ["Noto Sans", "ui-sans-serif", "sans-serif"], } },
  plugins: [
    iconsPlugin({
      // Collections: https://icones.js.org/
      collections: getIconCollections(["lucide"]),
    })
  ],
}

