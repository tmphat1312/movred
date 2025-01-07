import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "layout-bg": "var(--layout-background)",
        "layout-fg": "var(--layout-foreground)",
        "link-hover": "var(--link-hover)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
} satisfies Config;
