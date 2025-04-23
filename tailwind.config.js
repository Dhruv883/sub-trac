/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "background-primary-dark": "#101110",
        "background-primary": "#171717",
        "background-secondary": "#252525",

        "card-background-primary": "#171718",
        "card-background-secondary": "#2D2D30",

        "text-primary": "#EDEDED",
        "text-secondary": "#AAAAAA",
        "text-tertiary": "#6B6B6B",
      },
      fontFamily: {
        "clash-grotesk-extralight": ["Clash-Grotesk-Extralight", "sans-serif"],
        "clash-grotesk-light": ["Clash-Grotesk-Light", "sans-serif"],
        "clash-grotesk-medium": ["Clash-Grotesk-Medium", "sans-serif"],
        "clash-grotesk-regular": ["Clash-Grotesk-Regular", "sans-serif"],
        "clash-grotesk-semibold": ["Clash-Grotesk-Semibold", "sans-serif"],
        "clash-grotesk-bold": ["Clash-Grotesk-Bold", "sans-serif"],

        "poppins-extralight": ["Poppins-Extralight", "sans-serif"],
        "poppins-light": ["Poppins-Light", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
        "poppins-regular": ["Poppins-Regular", "sans-serif"],
        "poppins-semibold": ["Poppins-Semibold", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
