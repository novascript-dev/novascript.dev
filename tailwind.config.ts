import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
      backgroundImage: {
        "shine-gradient":
          "linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%)",
        "natural-gradient":
          "linear-gradient(180deg, rgba(229, 125, 144, .8), rgba(33, 27, 23, 1))",
      },
      colors: {
        primary: "rgb(33, 27, 23)",
        "natural-pink-500": "#E57D90",
        "natural-pink-700": "#BF5B6F",
        "natural-white": "#FFF3F6",
        "natural-yello": "#F7F5DD",
        "natural-pink": "#f2ced8",
        "natural-purple": "#AA748F",
        "modern-black": "#2a292b",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "0" },
          "60%": { backgroundPosition: "180px" },
          "100%": { backgroundPosition: "180px" },
        },
      },
      animation: {
        shine: "shine 3s infinite linear",
      },
    },
  },
  plugins: [],
};
export default config;
