import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        letterBackground: {
          50: "#fefce8",
          100: "#fef0aa",
          200: "#223127",
        },
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
