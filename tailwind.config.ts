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
      boxShadow: {
        book: "0px 51px 80px 0px rgba(0, 0, 0, 0.04), 0px 21.307px 33.422px 0px rgba(0, 0, 0, 0.03), 0px 11.392px 17.869px 0px rgba(0, 0, 0, 0.02), 0px 6.386px 10.017px 0px rgba(0, 0, 0, 0.02), 0px 3.392px 5.32px 0px rgba(0, 0, 0, 0.02), 0px 1.411px 2.214px 0px rgba(0, 0, 0, 0.01)",
      },
    },
  },
  plugins: [],
};
export default config;
