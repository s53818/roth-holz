// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// Alle Seiten werden vorgerendert. Der Node-Adapter wird nur für die
// Server-Endpunkte (Astro Actions: Kontaktformular, später Login) benötigt.
export default defineConfig({
  site: 'https://www.holz-roth.at',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sitemap({
      // /kontakt ist nur der serverseitige Fallback des Formulars ohne JavaScript
      filter: (page) => !page.includes('/kontakt'),
    }),
  ],
  image: {
    // Platzhalter: nur lokale Bilder, keine externen Requests
    domains: [],
  },
});
