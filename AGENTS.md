<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project notes

Read `README.md` for layout and commands, `../CLAUDE.md` for business rules and `../CONTEXT.md` for vocabulary.

- All visible text goes in `src/i18n/dictionaries/` in all three languages; `en.ts` defines the shape and TypeScript fails the build if `ms.ts` or `ar.ts` drift.
- Commercial facts belong only in `src/content/facts.ts`. Never write one into a dictionary or a page; FAQ answers take them as a parameter.
- Product specs in `src/content/products.ts` must match the table in `../CLAUDE.md`.
- Use logical CSS properties (`margin-inline`, `inset-inline-end`, `text-align: start`) so Arabic keeps working.
- All 12 images in `src/assets/img/` must stay in use on the site.
- After `next build`, restart `next start` before testing; a server left running from an older build serves stale 404s.
