import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://rinrodan.github.io",
  base: "/astro-practice",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }), 
    image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), react()]
});