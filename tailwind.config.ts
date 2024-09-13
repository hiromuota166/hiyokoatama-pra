import type { Config } from "tailwindcss";
import Image from "next/image";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        customSize: "150px 150px",
      },
      backgroundImage: {
        customBackGround: "url('/BartuPinIcon.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        defaultBackGround: "#FFFEFA",
      },
    },
  },
  plugins: [],
};
export default config;
