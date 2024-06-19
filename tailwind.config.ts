import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#F3F7EC",
      azul: "#1A2130",
      black: "#121212",
      gold: "#C7A438",
      red: "#D04848",
      green: "#81A263"
    },
    fontWeight: {
      light: '100',
      regular: '400',
      bold: '700',
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
export default config;
