# Wix to Cloudflare migration plan

Prepared October 12, 2026. Original planning baseline: migration planning, a source inventory, reusable design skills, and a team teaching workflow. A local implementation has since been created; see README.md and docs/content-review.md for current behavior and publication requirements. GitHub remote creation, account connection, domain changes, and publication remain subsequent steps.

## Findings and evidence limits

The workspace was empty on inspection. The open Chrome tab is the HUSA Wix editor. Its homepage and page selector were inspected live; other page bodies, CMS collections, backend code, form behavior, and the published site have not yet been audited. `wix-inventory.csv` records that distinction.

The observed homepage contains:

- HUSA seal, Howard campus photography, 66th Administration title, and navy navigation.
- A slideshow with the ALL IN message and a platform tracker link.
- A POWR social feed labeled `@husassociation`.
- Department Breakdown and The Herd Hub.
- Contact information and Senate, UGSA, and Judiciary links.

The footer has Instagram, Tik Tok, and Linktree destinations pointing to `instagram.com/wix`, a YouTube link pointing to Wix, and `© 2035`. Correct these from approved destinations and dates. The editor's domain-availability banner is not proof of domain ownership or a connected production domain.

Wix requires its site technology to run on Wix infrastructure. This migration will rebuild the presentation and replace Wix-dependent functions, while transferring approved content and assets; it cannot be treated as a portable Wix code export. [Wix hosting explanation](https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere).

## Recommended architecture

Use Astro with static output for the first release. Most of this site is public information, so templates and content files can remain close to HTML and CSS. Students can learn page structure without first needing React state or server architecture. Use plain CSS tokens and small components; add a React island only if a feature benefits from it.

Use Cloudflare Pages connected to a GitHub repository. The initial build settings are `npm run build`, output `dist`, production branch `main`. Pages supports branch previews, PR preview links, and deployment status checks. A push to a feature branch becomes a preview; merging into the production branch triggers publication. Students do not need to upload the website manually to Cloudflare after each push. [Cloudflare Astro guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/), [Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/).

Cloudflare Workers also supports static assets and Git builds. Revisit that option if the verified requirements call for substantial server behavior. Keep the first release on the simpler content workflow unless the inventory gives a concrete reason to change. [Workers static assets](https://developers.cloudflare.com/workers/static-assets/).

Proposed source organization:

```text
.agents/skills/       shared AI skills
docs/                 migration evidence and team instructions
src/pages/            URL routes
src/layouts/          shared page shell
src/components/       header, footer, content sections, resource links
src/content/          resources, people, departments, events, initiatives
src/styles/           design tokens and shared CSS
public/images/        approved assets with provenance
public/documents/     approved public downloads
public/_redirects     verified legacy URL mappings
```

Pin a supported Node version, commit a package lockfile, and use `npm ci` for reproducible installs. Confirm exact framework versions and commands when implementation starts. The source repository should be owned by a continuity-minded HUSA account or organization with named maintainers, rather than depend on a graduating student's personal account.

## Migration sequence

| Phase | Work | Reviewable result / exit condition |
|---|---|---|
| 1. Capture Wix | Inspect every listed page, hidden page, popup, mobile view, SEO setting, content collection, download, form, and integration. Record published and draft differences. | Complete content inventory with source URL, destination, owner, keep/revise/archive decision, and evidence. |
| 2. Collect content | Save approved original logo, photos, portraits, PDFs, and text through available export/download paths. Record rights and source; use collection exports where available. | Local asset manifest and approved content; no Wix editor/session URLs in the new site. |
| 3. Establish design | Confirm DESIGN.md, choose navigation and homepage hierarchy, compare desktop/mobile concepts with real HUSA content. | Agreed visual direction and reusable section patterns. |
| 4. Build local slice | Scaffold Astro; implement shared shell, homepage, and one real resource detail page. | Both pages work locally, use the same tokens, and demonstrate the main student journey. |
| 5. Migrate remaining pages | Move approved content into collections/templates; preserve known published paths or provide explicit redirects. | Each inventory row has a working destination and a content-owner review. |
| 6. Replace Wix functions | Resolve search, contact/feedback, event signup, platform data, social feed, and any popup. | Real, verified behavior or a clearly documented deferral agreed with the owner. |
| 7. Teach and preview | Create the GitHub repo and connect Pages; practice branches, small commits, PRs, and preview review. | Each member ships one reviewed change and explains its diff and release path. |
| 8. Launch | Check all routes and workflows on a Cloudflare preview; verify redirects and domain/email DNS plan; connect the approved domain and inspect production. | Public site passes the launch checklist; Wix remains available through the agreed rollback window. |

## Proposed route map

Preserve these observed homepage paths where appropriate: `/contact`, `/resources`, `/search-husa`, `/departments`, `/platform-tracker`. The page selector reveals additional titles but does not establish their published slugs; the CSV deliberately leaves those blank.

| Current content | Proposed new organization |
|---|---|
| Home | `/` with resources and platform progress near the top |
| Student Resources, Scholarships, Internships | `/resources/` with categories; verify old paths before changing URLs |
| Meet HUSA 66, Departments, History of HUSA | Leadership/about section with role-based navigation |
| Platform Tracker and six platform pillars | `/platform-tracker/` plus initiative detail pages |
| Join the Team | Participation page with actual opportunity status |
| Event Details and Schedule | `/events/` and dated event details if active content exists |
| Contact | `/contact/` with confirmed destinations |
| Search HUSA / Search Results | Static search index or simpler resource filtering after requirements review |
| New Page | Inspect and decide; do not publish a placeholder automatically |
| New Safety Regulations popup | Inspect validity, expiry, and purpose; consider a dismissible accessible notice |

Home navigation proposal: About HUSA, Resources, Platform & Progress, Events, Get Involved, Contact; search can be a separate control. Validate labels with students before locking them.

Harvard's reference currently emphasizes executive leadership, organization structure, guides, events, feedback, and meetings. Borrow the clarity of these journeys. Its events section currently exposes an empty summary block, so copy the useful structure rather than its unfinished state. [Harvard Undergraduate Association](https://www.thehua.org/).

## Dependencies that need explicit replacement decisions

| Wix feature | First-release approach | What must be verified |
|---|---|---|
| Resource and leadership content | Markdown/structured content rendered at build time | Ownership, accuracy, and how students update it |
| Platform tracker | Versioned initiative records with status and evidence | Whether the existing tracker uses live data or private inputs |
| Wix search | Consider a generated static index | Scope, indexing of PDFs, accessibility, empty/no-match behavior |
| Contact/feedback forms | Reuse a confirmed external form, or build a server endpoint when required | Destination, submission storage, spam controls, validation, success/error handling |
| Events/schedule | Static event records plus confirmed signup links | Calendar source, timezone, recurring events, ticketing/RSVP dependencies |
| POWR / Instagram feed | Prefer approved social links first; embed only if worthwhile | Portability, permissions, loading cost, fallback and privacy behavior |
| Velo/CMS/backend | Inventory before deciding | No conclusion about backend complexity from the homepage alone |

Do not put private submissions, credentials, or unpublished student data into public content files. Static HTML cannot securely send email or store submissions by itself. A custom endpoint needs server-side validation and a confirmed storage/delivery path.

Deep backend research is not needed for this planning baseline. If the inventory reveals a custom form service, live platform data, or a member system that warrants deep research, tell the user the concrete question, expected benefit, and scope before pursuing it, as requested in AGENTS.md.

## Launch checks and recovery

- Compare every retained inventory entry with its replacement; review content and downloadable documents.
- Check mobile/desktop layout, keyboard navigation, zoom, contrast, focus, menu behavior, long text, and empty/error states. Record what was actually tested.
- Check internal/external links, resource deadlines, social URLs, administration labels, and footer contact details.
- Run a clean install/build, check direct route loads and the 404 page, and test redirects on the hosted preview.
- Exercise real form/search/signup flows against the intended services. A screenshot or green build does not prove those flows work.
- Confirm metadata, canonical URLs, sitemap, robots behavior, and preview indexing controls.
- Record the deployed Git commit and release URL. Protect production merges with review and build checks where the GitHub plan supports them.
- Before DNS changes, verify actual domain ownership, current website records, and email records. Preserve MX/TXT mail configuration. Set a cutover and rollback plan; test both apex and www if used.
- Keep Wix intact during the initial launch window. For code regressions, restore a known working deployment and reconcile the source with a revert commit; for cutover failures, restore the recorded website DNS settings when appropriate.

## Open decisions for the next stage

GitHub organization/repository owner; Cloudflare account owner; published Wix URL and actual domain; approved assets; content reviewers; required form/search/event behavior; final navigation; launch date. These do not prevent planning, but must be resolved before their dependent implementation or account changes.
