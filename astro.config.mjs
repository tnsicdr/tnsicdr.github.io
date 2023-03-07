import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: "https://code.tnsi.me",
  integrations: [
    react(),
    prefetch({
      throttle: 2,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "rose-pine-moon",
    },
  },
});
