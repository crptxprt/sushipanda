import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

if (process.env.VITE_SITE !== 'catering') {
  process.exit(0);
}

const siteUrl = 'https://catering.sushipanda.rs';
const phone = '+38166404049';
const instagram = 'https://www.instagram.com/sushipandaofficial';

const pages = [
  {
    path: '/',
    title: 'Sushi ketering: Kragujevac, Kraljevo i Jagodina | Sushi Panda',
    description: 'Premium sushi ketering za firme, proslave, slave i događaje u Kragujevcu, Kraljevu i Jagodini. Live sushi chef, postavka i ponuda po meri.',
    h1: 'Sushi ketering za firme, proslave i događaje u Kragujevcu, Kraljevu i Jagodini',
    text: 'Sushi Panda organizuje premium sushi catering za privatne proslave, poslovne događaje, rođendane, slave i korporativne evente. Svaku ponudu prilagođavamo broju gostiju, lokaciji i načinu serviranja.',
  },
  {
    path: '/ketering-proslave',
    title: 'Sushi catering za proslave: Kragujevac, Kraljevo i Jagodina | Sushi Panda',
    description: 'Sushi catering za rođendane i privatne proslave u Kragujevcu, Kraljevu i Jagodini. Sveža priprema, elegantna postavka i ponuda po meri.',
    h1: 'Sushi catering za privatne proslave',
    text: 'Organizujemo sushi catering za rođendane, godišnjice i privatne proslave u Kragujevcu, Kraljevu i Jagodini.',
  },
  {
    path: '/ketering-slave',
    title: 'Sushi ketering za slave: Kragujevac, Kraljevo i Jagodina | Sushi Panda',
    description: 'Premium sushi ketering za slave u Kragujevcu, Kraljevu i Jagodini: pažljivo pripremljen meni, postavka i dostava za vaše goste.',
    h1: 'Sushi ketering za slave',
    text: 'Za slavsku trpezu pripremamo sushi meni prilagođen broju gostiju, ukusu i formatu događaja.',
  },
  {
    path: '/ketering-devojacko-momacko',
    title: 'Sushi catering za devojačko i momačko veče | Sushi Panda',
    description: 'Atraktivan sushi catering za devojačko i momačko veče u Kragujevcu, Kraljevu i Jagodini. Premium serving i ponuda po meri.',
    h1: 'Sushi catering za devojačko i momačko veče',
    text: 'Sushi Panda donosi živu pripremu, atraktivnu prezentaciju i ukuse koje gosti pamte dugo posle proslave.',
  },
  {
    path: '/ketering-korporativni',
    title: 'Ketering za firme: Kragujevac, Kraljevo i Jagodina | Sushi Panda',
    description: 'Premium sushi catering za firme i poslovne događaje u Kragujevcu, Kraljevu i Jagodini. Profesionalna usluga, postavka i ponuda po meri.',
    h1: 'Sushi ketering za firme i poslovne događaje',
    text: 'Za kompanije pripremamo premium sushi catering koji ostavlja trajan utisak na partnere, klijente i zaposlene.',
  },
  {
    path: '/sushi-chef',
    title: 'Sushi chef: Kragujevac, Kraljevo i Jagodina | Sushi Panda',
    description: 'Iznajmite sushi chef-a za događaj u Kragujevcu, Kraljevu ili Jagodini. Sveži sastojci, live priprema i interaktivno iskustvo za goste.',
    h1: 'Sushi chef na vašem događaju',
    text: 'Naš sushi chef dolazi sa kompletnom opremom i priprema autentični sushi koji postaje centralni deo večeri.',
  },
  {
    path: '/galerija',
    title: 'Galerija sushi catering događaja | Sushi Panda',
    description: 'Pogledajte galeriju Sushi Panda cateringa: premium sushi postavke, live chef i događaji u Kragujevcu, Kraljevu i Jagodini.',
    h1: 'Galerija sushi catering događaja',
    text: 'Od detalja na stolu do kompletnih event postavki, biramo kadrove koji pokazuju atmosferu, kvalitet usluge i prezentaciju.',
  },
  {
    path: '/o-nama',
    title: 'O Sushi Panda Catering timu | Kragujevac, Kraljevo i Jagodina',
    description: 'Upoznajte tim Sushi Panda Catering-a — kuvare i sushi majstore za proslave i poslovne događaje u Kragujevcu, Kraljevu i Jagodini.',
    h1: 'Tim koji stoji iza Sushi Panda cateringa',
    text: 'Od planiranja i pripreme do postavke na lokaciji, naš tim vodi svaki događaj pažljivo i profesionalno.',
  },
  {
    path: '/kontakt',
    title: 'Kontakt za sushi catering | Kragujevac, Kraljevo i Jagodina',
    description: 'Pošaljite upit za premium sushi catering, proslavu ili poslovni događaj u Kragujevcu, Kraljevu ili Jagodini.',
    h1: 'Kontaktirajte Sushi Panda Catering',
    text: 'Pošaljite nam informacije o broju gostiju, lokaciji i terminu, a mi ćemo pripremiti ponudu za vaš događaj.',
  },
];

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function seoMarkup(page) {
  const canonical = `${siteUrl}${page.path === '/' ? '/' : `${page.path}/`}`;
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: 'Sushi Panda Catering', inLanguage: 'sr-Latn' },
      { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Sushi Panda', url: `${siteUrl}/`, logo: `${siteUrl}/favicon-panda.png`, telephone: phone, sameAs: [instagram], address: { '@type': 'PostalAddress', streetAddress: 'Karađorđeva 47', addressLocality: 'Kragujevac', addressCountry: 'RS' } },
      { '@type': 'Service', '@id': `${canonical}#service`, name: 'Sushi ketering', serviceType: 'Sushi catering', provider: { '@id': `${siteUrl}/#organization` }, areaServed: [{ '@type': 'City', name: 'Kragujevac' }, { '@type': 'City', name: 'Kraljevo' }, { '@type': 'City', name: 'Jagodina' }] },
    ],
  }).replaceAll('<', '\\u003c');

  return `\n    <meta name="robots" content="index,follow,max-image-preview:large" />\n    <link rel="canonical" href="${canonical}" />\n    <script type="application/ld+json">${jsonLd}</script>`;
}

function replaceMeta(html, attribute, key, content) {
  const pattern = new RegExp(`<meta ${attribute}="${key}" content="[^"]*" />`);
  return html.replace(pattern, `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`);
}

function initialContent(page) {
  return `<main class="seo-prerender" style="max-width:960px;margin:0 auto;padding:48px 24px;font-family:Arial,sans-serif;line-height:1.6;color:#181214"><header><a href="/" aria-label="Sushi Panda Catering">Sushi Panda Catering</a><nav aria-label="Glavna navigacija"><a href="/ketering-proslave">Proslave</a> <a href="/ketering-slave">Slave</a> <a href="/ketering-devojacko-momacko">Devojačko i momačko</a> <a href="/ketering-korporativni">Ketering za firme</a> <a href="/sushi-chef">Sushi chef</a> <a href="/galerija">Galerija</a> <a href="/o-nama">O nama</a> <a href="/kontakt">Kontakt</a></nav></header><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.text)}</p><section><h2>Premium sushi catering po meri</h2><p>Radimo sa događajima od 10 do 50+ gostiju, uz mogućnost live sushi chef usluge, postavke i dostave.</p></section><section><h2>Područje usluge</h2><p>Radimo u Kragujevcu, Kraljevu i Jagodini. Za događaje u drugim gradovima kontaktirajte nas radi dogovora.</p></section><section><h2>Pošaljite upit</h2><p>Pozovite <a href="tel:+38166404049">+381 66 404 049</a> ili posetite <a href="/kontakt">kontakt stranicu</a> za ponudu.</p></section></main>`;
}

const distDir = join(process.cwd(), 'dist');
const baseHtml = await readFile(join(distDir, 'index.html'), 'utf8');

for (const page of pages) {
  const canonical = `${siteUrl}${page.path === '/' ? '/' : `${page.path}/`}`;
  let html = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`);

  html = replaceMeta(html, 'property', 'og:title', page.title);
  html = replaceMeta(html, 'property', 'og:description', page.description);
  html = replaceMeta(html, 'property', 'og:url', canonical);
  html = replaceMeta(html, 'name', 'twitter:title', page.title);
  html = replaceMeta(html, 'name', 'twitter:description', page.description)
    .replace('</head>', `${seoMarkup(page)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${initialContent(page)}</div>`);
  const output = page.path === '/' ? join(distDir, 'index.html') : join(distDir, page.path.slice(1), 'index.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
  .map((page) => `  <url><loc>${siteUrl}${page.path === '/' ? '/' : `${page.path}/`}</loc></url>`)
  .join('\n')}\n</urlset>\n`;

await writeFile(join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
await writeFile(join(distDir, 'sitemap.xml'), sitemap);
