import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // ...
      },
      colors: {
        "my-green": "rgb(185, 225, 139)",
      },
    },
  },
  plugins: [],
};

export default config;
