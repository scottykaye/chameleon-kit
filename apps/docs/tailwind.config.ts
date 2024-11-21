import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/libraries/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@chameleon-kit/ui/src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
