import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://bilaalahmed.com",
  integrations: [mdx()],
  vite: {
    css: {
      postcss: {},
    },
  },
});