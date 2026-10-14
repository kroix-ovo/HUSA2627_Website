# HUSA website brief

Status: local Astro implementation, October 12, 2026. The GitHub remote is `https://github.com/kroix-ovo/HUSA2627_Website`; Cloudflare deployment is not configured. The user requires original imagery only, with no AI images.

The Howard University Student Association website should help students find practical resources, identify their representatives, understand HUSA's commitments and progress, and participate in campus life. It should also be a maintainable teaching project for the HUSA web design team.

## User journeys

- Find housing, financial aid, scholarship, internship, food, and safety information.
- Find the current administration and appropriate department or contact.
- Understand platform commitments and inspect dated evidence of progress.
- Find an event or opportunity and follow the appropriate signup link.
- Contact HUSA or submit feedback through a confirmed destination.

## Content authority

The current Wix editor is the migration source; the published site must be checked separately. Existing text and assets need content-owner review before launch. Harvard's site informs organization and participation paths, not Howard-specific claims or visual identity.

The editor identifies the 66th Administration, and the project lead confirmed on October 13, 2026 that the 66th is the current administration. Do not infer a different number from the year. Leadership names and portraits are not yet confirmed as current: portraits are removed from the site until approved images are supplied.

## Implementation

Astro static output, reusable components, CSS design tokens, and version-controlled structured content. Cloudflare Pages with GitHub integration is the intended host. Search and resource filtering run in the browser. Support links open the observed Case Compass form; public contact links use email/phone destinations. There is no new backend or private submission storage.

## Success

All retained Wix pages have a verified replacement or documented redirect. Students can complete the main journeys on mobile and desktop. A team member can update a resource, inspect the diff, push a branch, review a preview, and explain what will become public when it merges.
