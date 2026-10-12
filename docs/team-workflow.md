# HUSA AI co-design and Git workshop

This is a proposed teaching sequence. The commands below apply to the local Astro website now implemented in this folder.

## Four practical sessions

| Session | Teach | Student deliverable |
|---|---|---|
| 1. Read and design | Trace a student journey through Wix; distinguish content from layout; inspect DESIGN.md; ask AI for two justified section concepts. | A resource-section brief with a preferred concept and acceptance criteria. |
| 2. Build locally | Explain pages, components, content files, CSS tokens, and the dev server. Make a small approved content/layout change with AI. | A working local change, mobile and desktop evidence, and an explanation of the edited files. |
| 3. Collaborate in GitHub | Explain working tree, staging, commit, branch, push, and PR. Inspect the diff before submitting. | A feature branch and small PR with purpose, evidence, and verification. |
| 4. Publish and recover | Review the Cloudflare preview, distinguish preview from production, merge an approved PR, inspect deployment status and the public site; demonstrate a revert using a practice change. | A verified release and the ability to explain how to restore a prior version. |

Use pairs: one student directs the task and explains the diff; the other checks content and accessibility. Swap roles on the next change. Assign named page/content owners for future administrations.

## The development loop

```text
Student brief -> AI proposal -> local edit -> browser inspection -> diff review
             -> commit -> push feature branch -> PR + Cloudflare preview
             -> teammate review -> merge to main -> production verification
```

A commit records a local snapshot. A push sends commits to GitHub. Cloudflare builds the configured branch after a push. A feature-branch deployment is a preview; a merge into the configured production branch publishes the site. Account connection is a maintainer setup step, not something every student repeats.

## Small first contribution

After the repository and application exist, clone the confirmed repository URL once. In PowerShell, from the clone:

```powershell
git status
git switch main
git pull --ff-only
git switch -c feat/resource-link-update
pnpm install --frozen-lockfile
pnpm dev
```

Start from a clean working tree; preserve any existing local edits before switching. If pull cannot fast-forward, inspect the divergence rather than resetting. The development server normally keeps the terminal occupied; use a second terminal for Git or stop it with Ctrl+C. Open the actual local URL printed by the server.

Make one agreed change. Then:

```powershell
pnpm build
git diff
git status
```

Stage only the named files you reviewed using `git add` with their real paths. Inspect `git diff --cached`, then:

```powershell
git commit -m "Update approved resource link"
git push -u origin feat/resource-link-update
```

Open a PR to `main`. Include the student task, what changed, files affected, mobile/desktop evidence, checks run, and remaining limitations. Review the generated preview before a maintainer merges. Verify production after merge, including the changed link, rather than assuming the deployment status proves the student journey.

GitHub Desktop can teach the same sequence visually: create branch, inspect changes, select files, commit, publish branch, create PR. Teach the concepts once and let students choose the interface.

## Skill prompts

The source skills live in `.agents/skills/` so the whole team can share them through GitHub. In a coding tool that supports repository skills, open the project and invoke them by name. If discovery is unavailable, point the tool to the exact SKILL.md; do not assume all editors use the same command syntax.

- `$husa-design Plan a mobile-first resource hub using PRODUCT.md and DESIGN.md. Show two composition options with the existing content before coding.`
- `$husa-co-design Help me update one approved scholarship link. Explain the files, make the bounded change, and help me inspect the diff. Stop before commit or push unless I request them.`
- `$husa-design-review Review the local homepage and resource page on mobile and desktop. Report reproducible issues with severity, evidence, and a suggested fix. Do not change code during this review.`

## Reusable task brief

```text
Student task:
Target route or component:
Confirmed content/source:
Requested change:
Boundaries:
Done when:
Teach me:
Authorized actions:
```

Example: Help a student find housing support from the homepage. Use the approved Herd Hub content. Improve that section's mobile layout without changing its factual copy or other pages. Done when the link is visible, keyboard-accessible, and fits at 360px. Explain the CSS and show the diff. Local edits only.

AI should explain the decision and evidence; students should be able to describe why the change helps someone. Keep private data and secrets out of prompts, public content, and commits. Never invent a successful build, browser test, or deployed result.
