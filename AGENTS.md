# AGENTS.md — Ahmed Atif Developer Portfolio

Permanent instructions for the AI coding agent (Google Antigravity) working on this project.
Read this file in full, together with `PROJECT_PLAN.md` and `PROGRESS.md`, at the start of every session and before every phase. Do nothing until you have.

---

## 0. Document Hierarchy and Authority

| Priority | File | Role |
| --- | --- | --- |
| 1 | `AGENTS.md` | Rules. Always wins. Only the owner changes it. |
| 2 | `PROJECT_PLAN.md` | What to build and in what order (14 phases). |
| 3 | `PROGRESS.md` | Current state. The only record of what is done and verified. |
| 4 | `README.md` | Human-facing setup, run, build, and deploy instructions. |

- If two files conflict, follow the higher-priority file, **stop**, and tell the owner.
- You may update `PROGRESS.md` and `README.md` as described below. You may **propose** edits to `AGENTS.md` or `PROJECT_PLAN.md`, but never apply them without explicit approval.
- The 14-phase roadmap in `PROJECT_PLAN.md` replaces the earlier 6-phase list. Completed planning work is recorded in `PROGRESS.md`.

---

## 1. Owner and Positioning

- **Owner:** Ahmed Atif
- **Education:** Computer Science graduate, Faculty of Science, Zagazig University, 2026
- **Career direction:** Backend Engineering and Web3 Development, with **equal emphasis** on both everywhere in the portfolio.
- **Target:** internships and entry-level roles in both fields.
- **Positioning:** an aspiring engineer with a genuine understanding of software development, systems, and problem-solving, not a person who lists technologies.

## 2. Project Goal

Build a distinctive, professional, responsive developer portfolio that communicates:

- Technical direction and engineering mindset.
- Actual projects and honest current progress.
- Technical skills, without exaggeration.
- Educational background.
- Clear ways to make contact.

---

## 3. Truthfulness Rules (Hard Rules)

**Never invent or imply** any of the following. If it was not given by the owner in writing, it does not exist:

- Achievements, awards, work experience, internships, freelance clients, testimonials, certifications.
- Metrics of any kind (users, performance, gas savings, test coverage, uptime, TVL, stars, downloads).
- Skills or technologies the owner has not confirmed.
- Project features, architecture, status, results, or completion state.
- Deployments, live URLs, repositories, screenshots, or demos.
- Social URLs, handles, email addresses, phone numbers, location, availability, or a photo.
- Grades, honors, thesis topics, or coursework beyond what is stated in Section 1.

**When unsure, leave it out and ask.** Omission is always safer than invention.

### 3.1 Content Truth Table (source of truth for copy)

| Subject | Confirmed facts | Allowed | Forbidden unless the owner explicitly confirms |
| --- | --- | --- | --- |
| **FundMe** (Solidity smart contract) | Solidity; Foundry; Chainlink price feed; Anvil used for local development and mocks; still needs review/completion; status is local development and manual testing | Status label **In Progress**. Describe only the confirmed items above. | Testnet or mainnet deployment, contract addresses, block-explorer links, comprehensive or automated test claims, coverage or gas numbers, audit claims, "production-ready", repository link |
| **Road-accident and ambulance-location data analysis** (team graduation project) | Team project. Compared road-accident data in Egypt with ambulance station locations. Data obtained from the CAPMAS website (per owner). Owner converted part of the data from PDF to Excel, helped clean it, took part in the analysis, and designed visuals. The team built the dashboards in Power BI. Finished and submitted as a graduation project (per owner). | Describe only the confirmed items. State clearly that it is a team project and the owner's role exactly as listed. Status label **Completed**. | Findings, numbers, rankings, regions, conclusions, "led the project", sole-authorship claims, screenshots unless the owner supplies and approves them, any dataset detail beyond "CAPMAS" |
| **Restaurant POS & Inventory System** | Exists; paused; may need restructuring; contents not yet inspected | Status label **Paused**. Title plus a neutral one-line description of what the owner confirms. | Features, stack, architecture, completeness, screenshots, "completed". Describe it definitively only after its real state is inspected and confirmed by the owner. |
| **Personal Finance Ledger API** | A future idea; no implementation | Not shown as a project. A clearly labeled **Planned** mention only if the owner approves it in Phase 6. | Presenting it as an existing or in-progress project |
| **Agricultural insurance blockchain team project** | Excluded for now | Nothing | Any mention |
| **Education** | CS graduate, Faculty of Science, Zagazig University, 2026 | Exactly these facts | GPA, honors, thesis, courses, or any extra detail |
| **Contact channels** | GitHub, LinkedIn, Instagram, email; real values not yet supplied | Clearly marked placeholders (Section 8) | Guessed handles, URLs, or addresses |
| **Skills** | No final skills list confirmed yet. Candidate items from confirmed project facts: Solidity, Foundry, Chainlink price feeds, Anvil (FundMe); Power BI, Excel, data cleaning, data analysis (team project). The final list is still confirmed by the owner in Phase 7. | Only items the owner confirms in Phase 7 | Proficiency bars, percentages, expert/advanced labels, logo walls |

### 3.2 Allowed Project Status Labels

`In Progress` · `Prototype` · `Paused` · `Planned` (only if approved). **`Completed` requires evidence and explicit owner confirmation.**

---

## 4. Protection of Existing Projects (Strict)

The owner has other projects on their machine (including FundMe and the Restaurant POS source code). They are off-limits by default.

1. **The workspace must be the portfolio folder only.** If the open workspace is a parent folder containing other projects, stop and tell the owner before doing anything.
2. **Work only inside the portfolio project root** (`ahmed-atif-portfolio`). Before every file write, edit, move, or delete, confirm the resolved path is inside it (in PowerShell: `Resolve-Path` or `Get-Item`). If not, stop.
3. **Never read, modify, copy, move, rename, refactor, or delete any other project** without explicit approval for that specific action. Approval to read is **read-only** and never extends to writing.
4. **Never run recursive or wildcard operations** outside the project root.
5. **Never initialize Git, install packages, or run scaffolding tools** inside or above an existing project.
6. **Folder pre-check.** The portfolio folder may already exist **only if** it contains nothing except the four handoff files (`AGENTS.md`, `PROJECT_PLAN.md`, `PROGRESS.md`, `README.md`). Anything else: stop and ask.
7. **Do not overwrite handoff files.** The Vite scaffold would overwrite `README.md`. Follow the protected procedure in Phase 3 of `PROJECT_PLAN.md`.
8. **Deletion exception.** You may delete files that the scaffold itself generated in the same phase (for example default demo assets), only if the plan lists them. Everything else needs approval.

---

## 5. Design Direction

### Use

- Dark theme with a near-black or charcoal background (not pure `#000`).
- One lime-green accent, used **selectively**: links, active states, the primary action, small highlights.
- Modern, creative, technical, professional, and distinctive.
- Strong typography, generous spacing, clear hierarchy, carefully designed layouts.
- Subtle engineering-inspired visuals: grids, architectural lines, restrained code-related details.
- Smooth, subtle animation **only when it improves the experience**, always honoring `prefers-reduced-motion`.
- Fully responsive for desktop, tablet, and mobile.
- Accessible contrast, keyboard navigation, and visible focus states.

### Avoid

- Generic portfolio templates and the generic AI-generated website look.
- Excessive neon, glow, or too many gradients, cards, animations, and decoration.
- Fake terminal interfaces with no real purpose.
- Stock photos, emoji as icons, lorem ipsum, buzzword copy ("passionate", "cutting-edge", "rockstar").
- Blobs, glassmorphism everywhere, and identical rows of icon cards.

The result must feel intentionally designed and memorable without sacrificing readability or professionalism. Copy should be specific and plain, with no hype.

---

## 6. Technology Constraints

- **React + Vite + plain CSS.** JavaScript (`.jsx`), no TypeScript unless approved.
- **Forbidden:** Tailwind CSS, Bootstrap, UI component libraries, CSS-in-JS, animation libraries, icon libraries, routing libraries, CSS preprocessors.
- **No dependency may be added or upgraded without the owner's explicit approval**, including dev dependencies and testing tools. Ask first, with name, purpose, and the alternative of not adding it.
- Allowed without asking: only what the approved Vite React template ships, installed via `npm install` in Phase 3. Record the exact list in `PROGRESS.md`.
- Forbidden commands: `npm audit fix --force`, global installs, editing `package-lock.json` by hand.
- No external runtime requests (CDNs, remote fonts, analytics, trackers) unless approved.
- No backend, contact-form service, CMS, blog, theme toggle, analytics, or CV link unless approved. They are out of scope.

## 7. Code Standards

- **Semantic HTML:** `header`, `nav`, `main`, `section`, `footer`. One `h1`. Headings in logical order. Sections use `aria-labelledby`. Links navigate; buttons act.
- **Accessible React:** a skip link, visible `:focus-visible` styles, meaningful accessible names, `alt` text on every informative image, `rel="noopener noreferrer"` on external links, no `dangerouslySetInnerHTML`.
- **React:** function components; minimal state and effects; content lives in `src/data/`; stable `key` props.
- **CSS:** design tokens as custom properties in `src/styles/tokens.css`; mobile-first media queries; `rem`-based sizing; no `!important`; no fixed heights on text containers.
- **Keep it simple:** readable names, small components, comments only where they add information.
- **Assets:** only owner-provided or self-made (for example SVG) assets. No placeholder images.

---

## 8. Placeholder Policy

Real contact values are not yet supplied. Use exactly these identifiers:

`PLACEHOLDER_GITHUB_URL` · `PLACEHOLDER_LINKEDIN_URL` · `PLACEHOLDER_INSTAGRAM_URL` · `PLACEHOLDER_EMAIL_ADDRESS`

- They live **only** in `src/data/links.js`.
- In the UI, a placeholder renders as visibly pending text (for example "GitHub — link pending"). It is **never** an `href`, so no dead or bogus link is clickable.
- `mailto:` is built only from a real, owner-supplied address.
- Every remaining placeholder is listed in the Placeholder Register in `PROGRESS.md`.
- Before deployment, `PLACEHOLDER_` must not appear in the production build unless the owner explicitly signs off on each remaining item.

---

## 9. Workflow: Incremental, One Phase at a Time

1. **Start of session:** read all four files. Report the current phase and next step from `PROGRESS.md`.
2. **Before a phase:** state the plan (files to touch, commands to run, risks). **Wait for approval.**
3. **During a phase:** work only on that phase's scope, in small steps. No unrelated refactors, no speculative features, no work from later phases.
4. **After implementing:** run the phase's tests and verification from `PROJECT_PLAN.md`.
5. **Update `PROGRESS.md`** (Section 11), then report to the owner.
6. **Stop.** Do not begin the next phase until the owner approves.

**What counts as approval:** a clear message from the owner approving that phase or step. Silence, "ok" to an unrelated question, or approval of a plan is **not** approval of the results, and approval of one phase does not authorize the next.

---

## 10. When to Ask and When to Stop

### Ask one focused question, then wait

- Required information is missing (links, skills, project facts).
- A request, file, or plan is ambiguous or contradicts a rule.
- The environment is not as expected (folder not empty, workspace is a parent folder, unexpected Node version, no Git).
- A fix would require something risky or unplanned.

Format: **one question**, why it is needed, and the options with your recommended default. Never batch several unrelated questions.

### Always stop for explicit approval before

- Starting each phase and at the end of each phase.
- Installing, adding, or upgrading any dependency.
- Reading any existing project, or creating anything outside the portfolio root.
- Any deletion, rename, move, or overwrite not listed in the plan.
- Any Git commit, push, remote creation, or branch change, unless the owner has pre-authorized commits per phase (decision I-03 in `PROJECT_PLAN.md`).
- Anything that publishes or deploys.
- Changing `AGENTS.md` or `PROJECT_PLAN.md`.
- Using real links or project text that the owner did not supply or confirm.

### Decide yourself (and log it in `PROGRESS.md`)

Routine choices within an approved phase that follow these rules: CSS class names, component props, internal file layout, spacing values.

---

## 11. Updating `PROGRESS.md` (Mandatory After Every Phase)

Before reporting, update `PROGRESS.md` with:

- Phase status and checklist changes.
- **Files changed** (full relative paths, created or modified).
- **Commands executed** (exact text) and the **result observed**.
- **Test and verification results** (what was observed, pass or fail).
- **Not verified** items, stated explicitly.
- **Unresolved issues** and blockers.
- Updated Placeholder Register and Dependency Register.
- **Next approved step.**

A task may be checked off (`[x]`) only if it was **actually verified**. If something was done but could not be verified, leave it unchecked and note "done, unverified" in the log.

---

## 12. Verification Rules

- Never claim a build, test, lint, or run succeeded unless you ran it and observed the output. Quote the key output lines.
- If you cannot run something (environment limits, no browser), write "not run" with the reason. Never write "should work".
- Never claim a visual or responsive check unless you actually viewed the result at that viewport. Otherwise write "not visually verified" and give the owner a manual checklist.
- Never state Lighthouse scores, contrast ratios, or browser compatibility that you did not measure or test.
- Re-read your own copy against the Content Truth Table (Section 3.1) before every report.
- In `README.md`, keep **Verified** and **Needs verification** instructions clearly separated. Move an instruction to Verified only after you ran it successfully in this project.

---

## 13. Command and Environment Safety (Windows / PowerShell)

The owner runs Windows. Assume PowerShell and verify with the owner's terminal output. Do not assume what exists in any sandbox.

- Prefer read-only commands (`Get-Location`, `Get-ChildItem`, `Test-Path`, `Get-Content`) for inspection.
- Show the exact command and what it does **before** running it.
- **Forbidden without explicit approval:** `Remove-Item`, `del`, `rd`/`rmdir`, `Move-Item`/`Rename-Item` outside the project root, `git reset --hard`, `git clean`, `git push --force`, changing PowerShell execution policy, editing PATH or system settings, global npm installs, piping remote scripts into a shell, running any script you have not read.
- If `npm` fails in PowerShell with a script-execution-policy error, **stop and ask**. Do not change the system policy. Using `npm.cmd` is a possible workaround to propose.
- Never request, store, print, or commit passwords, tokens, or API keys. This project needs none.
- Check for a parent Git repository before any `git init`; never create a nested repository.

---

## 14. Communication Rules

- Be clear and concise. Explain technical decisions briefly.
- Do not dump large amounts of code or make many changes at once.
- End every phase with a report using this structure:
  1. **Summary** (what changed)
  2. **Files created or changed**
  3. **Commands executed and results**
  4. **Verified** (what was observed)
  5. **Not verified**
  6. **Unresolved issues and remaining placeholders**
  7. **Proposed next step. Ask for approval, then wait.**
- If you make a mistake, state it plainly, fix it, and record it in `PROGRESS.md`.
