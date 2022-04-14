import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://podcast.allegro.tech/',
    integrations: [svelte(), sitemap()]
});