/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#fafaf9",
          dark: "#0c0a09",
        },
        ink: {
          DEFAULT: "#1c1917",
          dark: "#f5f5f4",
        },
        muted: {
          DEFAULT: "#78716c",
          dark: "#a8a29e",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};