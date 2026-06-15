# Sushi Panda Catering

Premium sushi catering website for Sushi Panda, built as a custom Vite + React project.

## Working Context

- Local path: `/Users/alexandrugabara/Documents/New project 9/sushipanda`
- Main working branch: `codex/sushipanda-pr-view`
- Active remote for pushes: `trend`
- Push command: `git push trend codex/sushipanda-pr-view`
- Local preview: `http://localhost:5173/`

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

## Git Remotes

Current remotes:

- `origin` → `https://github.com/crptxprt/sushipanda.git`
- `trend` → `https://github.com/trend0xai/sushipanda.git`

Main deployment/testing flow during this phase has been through `trend`.

## Current Brand / UX Direction

Visual direction:

- premium
- clean
- editorial
- minimal
- airy, high-end catering feel

Do not drift into:

- generic restaurant-template look
- corporate SaaS feeling
- heavy forms
- visual clutter
- decorative Japanese clichés

Preferred contact style:

- WhatsApp + phone
- fast inquiry flow
- no heavy lead form on landing page

## Current Contact Details

- Phone: `+381 66 404 049`
- WhatsApp: same number
- Instagram: `@sushipandaofficial`
- Instagram URL: `https://www.instagram.com/sushipandaofficial`
- Location: `Karađorđeva 47, Kragujevac, Srbija`

## What Has Already Been Reworked

Homepage:

- premium/editorial hero rebuilt
- many visuals replaced with sushi-focused imagery
- stronger offer and CTA structure
- `Zašto Sushi Panda` reworked
- black ticker removed
- `Vrste ketering evenata` reworked
- `Sushi chef` block rebuilt multiple times
- right side chef slider with 2 chef portraits + autoplay
- `Planiraš događaj?` turned into quick-contact style
- footer simplified and cleaned
- typography polish applied

Contact page:

- rebuilt into premium catering contact/booking page
- no classic form-first layout
- hero aligned with inner-page hero system
- clean contact card with phone / WhatsApp / location
- visual/editorial right side

About page:

- rebuilt around real team members
- people-first trust page
- owner and chef cards added
- sea/irrelevant stock visual removed

Inner pages:

- hero sections aligned into one system for `O nama`, `Kontakt`, `Galerija`
- typography system expanded across site

## Typography System

Current font direction:

- Serif display: `Cormorant Garamond`
- Sans/body: `Inter`

Typography work already applied:

- larger editorial hero titles
- stronger section displays
- refined italic emphasis
- wider letter spacing for small uppercase labels

Files central to typography:

- [src/index.css](/Users/alexandrugabara/Documents/New%20project%209/sushipanda/src/index.css)
- [tailwind.config.js](/Users/alexandrugabara/Documents/New%20project%209/sushipanda/tailwind.config.js)

## Key Files

- Homepage: [src/pages/Home.tsx](/Users/alexandrugabara/Documents/New%20project%209/sushipanda/src/pages/Home.tsx)
- Contact: [src/pages/Kontakt.tsx](/Users/alexandrugabara/Documents/New%20project%209/sushipanda/src/pages/Kontakt.tsx)
- About: [src/pages/ONama.tsx](/Users/alexandrugabara/Documents/New%20project%209/sushipanda/src/pages/ONama.tsx)
- Gallery: [src/pages/Galerija.tsx](/Users/alexandrugabara/Documents/New%20project%209/sushipanda/src/pages/Galerija.tsx)
- Sushi chef page: [src/pages/SushiChef.tsx](/Users/alexandrugabara/Documents/New%20project%209/sushipanda/src/pages/SushiChef.tsx)
- Catering template layout: [src/components/CateringPageLayout.tsx](/Users/alexandrugabara/Documents/New%20project%209/sushipanda/src/components/CateringPageLayout.tsx)
- Header: [src/components/Header.tsx](/Users/alexandrugabara/Documents/New%20project%209/sushipanda/src/components/Header.tsx)
- Footer: [src/components/Footer.tsx](/Users/alexandrugabara/Documents/New%20project%209/sushipanda/src/components/Footer.tsx)

## Workflow Notes

- After each meaningful change, commit + push immediately.
- If a block feels weak, rebuild it properly instead of micro-tweaking.
- Keep all contact data consistent across the entire site.
- Preserve layout unless there is a clear reason to improve it.
- Always check mobile/tablet/desktop after visual changes.

## Ready-to-Paste Context For A New Chat

Use this if you open a fresh chat and want instant continuity:

```text
Работаем в /Users/alexandrugabara/Documents/New project 9/sushipanda
Ветка: codex/sushipanda-pr-view
Пушим через: git push trend codex/sushipanda-pr-view
Локальный просмотр: http://localhost:5173/

Стиль сайта:
- premium
- clean
- editorial
- minimal

Важно:
- без тяжелых форм
- лучше быстрый контакт: WhatsApp + телефон
- если блок слабый, пересобираем нормально, а не слегка правим
- не ломать ощущение воздуха и дорогого визуала

Актуальные контакты:
- +381 66 404 049
- @sushipandaofficial
- https://www.instagram.com/sushipandaofficial
- Karađorđeva 47, Kragujevac, Srbija

Что уже сделано:
- главная сильно переработана
- Kontakt переделан в premium catering contact page
- O nama переделана вокруг реальной команды
- hero-секции внутренних страниц приведены к одной системе
- typography polish уже сделан по всему сайту

Работаем локально и проверяем через localhost, не через Vercel.
```

## Latest Typography Commits

- `cad0476` — `Polish homepage typography system`
- `9540547` — `Extend typography polish across site`
