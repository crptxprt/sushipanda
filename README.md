# Sushi Panda

Vite + React project for the Sushi Panda brand landing and catering pages.

This README is the project memory for future Codex chats. Read it before changing routing, deployment, domains, footer logic, or large visual sections.

## Current Status

- Local path: `/Users/alexandrugabara/Documents/New project 9/sushipanda`
- Local dev URL: `http://localhost:5173/`
- Main working branch: `codex/sushipanda-pr-view`
- GitHub repo: `https://github.com/crptxprt/sushipanda`
- Current deploy: Vercel project `sushipanda`
- Production domains connected in Vercel:
  - `sushipanda.rs`
  - `www.sushipanda.rs`
  - `sushipanda.vercel.app`
- DNS provider: Cloudflare
- Registrar: Loopia

## Local Development

Install dependencies:

```bash
npm install
```

Run local dev server:

```bash
npm run dev -- --host 0.0.0.0
```

Build check:

```bash
npm run build
```

## Git Workflow

Current remotes:

- `origin` -> `https://github.com/crptxprt/sushipanda.git`
- `trend` -> `https://github.com/trend0xai/sushipanda.git`

Use `origin` for the active production/Vercel flow:

```bash
git push origin codex/sushipanda-pr-view
```

Vercel is connected to GitHub and currently deploys from `crptxprt/sushipanda`, branch `codex/sushipanda-pr-view`.

After meaningful changes:

```bash
npm run build
git add .
git commit -m "Describe change"
git push origin codex/sushipanda-pr-view
```

## Domain Setup

Cloudflare nameservers set in Loopia:

- `jasmine.ns.cloudflare.com`
- `sterling.ns.cloudflare.com`

Cloudflare DNS records for Vercel:

- `sushipanda.rs` -> CNAME `053119fa6e84b43d.vercel-dns-017.com`
- `www.sushipanda.rs` -> CNAME `053119fa6e84b43d.vercel-dns-017.com`

Important:

- These records should be DNS only if Vercel asks for that during validation.
- After validation, Vercel may still need time to generate SSL.
- If the wrong page appears on `sushipanda.rs`, first check app routing, not DNS.

## Routing

The domain root must open the brand landing.

Current route rules in [src/App.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/App.tsx>):

- `/` -> `SushiPanda`
- `/sushi-panda` -> `SushiPanda`
- `/ketering` -> `Home` catering landing
- `/ketering-proslave` -> catering proslave page
- `/ketering-slave` -> catering slave page
- `/ketering-devojacko-momacko` -> catering devojacko/momacko page
- `/ketering-korporativni` -> catering corporate page
- `/sushi-chef` -> sushi chef catering page
- `/galerija` -> catering gallery
- `/o-nama` -> catering about
- `/kontakt` -> catering contact

Important:

- `sushipanda.rs` should show the brand landing, not catering.
- Catering currently still exists inside the same app.
- Future target: move catering to `catering.sushipanda.rs`.
- Vercel/domain settings cannot point directly to a hash route like `#/sushi-panda`; the root route in code must be correct.

## Planned Domain Split

Desired final structure:

- `sushipanda.rs` -> Sushi Panda brand landing
- `www.sushipanda.rs` -> same brand landing
- `catering.sushipanda.rs` -> catering site

Current state:

- Brand landing is now the root route.
- Catering is still in the same codebase and accessible by `/ketering` and the catering routes.
- The app is ready for a second Vercel project for `catering.sushipanda.rs`.

### Catering Vercel Project Setup

Create a separate Vercel project using the same repository and production branch
(`codex/sushipanda-pr-view`). In that project's Environment Variables, add:

```text
VITE_SITE=catering
```

This makes `/` render the catering home page in that deployment. The main
`sushipanda` Vercel project must not have this variable, so `/` continues to
render the Sushi Panda brand landing.

Then add `catering.sushipanda.rs` to the new Vercel project. In Cloudflare,
create a `CNAME` record with name `catering` and the target shown by Vercel.
Keep it **DNS only** (grey cloud) until Vercel completes domain verification
and SSL provisioning.

## Visual Direction

Overall direction:

- premium
- clean
- editorial
- minimal
- airy
- high-end sushi/catering feel

Avoid:

- generic restaurant template look
- heavy forms
- visual clutter
- corporate SaaS feeling
- decorative Japanese cliches
- replacing the dark catering footer with the brand footer

## Contact Details

Use consistently across the project:

- Phone: `+381 66 404 049`
- WhatsApp: `https://wa.me/38166404049?text=Zdravo%2C%20zanima%20me%20sushi%20catering%20za%20doga%C4%91aj.`
- Instagram: `@sushipandaofficial`
- Instagram URL: `https://www.instagram.com/sushipandaofficial`
- TikTok: `https://www.tiktok.com/@pandasushikg`
- Location: `Karađorđeva 47, Kragujevac, Srbija`

## Footer Rules

There are two footer directions:

- Brand landing uses the light/default footer.
- Catering pages use the dark catering footer: `Footer variant="catering"`.

Current expectation:

- Light/default footer:
  - `/`
  - `/sushi-panda`
- Dark catering footer:
  - `/ketering`
  - `/ketering-proslave`
  - `/ketering-slave`
  - `/ketering-devojacko-momacko`
  - `/ketering-korporativni`
  - `/sushi-chef`
  - `/galerija`
  - `/o-nama`
  - `/kontakt`

Do not accidentally make all pages use the same footer.

## Brand Landing Notes

Main file: [src/pages/SushiPanda.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/pages/SushiPanda.tsx>)

The brand landing has a separate visual/typography system from catering.

Important hero state:

- Panda/map composition has been tuned many times.
- Map readability is priority over panda size.
- Panda should sit below city labels and not cover Jagodina.
- Current announcement card text should remain:

```text
🐼 Jagodina

Panda je već na putu.

Otvaranje uskoro.
```

Important content block:

- Section text around `Ne pravimo samo sushi. Stvaramo UMETNOST` was reduced.
- Roll image was enlarged.
- User wanted the roll image to feel noticeably larger than before.

## Catering Notes

Main catering home file: [src/pages/Home.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/pages/Home.tsx>)

Catering pages should keep a premium editorial style:

- serif display headings
- soft white/pink contact area
- quick contact flow
- no heavy inquiry form
- dark footer

Contact section on catering home:

- Main background should stay white.
- The contact/info card can stay soft pink.
- User preferred this direction after discussion.

Package `Zatraži ponudu` buttons:

- In [src/components/CateringPageLayout.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/components/CateringPageLayout.tsx>), buttons should anchor-scroll to the same page contact block.
- Contact block id: `catering-contact`.
- Do not navigate users away to `/kontakt` from those package CTAs.

Sushi chef page:

- [src/pages/SushiChef.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/pages/SushiChef.tsx>) contact block right side was changed to match the other catering pages.
- It should use the `Informacije` card with telephone, WhatsApp, and location instead of the old `Javi nam se` text block.

## Slava Cards

The `Odaberi tip slave` cards were reworked.

Keep:

- strong gradient overlay over photos
- text in lower-left area
- title white
- description white/readable
- no POSNO/MRSNO badges
- short 2-3 line descriptions
- premium editorial cover feeling

Current descriptions:

```text
Posna slava:
Sushi meni prilagođen posnim slavama, uz lagane ukuse i elegantnu prezentaciju za vašu trpezu.

Mrsna slava:
Domaći suhomesnati proizvodi, sirevi i slavski specijaliteti za bogatu i elegantnu slavsku trpezu.
```

Quote color below slava section:

```css
color: #000;
opacity: 0.25;
```

## Typography System

Current font direction:

- Serif display: `Cormorant Garamond`
- Sans/body: `Inter`

Important:

- Catering pages use shared catering typography scale.
- `/` and `/sushi-panda` brand landing can have its own separate typography.
- Do not normalize the brand landing together with catering pages unless specifically requested.

Catering typography classes in [src/index.css](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/index.css>):

- `.catering-hero-display`
- `.catering-section-display`
- `.catering-section-display-medium`
- `.catering-section-display-small`
- `.catering-card-title`
- `.catering-contact-display`
- `.catering-body`
- `.catering-body-small`

## Key Files

- App routing: [src/App.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/App.tsx>)
- Router helpers: [src/lib/router.ts](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/lib/router.ts>)
- Brand landing: [src/pages/SushiPanda.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/pages/SushiPanda.tsx>)
- Catering home: [src/pages/Home.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/pages/Home.tsx>)
- Catering layout: [src/components/CateringPageLayout.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/components/CateringPageLayout.tsx>)
- Sushi chef: [src/pages/SushiChef.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/pages/SushiChef.tsx>)
- Contact page: [src/pages/Kontakt.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/pages/Kontakt.tsx>)
- About page: [src/pages/ONama.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/pages/ONama.tsx>)
- Gallery: [src/pages/Galerija.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/pages/Galerija.tsx>)
- Header: [src/components/Header.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/components/Header.tsx>)
- Footer: [src/components/Footer.tsx](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/components/Footer.tsx>)
- Global CSS: [src/index.css](</Users/alexandrugabara/Documents/New project 9/sushipanda/src/index.css>)

## Recent Completed Work

- Connected project to GitHub repo `crptxprt/sushipanda`.
- Deployed on Vercel.
- Connected `sushipanda.rs` and `www.sushipanda.rs` to Vercel.
- Changed root route `/` from catering home to brand landing.
- Left catering available at `/ketering`.
- Made white/default footer full width.
- Reworked catering contact section on homepage to white section with soft pink contact card.
- Updated Sushi Chef contact block to match other catering contact cards.
- Made catering package CTA buttons anchor to same-page contact block.
- Adjusted brand landing typography block so roll image is larger and text is smaller.

## Do Not Break

- `sushipanda.rs` must open the brand landing.
- Do not point `sushipanda.rs` back to catering home.
- Do not use Vercel domain settings to solve an in-app routing problem.
- Do not make catering pages use the light brand footer.
- Do not make `/sushi-panda` typography follow catering typography rules.
- Do not remove the Jagodina announcement unless user explicitly asks.
- Do not add heavy forms to catering inquiry flow.

## Ready-To-Paste Context For A New Chat

```text
Работаем в:
/Users/alexandrugabara/Documents/New project 9/sushipanda

Локально:
http://localhost:5173/

Ветка:
codex/sushipanda-pr-view

GitHub:
https://github.com/crptxprt/sushipanda

Пуш:
git push origin codex/sushipanda-pr-view

Vercel:
project sushipanda
production сейчас с ветки codex/sushipanda-pr-view

Домены:
sushipanda.rs
www.sushipanda.rs

Cloudflare DNS:
sushipanda.rs CNAME 053119fa6e84b43d.vercel-dns-017.com
www.sushipanda.rs CNAME 053119fa6e84b43d.vercel-dns-017.com

Важно по роутингу:
/ и /sushi-panda = бренд-лендинг SushiPanda
/ketering = кейтеринг главная
остальные /ketering-* = страницы кейтеринга

Будущая цель:
sushipanda.rs = бренд-лендинг
catering.sushipanda.rs = кейтеринг

Важно по футерам:
бренд-лендинг = светлый футер
кейтеринг = черный Footer variant="catering"

Стиль:
premium, clean, editorial, minimal, airy

Контакты:
+381 66 404 049
WhatsApp: https://wa.me/38166404049?text=Zdravo%2C%20zanima%20me%20sushi%20catering%20za%20doga%C4%91aj.
Instagram: @sushipandaofficial
TikTok: https://www.tiktok.com/@pandasushikg
Karađorđeva 47, Kragujevac, Srbija

Перед изменениями обязательно прочитать README.md.
```
