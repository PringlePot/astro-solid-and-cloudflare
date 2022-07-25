import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Enable Solid to support Solid JSX components.
  integrations: [solid()],
  adapter: cloudflare()
});