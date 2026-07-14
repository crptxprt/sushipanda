import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isCatering = env.VITE_SITE === 'catering';
  const seo = isCatering
    ? {
        title: 'Sushi Panda Catering — Sushi koji pravi događaj',
        description: 'Premium sushi catering u Kragujevcu za proslave, slave, devojačke, momačke i korporativne evente.',
        url: 'https://catering.sushipanda.rs/',
        image: 'https://catering.sushipanda.rs/og-catering-hero.png',
      }
    : {
        title: 'Sushi Panda — Sushi dostava koja osvaja Srbiju',
        description: 'Premijalna sushi dostava u Kragujevcu i Kraljevu. Uskoro stižemo i u Jagodinu.',
        url: 'https://sushipanda.rs/',
        image: 'https://sushipanda.rs/og-sushipanda-hero.png',
      };

  return {
    plugins: [
      react(),
      {
        name: 'sushi-panda-seo',
        transformIndexHtml(html) {
          return html
            .replaceAll('__SEO_TITLE__', seo.title)
            .replaceAll('__SEO_DESCRIPTION__', seo.description)
            .replaceAll('__SEO_URL__', seo.url)
            .replaceAll('__SEO_IMAGE__', seo.image);
        },
      },
    ],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
