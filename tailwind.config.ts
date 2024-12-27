import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This will catch all files in src
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        typing: "typing 3s steps(40, end) forwards",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },  // Changed from "max-width" to "100%" for better compatibility
        },
      },
    },
  },
  plugins: [],
} satisfies Config;