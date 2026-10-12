---
name: husa-design-review
description: Review HUSA website design, accessibility, responsive layout, content fidelity, and student journeys using code and rendered evidence. Use for review or pre-release QA; do not automatically fix or publish during a review-only request.
---

# HUSA design review

Read AGENTS.md, PRODUCT.md, and DESIGN.md. Use docs/wix-inventory.csv for migration coverage and docs/skill-sources.md when source context is needed. Resolve the requested page or component from the user and project context; do not review unrelated routes without a reason.

Separate visual critique from functional findings. Check whether the page makes its primary student task obvious, carries HUSA's identity, uses the agreed hierarchy and tokens, and remains understandable with actual content lengths. Verify factual content against the approved source rather than treating copied Wix text as automatically current.

Inspect code and the actual rendered target where tools permit. Batch desktop/mobile observations, address known issues if fixes were requested, and confirm the affected behavior. Repeat only for new changes, failures, or unresolved concerns; avoid an open-ended polishing loop. If browser access is unavailable, report a code-only review and the missing rendered evidence.

Review relevant cases:

- Narrow layout at 360px, tablet at 768px, desktop at 1440px, and 200% zoom; overflow, image crop, readable text, and sticky-header obstruction.
- Keyboard navigation, visible focus, skip link, heading structure, native controls, descriptive links, image alternatives, menu state and focus behavior.
- Measured contrast, touch targets, reduced motion, long titles and biographies, missing images, and honest empty states. DESIGN.md targets are checks to perform, not compliance proof.
- Resource destinations/deadlines, public contact details, social links, administration copy, platform status/evidence, and retained Wix route mappings.
- Image size/dimensions, hero loading, unnecessary client JavaScript, blocking embeds, and fallback access when an external service fails. React performance rules apply only to real React components.
- Search matches and no-match behavior; actual form validation, submission destination, error handling, and success confirmation if those flows are in scope.

Report each actionable issue with severity, target route or file/line, reproduction or measurement, student impact, and a concrete fix. Separate confirmed defects, design suggestions, and untested areas. Do not report fabricated measurements or claim WCAG conformance from a quick audit. A build pass proves compilation; a preview proves only the behavior exercised there. Verify production separately after an authorized launch.
