import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0E2A47",
        sand: "#F4EFE6",
        coast: "#D7263D",
        seafoam: "#A8D5BA"
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      maxWidth: {
        container: "1200px"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(14, 42, 71, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
