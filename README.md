# HUSA website

A local Astro website for the Howard University Student Association, prepared for GitHub collaboration and Cloudflare Pages. Original HUSA/Wix photography and seal only; no AI images.

Public source repository: [kroix-ovo/HUSA2627_Website](https://github.com/kroix-ovo/HUSA2627_Website).

## Run locally

Install Node.js 24 (the project pins 24.19.0) and pnpm 11.25.0. Then, in this folder:

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

Open the URL printed by Astro, normally `http://127.0.0.1:4321/`. The server binds to your own computer. Stop it with Ctrl+C. Use a second terminal for Git while it runs.

## Where to edit

| Change | File or folder |
|---|---|
| Resource contacts and categories | `src/content/resources.ts` |
| Department names, leadership, and emails | `src/content/departments.ts` |
| Platform commitments and dated evidence | `src/content/platform.ts` |
| Public contacts and navigation | `src/content/site.ts` |
| Shared colors, spacing, responsive rules | `src/styles/global.css` |
| Page composition | `src/pages/` |
| Reusable header, footer, and sections | `src/components/` |
| AI design guidance | `.agents/skills/` |

Content data and templates are separate so the team can make a small content contribution without rewriting layouts. Add verified platform evidence as `{ title, href, date }` records rather than inventing completion percentages. Search runs locally over the site's content; no search service or account is needed.

## Checks

```powershell
pnpm check
pnpm test
pnpm format:check
pnpm build
node scripts/verify-build.mjs
pnpm preview
```

`pnpm format` formats source and JavaScript tests. Build verification checks generated internal routes, anchors, assets, and Wix placeholder leakage. The GitHub workflow runs the same checks when the source is pushed. Browser testing is still needed for layout and interactions.

## Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages with:

- Framework: Astro, static output.
- Production branch: `main`.
- Build command: `pnpm build`.
- Output directory: `dist`.
- Node version: use `.node-version`; pnpm version is declared in `package.json`.
- Feature branch pushes produce previews when configured; production-branch pushes publish the website.

No Cloudflare credentials are required in source. Cloudflare hosting is not configured yet. Confirm the Cloudflare account owner and actual domain before connection.

The current build deliberately uses `noindex` in page metadata, `robots.txt`, and `_headers`. Remove those three preview-only indexing controls before the approved public release, set the real canonical domain in Astro, and add a sitemap. Owner-review content and verify redirects against published Wix URLs before changing DNS.

The support buttons open the existing Case Compass Google Form. Email and phone links open the user's mail/phone application. There is no fake local submission endpoint and no stored student submission data.

See `docs/content-review.md` for source limitations, `docs/asset-provenance.md` for imagery, and `docs/team-workflow.md` for the teaching plan.
