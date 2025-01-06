import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sohne"'],
        "neue-bit": ['"Neue Bit"'],
      },
      colors: {
        light: {
          background: "#FFFFFF",
          text: "#E24242",
          selection: "#CD05144C",
        },
        dark: {
          background: "#650201",
          text: "#EBEBEB",
          selection: "#CD05144C",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
