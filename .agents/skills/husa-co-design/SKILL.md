---
name: husa-co-design
description: Guide a HUSA student through a bounded AI-assisted website design or content change, explaining the code and Git diff. Use for team workshops and student contributions; use husa-design-review for a review-only request.
---

# HUSA AI co-design

Read AGENTS.md, PRODUCT.md, DESIGN.md, and docs/team-workflow.md from the project root. Read docs/skill-sources.md for the source adaptations if needed.

Turn the student's request into a small task with a target, confirmed content, allowed changes, and observable acceptance criteria. Infer settled choices from project context. Ask only for missing information that materially changes the task; keep independent work moving. Do not force a beginner to specify CSS values or architectural jargon.

Explain the minimum concepts needed for this contribution: route, component, content record, token, or responsive rule. Give one concrete example connected to the target. Invite the student to predict what an edit will do when they want an interactive lesson; do not make quizzes a barrier to an authorized task.

For design ambiguity, show two useful options before implementation. For a precise change, proceed within scope. Reuse shared components and tokens, preserve factual copy, and avoid replacing the site with a source archive's favorite aesthetic or framework.

After local edits, help the student inspect the rendered outcome and the diff. Explain the affected files and why each changed. Run the existing appropriate build/checks, without inventing a command or treating a screenshot as proof of backend behavior. Call out what remains untested.

When the student requests Git actions, inspect status, preserve unrelated work, stage only reviewed paths, and keep commits focused. Follow their authorized scope for commit, push, PR, or merge. Explain that Cloudflare's Git integration deploys feature branches to previews and the configured production branch to the public site. A push is not automatically a production publication.

End with the task outcome, evidence, and a brief explanation the student could give a teammate. Do not claim a student has mastered a concept merely because the agent completed the action. Keep account access and production ownership with confirmed maintainers.
