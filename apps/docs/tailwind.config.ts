import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/libraries/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@chameleon-kit/ui/src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "rgb(var(--primary-100))",
          200: "rgb(var(--primary-200))",
          300: "rgb(var(--primary-300))",
          400: "rgb(var(--primary-400))",
          500: "rgb(var(--primary-500))",
          600: "rgb(var(--primary-600))",
          700: "rgb(var(--primary-700))",
          800: "rgb(var(--primary-800))",
          900: "rgb(var(--primary-900))",
        },
        surface: {
          100: "rgb(var(--surface-100))",
          200: "rgb(var(--surface-200))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
