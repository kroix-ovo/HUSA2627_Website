# HUSA design direction

Status: local implementation direction, not an extracted official Howard brand specification. Confirm asset rights and final content before publication. The user explicitly requires no AI images. Use original Wix/HUSA photography and the original HUSA seal only; do not generate or substitute synthetic images.

## Identity and hierarchy

Build a recognizable Howard student-government site: confident, welcoming, clear, and useful. Retain the HUSA seal, campus photography, navy identity, administration context, Herd language, and platform commitments where approved. Harvard's reference contributes leadership visibility, organizational structure, resources, events, and participation paths. Do not import its institution name, copy, logo, or palette.

The current Wix homepage uses a navy navigation band and a large photographic hero with the HUSA seal and administration title. Keep that recognizable identity, but make the first viewport useful: concise title and direct routes to resources and platform progress. Avoid making students scroll through a full-screen title before reaching tasks.

## Proposed tokens

These are working values, not official brand colors. Reconcile them with approved HUSA assets and verify contrast before adoption.

| Token | Proposed value | Purpose |
|---|---|---|
| `--color-brand` | `#081B45` | Navigation, primary actions, strong headings |
| `--color-accent` | `#A32638` | Small emphasis and selected highlights |
| `--color-text` | `#17243A` | Reading text |
| `--color-muted` | `#4B5B70` | Secondary text |
| `--color-surface` | `#FFFFFF` | Main surface |
| `--color-surface-alt` | `#F3F5F8` | Section separation |
| `--color-border` | `#D6DDE7` | Decorative dividers; controls need verified contrast |
| `--content-max` | `72rem` | Main content width |
| `--reading-max` | `65ch` | Paragraph width |
| `--radius-control` | `0.375rem` | Controls |
| `--radius-panel` | `0.5rem` | Grouped content |

Use a spacing scale of 4, 8, 12, 16, 24, 32, 48, 64, and 96 pixels. Start body text at 16–18px with approximately 1.6 line height. Use a system sans-serif for the first prototype; select a licensed brand font only when it helps HUSA's identity. Scale headings fluidly without cropping, excessive tracking, or long all-caps paragraphs.

## Page composition

- Home: identity and useful actions; resource shortcuts; platform progress; leadership and departments; upcoming events; participation/contact; footer. Social content is optional and secondary.
- Resource hub: clear categories, descriptive links, eligibility and deadlines when verified, source destination, and last-reviewed date. Use simple lists when they scan better than cards.
- Leadership: role, name, approved portrait, responsibilities, and confirmed public contact route. Keep biography lengths flexible.
- Platform: commitment, status, last update, and evidence link. Distinguish planned, in progress, completed, and blocked; status must also appear in text.
- Events: date, time zone, location, accessibility information when available, and real signup destination. Show an honest empty state if none are confirmed.

## Interaction and responsiveness

Use a compact sticky header with a labeled mobile menu. Ensure it does not cover headings or keyboard focus. Navigation must work by keyboard and touch; expanded state and focus behavior must match the implementation. Use a skip link, semantic landmarks, logical headings, visible focus, and meaningful image alternatives.

Aim for 44px touch targets, 4.5:1 contrast for normal text, and 3:1 for large text and meaningful UI boundaries. Honor reduced motion. Check 360px, 768px, and 1440px layouts and 200% zoom. These are project review targets, not a claim of compliance.

Avoid unnecessary carousels, scroll hijacking, decorative statistics, large animation dependencies, and repeated generic card grids. Preserve content access when an external feed fails. Compress imagery, reserve image dimensions, and avoid lazy-loading the primary hero image.

## Decisions still open

Approved brand assets; final navigation labels; current administration copy; resource ownership; whether social embeds are worth their cost; form/search/event behavior. Record chosen changes here so later AI edits follow the same system.
