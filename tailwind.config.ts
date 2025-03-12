import breakpoint from "./src/constants/breakpoint.constant";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: `${breakpoint.SM}rem`,
      md: `${breakpoint.MD}rem`,
      lg: `${breakpoint.LG}rem`,
      xl: `${breakpoint.XL}rem`,
      "2xl": `${breakpoint["2XL"]}rem`,
    },
    extend: {
      fontFamily: {
        riot: ["var(--font-riot)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        black: "var(--black)",
        caption: "var(--caption)",
        blue: "var(--blue)",
        "dark-blue": "var(--dark-blue)",
        red: "var(--red)",
        gold: "var(--gold)",
        "dark-gold": "var(--dark-gold)",
        hover: "var(--hover-background)",
      },
    },
  },
  plugins: [],
};
export default config;
