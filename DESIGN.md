# HUSA design system

This file describes the design the site actually uses. Read it before changing how anything looks. When you change the design on purpose, update this file in the same commit.

Last updated: October 13, 2026.

## Where the look comes from

| Source | What we take from it | What we don't take |
|---|---|---|
| **The original HUSA Wix site** (the web design committee liked it) | The look: navy menu bar, centered seal hero, navy title boxes, the red ALL IN slogan, navy panels beside photos, the slideshow, the footer branch bar, Montserrat | Its placeholder text and links, the broken footer social links, the "© 2035" footer |
| **Harvard Undergraduate Association** ([thehua.org](https://www.thehua.org/)) | The page structure: welcome hero, then team, structure and guides, then events and social, then "Take Part" | Harvard's name, colors, logo, photos, or wording |

## Hard rules

1. **No AI-generated images.** Use only original HUSA/Wix photos and the HUSA seal.
2. **No photos of people** until the project lead approves specific photos. Until then we use crops of the campus photo.
3. **No invented facts.** No made-up names, dates, deadlines, statuses, or contact details. If something isn't confirmed, show an honest empty state (for example, "No upcoming dates are listed yet.").
4. **Facts live in `src/content/`**, not in page files. Leadership, contacts and office hours are in `src/content/site.ts`.

Confirmed facts: the current administration is the **66th**. The President is **Jeremy Allman** and the Vice President is **Ryanna Mowatt** (both confirmed October 13, 2026).

## Colors

All colors are tokens at the top of `src/styles/global.css`. Change them there, never in a single component.

| Token | Value | Use it for |
|---|---|---|
| `--color-brand` | `#081B45` (navy) | Header, footer, hero overlay, title boxes, buttons, headings |
| `--color-accent` | `#A32638` (red) | Small highlights only: ALL IN / Win in the slogan, the "Take Part" heading, list numbers, arrows |
| `--color-text` | `#17243A` | Body text |
| `--color-muted` | `#4B5B70` | Secondary text |
| `--color-surface` | `#FFFFFF` | Page background |
| `--color-surface-alt` | `#F3F5F8` | Alternating gray sections |
| `--color-border` | `#D6DDE7` | Divider lines |

On navy backgrounds, use white text and light blue-gray (`#C1CEE1` / `#D9E3F1`) for secondary text, and use white focus outlines. Don't put red text on navy; the contrast is too low.

## Type

- **Font:** Montserrat for everything, self-hosted from npm (`@fontsource-variable/montserrat`, upright and italic). It's loaded in `src/layouts/Layout.astro`. Montserrat was reported as the HUSA brand font, but the brand owner still needs to confirm it.
- **Body:** 16px, line height about 1.7.
- **Minimum size:** 12px for anything at all; 16px for menu links.
- **Headings:** weight 700–800, normal letter-spacing (never tighter than −0.02em), no forced line breaks.
- **Uppercase** only for short labels: the hero, footer headings, and the small section labels.

## Spacing and shape

- Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64, 96px.
- Content width: `--content-max` (72rem). Paragraphs: `--reading-max` (65ch).
- Corners: `--radius-control` (0.375rem) for buttons and inputs, `--radius-panel` (0.5rem) for panels and slides.

## Building blocks

| Piece | File | Notes |
|---|---|---|
| Header | `src/components/Header.astro` | Navy bar with the seal, 16px menu, white Search button. Below 1080px the menu goes behind a "Menu" button. That 1080px appears in both `global.css` and `Header.astro`, so change both together. |
| Footer | `src/components/Footer.astro` | Explore, Stay connected and Get in touch columns, then the Senate / UGSA / Judiciary branch bar. |
| Inner-page title band | `src/components/PageIntro.astro` | Navy band with the page title. Every page except the homepage uses it. |
| Slideshow | `src/components/PathwaySlider.astro` | Homepage "Start here" slides. Accessibility rules are under Motion below. |
| Title box | `.title-bar` class | Navy box with white text, as on Wix ("Current Initiatives", "Stay Updated"). Use at most two per page. |
| Platform list | `.platform-list` / `.platform-row` | The six numbered pillars. |
| Panels | `.updates-panel`, `.take-part` | Simple bordered panels. Don't turn every section into a grid of cards. |

## Homepage order

1. **Hero:** campus photo, seal, "66th Administration", "The Howard University Student Association", "Official website", and two buttons (Herd Hub, Track our impact).
2. **Start here slideshow:** Meet HUSA 66, Department Breakdown, The Herd Hub.
3. **ALL IN slogan** with the "Track our impact!" button.
4. **Current Initiatives:** the six platform pillars, with a link to the live ALL IN tracker for progress. Don't show local progress statuses unless they're confirmed and dated.
5. **Stay Updated:** upcoming events (honest empty state for now) and Instagram.
6. **Take Part:** "Help us improve" (Case Compass) and "Join the team".

## Motion

Keep motion light and purposeful. No animation libraries.

- **Hero:** its lines fade up once when the page loads.
- **Sections:** marked `.reveal`, they fade up once as they scroll into view. The script adds this only when the browser supports it and the user hasn't asked for reduced motion, so content is never stuck invisible.
- **Hover:** arrows nudge forward, and panels lift slightly.
- **Slideshow:**
  - Auto-advances every 7 seconds with a crossfade.
  - Stops while the mouse is over it or keyboard focus is inside it.
  - Has a visible Pause/Play button.
  - Never auto-advances for people whose device asks for reduced motion.
  - Shows all slides stacked if JavaScript doesn't run.
  - Hidden slides can't receive keyboard focus.
- **Reduced motion:** every animation and transition turns off.

## Accessibility checklist

These are review targets, not a claim of compliance.

- Check every change at 360px, 768px and 1440px wide, and at 200% zoom.
- Visible focus on everything, a skip link, one `h1` per page, headings in order.
- Touch targets at least 44px.
- Contrast at least 4.5:1 for normal text and 3:1 for large text and control borders.
- Every image needs either a real description or `alt=""` if it's decorative.

## How to check your change

```bash
pnpm format && pnpm check && pnpm test && pnpm build && node scripts/verify-build.mjs
```

Then preview the site and look at it at all three widths.

## Still open

- Brand owner to confirm Montserrat and the colors.
- Approved photos (including any of people) and permission to use them.
- Real TikTok, YouTube and Legislative links (the Wix ones were placeholders).
- Event records for the events section.
- Final menu labels.
