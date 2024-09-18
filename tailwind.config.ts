import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
      serif: ["Noto Serif JP", "serif"],
      aboreto: ["Aboreto", "serif"],
    },
    extend: {
      backgroundSize: {
        customSize: "150px 150px",
      },
      backgroundImage: {
        customSpecial: "url(/birth-pin-icon.png), url(/special-day.png)",
        specialDay: "url('/special-day.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        defaultBackGround: "#FFFEFA",
        titleText: "#644C44",
        writingText: "#8D6A5F",
        pin: "#FEB69F",
      },
    },
  },
  plugins: [],
};
export default config;
