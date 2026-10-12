import { defineConfig } from 'astro/config';

// Static files are portable to Cloudflare Pages; no server adapter is needed.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
