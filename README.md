# blackcincau-web-next

Next.js website for Black Cincau (CV Ambar Sari), replacing the WordPress site at blackcincau.my.id. Business context and copy rules are in `../CLAUDE.md`; the shared vocabulary is in `../CONTEXT.md`.

## Commands

```
npm run dev        local preview at http://localhost:3000
npm run build      production build (all pages are static)
npm run test       tests for the inquiry message builder
npm run lint       ESLint
npm run todos      list the placeholder commercial facts still to replace
```

## Before this goes in front of buyers

`src/content/facts.ts` holds the commercial terms (MOQ, packaging, container loading, capacity, lead time, Incoterms, port, payment, HS code, shelf life, samples). **Every value there is an invented placeholder.** Replace each line marked `TODO` with the real value in all three languages. The same values feed the commercial terms tables and the FAQ answers, so nothing else needs editing.

## Where things are

```
src/content/company.ts     confirmed company and contact details, export destinations
src/content/products.ts    the three products and their published specs
src/content/facts.ts       commercial terms (placeholders, see above)
src/i18n/config.ts         languages, and which of them are switched on
src/i18n/dictionaries/     all page text: en.ts, ms.ts (draft), ar.ts (draft)
src/app/[lang]/            pages: home, products/[slug], about, faq, contact
src/app/sitemap.ts         sitemap.xml          src/app/robots.ts   robots.txt
src/lib/seo.ts             page metadata and structured data helpers
src/lib/inquiry.ts         builds the WhatsApp / email inquiry message
src/assets/img/            the 12 images from the old site
```

## Languages

Pages live under a language prefix (`/en/...`); `/` redirects to `/en`. Malay and Arabic are fully drafted but switched off. To publish one after a native speaker has reviewed its dictionary and its values in `facts.ts`, add it to `enabledLocales` in `src/i18n/config.ts`. The language switcher, hreflang tags and sitemap pick it up automatically, and Arabic renders right-to-left.

## Environment variables (both optional)

- `NEXT_PUBLIC_SITE_URL` — the public address, used for canonical links and the sitemap. Defaults to `https://blackcincau.my.id`.
- `NEXT_PUBLIC_GSC_VERIFICATION` — the Google Search Console verification code.

## Deploying

Works on Vercel or Netlify with their default Next.js settings; no configuration file is needed. Nothing is deployed yet.
