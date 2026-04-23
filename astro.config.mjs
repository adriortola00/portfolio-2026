import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://adriortola00.github.io', 
   
  base: '/portfolio-2026',

  vite: {
    plugins: [tailwindcss()],
  },
  
  compressHTML: true,
  integrations: [sitemap()]
});
