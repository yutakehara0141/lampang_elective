import { defineConfig } from 'astro/config';

// 静的サイトとして書き出します（Vercel / Netlify / Cloudflare Pages どこでも公開可）
export default defineConfig({
  output: 'static',
});
