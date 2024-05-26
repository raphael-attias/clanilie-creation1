import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // ...
  ],
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
