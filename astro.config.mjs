import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://seokwon-choi.vercel.app', // TODO: 커스텀 도메인 연결 후 교체 (replace once a custom domain is connected)
  integrations: [mdx()],
});
