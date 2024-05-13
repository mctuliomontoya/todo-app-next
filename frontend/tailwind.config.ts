import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "border-spin": "border-spin 8s linear infinite",
      },
      colors: {
        bone: "#f8f4dd",
        "brand-purple": "#7b5ea7",
        "ui-grey-300": "#76787f",
        "ui-disabled": "#58544f",
        "ui-yellow": "#f2bd4c",
        "ui-base-200": "#1f1c1d",
        "ui-base-300": "#0f0d0e",
        "ui-green": "#0ba95b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
