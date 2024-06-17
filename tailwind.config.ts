import { title } from "process";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2A233C",
        titleColor: "#CAC9CD",
        textColor: "#E7E3FC"
      }
    },
  },
  plugins: [],
};
export default config;