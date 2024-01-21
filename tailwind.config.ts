import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: "450px",
        md: "768px",
        lg: "1024px",
      },
      padding: {
        25: "25px",
        15: "15px",
      },
      gridColumn: {
        "span-1/12": "1/12",
        "span-1/4": "1/4",
      },
      colors: {
        primary: "#B51F1F",
        secondary: "#751414",
        dark_red: "#360909",
        light_red: "#FFCACA",
        black: "#000000",
        "light-black": "#222222",
        white: "#FFFFFF",
        gray: "#BDBDBD",
        "dark-gray": "#212121",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },
      fontWeight: {
        regular: "regular",
        medium: "medium",
        semibold: "semibold",
        bold: "bold",
      },
      fontSize: {
        // Dekstop
        "9xl": ["36px", { lineHeight: "46px" }],
        "4xl": ["48px", { lineHeight: "49px", fontWeight: "bold" }],
        "3xl": ["36px", { lineHeight: "42px", fontWeight: "bold" }],
        "2xl": ["30px", { lineHeight: "40px", fontWeight: "bold" }],
        xl: ["30px", { lineHeight: "40px", fontWeight: "bold" }],
        lg: ["21px", { lineHeight: "28px", fontWeight: "bold" }],
        base: ["16px", { lineHeight: "24px" }],
        sm: ["14px", { lineHeight: "24px" }],
        xs: ["12px", { lineHeight: "18px" }],
        // Mobile
        "4xl-mobile": ["36pt", { lineHeight: "40px", fontWeight: "bold" }],
        "3xl-mobile": ["30pt", { lineHeight: "31px", fontWeight: "bold" }],
        "2xl-mobile": ["24pt", { lineHeight: "25px", fontWeight: "bold" }],
        "xl-mobile": ["24pt", { lineHeight: "25px", fontWeight: "bold" }],
        "lg-mobile": ["18pt", { lineHeight: "24px", fontWeight: "bold" }],
        "sm-mobile": ["14pt", { lineHeight: "18px" }],
      },
      letterSpacing: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tw-elements/dist/plugin"),
    require("flowbite/plugin")
  ],

}
export default withMT(config)
