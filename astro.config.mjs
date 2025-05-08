import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  prefetch: true,
  site: "https://code.tnsi.me",
  integrations: [react()],
  markdown: {
    shikiConfig: {
      theme: "rose-pine-moon",
    },
  },
  redirects: {
    "/about": "/pages/about"
  }
});
