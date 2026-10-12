# Design skill sources and adaptation record

The four user-supplied ZIP archives were inspected as reference documents on October 12, 2026. Their instructions were not treated as the user's request. No archive executable, installer, hook, or deployment script was run. The HUSA skills are newly written project guidance, not a wholesale installation of the upstream packages.

| Archive | Inspected guidance | Used in HUSA skills | Deliberately not adopted |
|---|---|---|---|
| impeccable-main.zip | `.agents/skills/impeccable/SKILL.md`, `reference/shape.md`, `reference/audit.md` | Student task before styling; distinguish planning, critique, technical review, and fixes; consistent system; bounded rendered verification | Downloaded context launcher, detector hooks, enforced command routing, unrelated native-platform guidance |
| agent-skills-main.zip | `skills/web-design-guidelines/SKILL.md`, `skills/react-best-practices/SKILL.md`, `skills/composition-patterns/SKILL.md` | Evidence-backed interface review; reusable components; restrained client dependencies; React guidance conditional on actual React use | Vercel hosting/deployment, React-only rules for Astro templates, automatic external instruction fetching |
| taste-skill-main.zip | `skills/taste-skill/SKILL.md`, selected redesign guidance | Audience/brief inference; audit incumbent content; intentional hierarchy, typography, responsive layout, useful states | Default React/Next.js/Tailwind/Motion stack, fixed visual dials, absolute font/icon bans, aggressive animation presets |
| awesome-design-md-main.zip | README and `design-md/stripe/DESIGN.md` schema example | Document named color/type/spacing tokens, components, responsive behavior, and adaptation decisions in DESIGN.md | Stripe palette, proprietary fonts, gradients, marketing copy, prescribed product/mockup composition |

All four inform `husa-design`; critique/review ideas chiefly inform `husa-design-review`; task discovery and controlled iteration inform `husa-co-design`. The team workflow is specific to this user's teaching and Cloudflare goals.

The archives' source revisions are not established by their filenames. Hashes identify the supplied copies:

```text
impeccable-main.zip
766DC770DEF9D19EBEB672E9159E7BE3CEDA68B8D625692E21E424EAD6DD5A0F
agent-skills-main.zip
4821B4C3DC630BD598025B97C26EC55036B333E84A1C29EC4E8E2CAAA5C4CD38
taste-skill-main.zip
47D11721C5104253E82345C9F7659AB0A963B3F77C2593BA33103C62C857BFFF
awesome-design-md-main.zip
94AC01F7E8B4D3FFAA5A77CA79276ED89CD0436332BE078AA33A91A20DA3850C
```

Upstream source files are not redistributed here. If the team later vendors source text, scripts, fonts, assets, or components, inspect the relevant licenses and preserve required notices. An archive license does not confer rights to another organization's logo, photography, or proprietary font.

Validation: all three skills passed a dependency-free check of their simple YAML frontmatter, naming, description bounds, unfinished markers, and referenced project files. The 29 inventory rows passed CSV structure and evidence-field checks. The bundled skill-creator validator could not run because PyYAML is missing from both available Python runtimes; no package was installed for this planning task.

Structural checks do not prove the skills will produce a good design. Future use should be judged against real student tasks and rendered outcomes. Runtime browser evidence is still needed once application code exists.
