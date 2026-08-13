import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://example.com', // TODO: 실제 도메인 연결 후 교체 (replace once a domain is connected)
  integrations: [mdx()],
});
