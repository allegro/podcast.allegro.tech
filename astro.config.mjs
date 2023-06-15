import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://podcast.allegro.tech/',
    integrations: [sitemap()]
});