# PROJECT_PLAN.md — Ahmed Atif Developer Portfolio

The ordered roadmap from environment setup to deployment. Rules live in `AGENTS.md` and always take priority. Current state lives in `PROGRESS.md`.

**How to use this plan:** work one phase at a time. Start a phase only when its entry gate is met and the owner approves. End it only when every acceptance criterion and verification step has been observed and the owner approves the result.

---

## 1. Phase Overview and Dependencies

| # | Phase | Depends on | Produces |
| --- | --- | --- | --- |
| 1 | Inspect and Plan | none | Approved plan, real-workspace inspection |
| 2 | Environment Setup | 1 | Verified Windows toolchain, safe workspace |
| 3 | Scaffold | 2 | Running React + Vite project, intact handoff files |
| 4 | Design Foundation | 3 | Tokens, base CSS, page shell |
| 5 | Navigation and Hero | 4 | Nav, Hero, CTAs |
| 6 | Selected Projects | 5 | Projects section, verified wording |
| 7 | Technical Capabilities | 4 (5 for nav) | Skills section |
| 8 | Engineering Approach | 4 (5 for nav) | Principles section |
| 9 | About | 4 (5 for nav) | About section |
| 10 | Contact | 4 (5 for nav) | Contact section, placeholder handling |
| 11 | Responsive Behavior | 5 to 10 | Verified layouts at all breakpoints |
| D1–D6 | Design Upgrade Track | 11 | Visual upgrade (D1 tokens, D2 hero/terminal, D3 projects, D4 blockchain, D5 skills, D6 motion) |
| 12 | Accessibility | D1–D6 (or 11) | Verified keyboard, contrast, semantics |
| 13 | Quality Assurance | 12 | Build, console, link, content, dependency audit |
| 14 | Deployment | 13 | Verified live site |

Phases 7, 8, 9, and 10 all depend only on the foundation and Hero, so the owner may reorder them. Each still needs its own approval.

### Design Upgrade Track (D1–D6)
Inserted between Phase 11 (Responsive Behavior) and Phase 12 (Accessibility) per owner approval:
- **D1:** Visual Direction and Design System
- **D2:** Full-Screen Hero and Functional Interactive Terminal
- **D3:** Visual Project Showcase
- **D4:** Blockchain Network Visualization
- **D5:** Interactive Skills Explorer
- **D6:** Motion and Interaction Polish

Specification detailed in `gemini-code-1791903855995.md`. Following D6, the roadmap resumes with Phase 12 (Accessibility), Phase 13 (QA), and Phase 14 (Deployment).

### Master list of information needed from the owner

| ID | Needed | Needed by | Notes |
| --- | --- | --- | --- |
| I-01 | Output of `node -v`, `npm -v`, `Get-Location` in PowerShell | Phase 2 | Also `git --version` if Git will be used |
| I-02 | Approved parent directory for `ahmed-atif-portfolio` | Phase 2 | Must not be inside another project |
| I-03 | Git use, and whether to commit after each approved phase | Phase 2 | Default: no commits without asking |
| I-04 | Hero copy approval | Phase 5 | Agent drafts, owner approves |
| I-05 | Font decision: system stack (default) or a self-hosted font file | Phase 4 | No remote font requests |
| I-06 | Restaurant POS: read-only folder access, or owner-pasted facts | Phase 6 | Real state, stack, what works |
| I-07 | FundMe: what the contract does, and any repository URL | Phase 6 | Only what the owner confirms |
| I-08 | Whether to show a "Planned" mention of the Finance Ledger API | Phase 6 | Default: omit |
| I-09 | Confirmed skills list | Phase 7 | Only items the owner can discuss |
| I-10 | Confirmation of each engineering principle | Phase 8 | Reflects the owner's real approach |
| I-11 | About copy approval | Phase 9 | Education facts only |
| I-12 | GitHub, LinkedIn, Instagram URLs and email address | Phase 10 | Placeholders until supplied |
| I-13 | Hosting platform, repository, optional domain | Phase 14 | Owner performs account actions |

---

## 2. Global Definitions

### Definition of Done (applies to every phase)

- All tasks done and every acceptance criterion observed.
- All verification steps run, with results recorded in `PROGRESS.md`.
- No rule in `AGENTS.md` violated (check the Content Truth Table).
- `PROGRESS.md` updated; `README.md` updated if instructions changed.
- Phase report delivered in the `AGENTS.md` Section 14 format.
- **Owner approval received.**

### Target project structure (approved in Phase 1)

```
ahmed-atif-portfolio/
├── AGENTS.md
├── PROJECT_PLAN.md
├── PROGRESS.md
├── README.md
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   ├── projects.js
    │   ├── skills.js
    │   └── links.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Projects.jsx
    │   ├── Skills.jsx
    │   ├── Approach.jsx
    │   ├── About.jsx
    │   └── Contact.jsx
    └── styles/
        ├── tokens.css
        ├── base.css
        └── components.css
```

The Vite template also adds files such as `eslint.config.js` and `.gitignore`. Record them. A routing library is not used; navigation is single-page anchor scrolling.

---

## Phase 1 — Inspect and Plan

**Status at handoff:** partially complete (see `PROGRESS.md`).

- **Objective and scope:** confirm the plan against the owner's real machine. No changes.
- **Depends on:** nothing.
- **Tasks**
  1. Read `AGENTS.md`, `PROJECT_PLAN.md`, `PROGRESS.md`, `README.md`.
  2. Confirm the open workspace is the portfolio folder only, not a parent containing other projects.
  3. Inspect the workspace read-only (`Get-Location`, `Get-ChildItem -Force`). Report what exists.
  4. Restate the approved folder name (`ahmed-atif-portfolio`) and structure; flag anything that no longer fits.
  5. List missing information from the master list above.
- **Expected deliverables:** a short inspection report. No files changed except `PROGRESS.md`.
- **Acceptance criteria:** the inspection reflects the owner's actual machine (not a sandbox); the workspace is confirmed to be the portfolio folder; the owner confirms the plan.
- **Tests and verification:** compare the real directory listing with the expected state: empty, or only the four handoff files.
- **Needed from owner:** I-02 if not yet decided.
- **Gate to move forward:** the owner approves Phase 1 and Phase 2.

---

## Phase 2 — Environment Setup

- **Objective and scope:** prove the Windows toolchain works and the workspace is safe. Nothing is installed.
- **Depends on:** Phase 1.
- **Tasks**
  1. Ask the owner to run and paste: `node -v`, `npm -v`, `Get-Location` (and `git --version` if Git is wanted).
  2. Check the Node version against the **current official Vite requirement** (look it up; do not rely on memory). If it is too old, stop and report; do not upgrade Node yourself.
  3. Confirm the parent directory (I-02) and run the pre-checks in "Owner setup commands" below.
  4. Confirm the workspace folder is `ahmed-atif-portfolio` itself.
  5. If `npm` fails with an execution-policy error, stop and ask (see `AGENTS.md` Section 13).
  6. Decide Git use (I-03). If Git is used, check that no parent repository exists: `git rev-parse --show-toplevel` should report that this is not a Git repository.
- **Expected deliverables:** environment report; updated `PROGRESS.md` (Dependency Register: tool versions).
- **Acceptance criteria:** Node and npm versions observed from the owner's own output and found compatible with Vite; target folder verified as new or containing only the four handoff files; folder is not inside another repository.
- **Tests and verification:** owner-pasted outputs; `Test-Path` results; `Get-ChildItem -Force` listing of the folder.
- **Needed from owner:** I-01, I-02, I-03.
- **Gate to move forward:** every check passed or an approved workaround; owner approves Phase 3.

### Owner setup commands (run in PowerShell, one block at a time)

```powershell
# 1. Set the parent folder that will contain the portfolio (edit the path), then build the target path.
$parent = "C:\PATH\TO\PARENT"          # PLACEHOLDER: choose a folder that is NOT an existing project
$target = Join-Path $parent "ahmed-atif-portfolio"
$target
```
This stores the two paths in variables and prints the target. Nothing is created yet.

```powershell
# 2. Create the folder ONLY if it does not already exist.
if (Test-Path -LiteralPath $target) { Write-Host "STOP: folder already exists: $target" }
else { New-Item -ItemType Directory -Path $target | Out-Null; Write-Host "Created: $target" }
```
This checks first and creates a new empty folder only when the path is free.

```powershell
# 3. Copy the four handoff files into the new folder (edit the source path to where you saved them).
$src = "C:\PATH\TO\HANDOFF\FILES"
Copy-Item -LiteralPath "$src\AGENTS.md","$src\PROJECT_PLAN.md","$src\PROGRESS.md","$src\README.md" -Destination $target
Get-ChildItem -LiteralPath $target -Force | Select-Object Name
```
This copies the files into the empty folder and lists them. Only those four names should appear.

Then open **only** `ahmed-atif-portfolio` as the Antigravity workspace, never its parent folder.

---

## Phase 3 — Scaffold

- **Objective and scope:** create the React + Vite project in the approved folder without damaging handoff files or touching other projects. No UI beyond a minimal smoke-test heading.
- **Depends on:** Phase 2.
- **Tasks**
  1. Re-run the folder pre-check (only the four handoff files present).
  2. Record SHA-256 hashes of the four handoff files.
  3. Protect `README.md` by renaming it to `README.handoff.md` (the Vite template writes its own `README.md`).
  4. Scaffold into the current folder with the React template, answering any prompts so existing files are kept and dependencies are **not** installed automatically.
  5. Confirm `AGENTS.md`, `PROJECT_PLAN.md`, `PROGRESS.md`, and `README.handoff.md` hashes are unchanged.
  6. Replace the template's `README.md` with the handoff one (`README.handoff.md` becomes `README.md`).
  7. Run `npm install` and record the resulting dependency list.
  8. Create the approved folder skeleton: `src/data`, `src/components`, `src/styles`, and stub files only where needed.
  9. Remove only the template's demo content (default counter, demo logos, demo stylesheet) and replace `App.jsx` with a single plain heading as a smoke test.
  10. Set `lang="en"` and a neutral temporary `<title>` in `index.html`.
  11. If Git is approved: `git init` (after the nested-repo check), confirm `node_modules` and `dist` are ignored, and commit only with approval.
- **Expected deliverables:** the project files listed in the target structure plus template files; `package-lock.json`; updated `PROGRESS.md` and `README.md`.
- **Acceptance criteria:** project installs, dev server starts, production build succeeds; handoff files intact; only template-shipped dependencies present, and the owner has approved that exact list; no other folder touched.
- **Tests and verification**
  - Hash comparison before and after (`Get-FileHash -Algorithm SHA256`).
  - `npm install` exit status and summary line.
  - `npm run dev`: dev server starts and prints a local URL; page shows the smoke-test heading.
  - `npm run build`: completes without errors; `dist/` created.
  - `npm ls --depth=0`: record the list.
  - If a lint script exists, `npm run lint` result.
- **Needed from owner:** approval of the exact dependency list.
- **Gate to move forward:** all checks observed and recorded; owner approves Phase 4.

### Phase 3 command reference (all **unverified** until run in this project)

```powershell
Set-Location -LiteralPath $target
Get-FileHash AGENTS.md, PROJECT_PLAN.md, PROGRESS.md, README.md -Algorithm SHA256 | Format-Table Hash, Path
Rename-Item -LiteralPath README.md -NewName README.handoff.md
npm create vite@latest . -- --template react
```
The hash command saves proof the files are untouched. The rename shields the handoff README. The last command scaffolds into the current folder. The `--` passes the template flag through npm. At the "directory is not empty" prompt, choose the option that **ignores existing files and continues** (never the one that removes them). Answer **No** to "install and start now". The exact prompt wording depends on the installed `create-vite` version; if it is unclear, **stop and ask**.

```powershell
Get-FileHash AGENTS.md, PROJECT_PLAN.md, PROGRESS.md, README.handoff.md -Algorithm SHA256 | Format-Table Hash, Path
Move-Item -LiteralPath README.handoff.md -Destination README.md -Force
npm install
```
The first command must match the earlier hashes. The move restores the handoff README over the template's one (this specific `-Force` is approved). `npm install` installs the template's dependencies.

---

## Phase 4 — Design Foundation

- **Objective and scope:** establish the visual system and page shell. No section content.
- **Depends on:** Phase 3.
- **Tasks**
  1. Define tokens in `src/styles/tokens.css`: near-black/charcoal background and surface colors, text colors, one lime accent, borders, type scale, spacing scale, radii, breakpoints, motion durations.
  2. Write `src/styles/base.css`: modern reset, typography, `:focus-visible` styles, `prefers-reduced-motion` handling, selection style, link styles.
  3. Add layout primitives (container, section spacing) and a subtle engineering-inspired background detail (for example a faint grid), used sparingly.
  4. Add the page shell in `App.jsx` (`header`, `main`, `footer` landmarks) and a skip link.
  5. Choose fonts (I-05). Default is a system font stack with no external requests.
  6. Set a meta description with no unverifiable claims, and a favicon (simple self-made SVG).
  7. Optionally build a temporary token preview, removed before approval unless the owner asks to keep it.
- **Expected deliverables:** `src/styles/tokens.css`, `base.css`, `components.css` (initial), `App.jsx`, `public/favicon.svg`, `index.html` updates.
- **Acceptance criteria:** dark theme renders; accent is used sparingly; focus rings visible on every focusable element; reduced-motion respected; no external requests; no `!important`.
- **Tests and verification**
  - Compute the contrast ratio for each text/background and UI/background token pair, and record the numbers. Targets: 4.5:1 normal text, 3:1 large text and UI components.
  - Tab through the page; confirm the skip link appears and focus is visible.
  - Check the browser Network tab: only local requests.
  - `npm run build` and lint (if present).
- **Needed from owner:** I-05, plus feedback on look and feel.
- **Gate to move forward:** contrast numbers recorded and passing; owner approves the visual direction.

---

## Phase 5 — Navigation and Hero

- **Objective and scope:** the first screen. Navigation and Hero only.
- **Depends on:** Phase 4.
- **Tasks**
  1. Build `Navbar.jsx`: semantic `nav`, anchor links, current-state styling, keyboard accessible. Include links **only for sections that exist**; later phases add theirs.
  2. Build `Hero.jsx`: name "Ahmed Atif"; focus on **Backend Engineering** and **Web3 Development** with equal visual weight; concise, honest intro; two CTAs: **View projects** (`#projects`) and **Contact** (`#contact`).
  3. Draft copy and get approval (I-04). No metrics, no claims beyond `AGENTS.md`.
  4. Add one restrained engineering-inspired visual (for example architectural lines or a small code-detail element) that serves the design and is not a fake terminal.
  5. Add subtle entrance motion only if it adds value and respects reduced motion.
- **Expected deliverables:** `Navbar.jsx`, `Hero.jsx`, additions to `components.css`, `App.jsx`.
- **Acceptance criteria:** the two focus areas are equally prominent; the primary CTA is obvious; the first screen answers "who is this and what do they do" in a few seconds; one `h1`; keyboard operable.
- **Tests and verification**
  - View at 320, 768, and 1280 px widths (or mark as not visually verified).
  - Tab order: skip link, nav, CTAs.
  - Content check against the Truth Table.
  - Note: CTA targets `#projects` and `#contact` do not exist until Phases 6 and 10. Record this as expected, and verify the targets then.
  - Build and lint.
- **Needed from owner:** I-04.
- **Gate to move forward:** the owner approves the Hero and copy.

---

## Phase 6 — Selected Projects

- **Objective and scope:** the Projects section with strictly accurate content.
- **Depends on:** Phase 5.
- **Tasks**
  1. Get the Restaurant POS facts (I-06). If given read-only folder access, **read only**, then summarize what you found (stack, structure, apparent state) and ask the owner to confirm. If not, use only owner-pasted facts.
  2. Get FundMe facts beyond the confirmed list (I-07).
  3. Decide the Finance Ledger API treatment (I-08). Default: not shown.
  4. Store project data in `src/data/projects.js` with fields: `id`, `title`, `status`, `summary`, `stack` (confirmed items only), `links` (only supplied URLs; none by default).
  5. Build `Projects.jsx`: a small, focused list, not a filler grid. Each entry shows title, status label, honest summary, confirmed stack.
  6. Optionally add a simple diagram for FundMe that shows **only confirmed components** (contract, Chainlink price feed, Anvil local mock). Do not depict unconfirmed behavior. Owner approves it first.
  7. Add the "Projects" link to the nav; verify the Hero CTA now resolves.
- **Expected deliverables:** `projects.js`, `Projects.jsx`, CSS additions, optional SVG diagram.
- **Acceptance criteria:** each project's wording matches the Truth Table; status labels come from the allowed list; FundMe is **In Progress**; Restaurant POS is **Paused** (or described only per confirmed facts); no screenshots, repositories, or demos invented; no project link rendered unless supplied.
- **Tests and verification**
  - Line-by-line copy audit against the Truth Table.
  - Search project text for forbidden terms: `deployed`, `mainnet`, `testnet`, `audited`, `production`, `completed`, `coverage`, `100%`.
  - Anchor check: `#projects` resolves from the Hero CTA and nav.
  - Build and lint.
- **Needed from owner:** I-06, I-07, I-08, and approval of all project wording.
- **Gate to move forward:** the owner approves every sentence about every project.

---

## Phase 7 — Technical Capabilities

- **Objective and scope:** an honest skills section.
- **Depends on:** Phase 4 (Phase 5 for the nav link).
- **Tasks**
  1. Get the owner's confirmed skills (I-09). Ask which items they used in projects or can discuss in an interview.
  2. Group into categories: Backend Development; Databases and API Design; Smart Contracts and Blockchain; Testing and Development Tools; Data Analysis (supporting category). Adjust categories only with approval.
  3. Store in `src/data/skills.js`; build `Skills.jsx`.
  4. Present as plain grouped lists or a compact layout. No bars, percentages, expertise levels, or logo walls.
  5. Keep Backend Development and Web3 equally emphasized; Data Analysis is supporting and must not outweigh either.
  6. Add the nav link.
- **Expected deliverables:** `skills.js`, `Skills.jsx`, CSS additions.
- **Acceptance criteria:** every listed item was explicitly confirmed by the owner; categories are balanced; no level or proficiency language.
- **Tests and verification:** compare the rendered list to the owner's confirmed list; reading order and headings correct; build and lint.
- **Needed from owner:** I-09.
- **Gate to move forward:** the owner approves the final list.

---

## Phase 8 — Engineering Approach

- **Objective and scope:** how the owner thinks about engineering, framed as principles and interests.
- **Depends on:** Phase 4 (Phase 5 for the nav link).
- **Tasks**
  1. Draft 4 to 6 principles from the topics: readable and maintainable code; explicit business rules; testing and debugging; API and system design; security considerations and technical trade-offs.
  2. Phrase as approach ("I aim to…", "I care about…"), never as achievements or results.
  3. Get the owner to confirm each one (I-10); remove any that do not reflect them.
  4. Build `Approach.jsx`; keep it scannable, with short statements and no walls of text.
  5. Add the nav link.
- **Expected deliverables:** `Approach.jsx`, CSS additions (and copy in the component or a data file).
- **Acceptance criteria:** no unsupported claims (no "reduced X by Y%", no "built secure systems"); tone is specific and plain; the owner confirmed each principle.
- **Tests and verification:** copy audit against the Truth Table; headings and landmarks correct; build and lint.
- **Needed from owner:** I-10.
- **Gate to move forward:** owner approval of the copy.

---

## Phase 9 — About

- **Objective and scope:** a short, authentic About section.
- **Depends on:** Phase 4 (Phase 5 for the nav link).
- **Tasks**
  1. Draft concise copy (suggested limit: about 100 words) containing only: Computer Science education; Faculty of Science, Zagazig University; graduation year 2026; current direction toward Backend Engineering and Web3 Development.
  2. Get approval (I-11).
  3. Build `About.jsx`. No photo unless the owner supplies one; add `alt` text if so.
  4. Add the nav link.
- **Expected deliverables:** `About.jsx`, CSS additions.
- **Acceptance criteria:** only the four facts above plus owner-approved phrasing; no GPA, honors, location, availability, or invented background.
- **Tests and verification:** fact check against `AGENTS.md` Section 1; build and lint.
- **Needed from owner:** I-11.
- **Gate to move forward:** the owner approves the copy.

---

## Phase 10 — Contact

- **Objective and scope:** four contact channels with safe placeholder handling.
- **Depends on:** Phase 4 (Phase 5 for the nav link and Hero CTA).
- **Tasks**
  1. Create `src/data/links.js` with `PLACEHOLDER_GITHUB_URL`, `PLACEHOLDER_LINKEDIN_URL`, `PLACEHOLDER_INSTAGRAM_URL`, `PLACEHOLDER_EMAIL_ADDRESS`. Replace each with the real value as the owner supplies it (I-12).
  2. Build `Contact.jsx` with GitHub, LinkedIn, Instagram, and email.
  3. Placeholder behavior: render as visibly pending text, never as an `href`. Real URLs render as links with accessible names (for example "GitHub (opens in a new tab)") and `rel="noopener noreferrer"`. Email uses `mailto:` only from a real address.
  4. No contact form, no third-party form service (out of scope).
  5. Add the nav link; verify the Hero "Contact" CTA resolves.
  6. Update the Placeholder Register.
- **Expected deliverables:** `links.js`, `Contact.jsx`, CSS additions.
- **Acceptance criteria:** all four channels present; every unsupplied value is visibly pending and not clickable; every supplied value works; no guessed values anywhere.
- **Tests and verification**
  - Search the codebase for `PLACEHOLDER_` and confirm each match is in `links.js` and registered in `PROGRESS.md`.
  - Click-test every real link (or mark as not tested).
  - Keyboard test of every control.
  - Build and lint.
- **Needed from owner:** I-12 (provide whatever is ready; the rest stays pending).
- **Gate to move forward:** the owner approves; any remaining placeholders are listed.

---

## Phase 11 — Responsive Behavior

- **Objective and scope:** all sections work at every size. Fixes only, no new features.
- **Depends on:** Phases 5 to 10.
- **Tasks**
  1. Test widths 320, 375, 768, 1024, 1280, and 1440+ px, in portrait and landscape where relevant.
  2. Fix overflow, cramped spacing, awkward wrapping, and tiny tap targets.
  3. Check 200% browser zoom and larger default font size.
  4. Confirm images or SVGs scale and wide content scrolls inside its own container, not the page.
- **Expected deliverables:** CSS fixes; notes in `PROGRESS.md`.
- **Acceptance criteria:** no horizontal page scroll at any tested width; text stays readable; touch targets are at least 24×24 CSS px (WCAG 2.2 AA minimum) and ideally about 44 px; navigation usable on mobile.
- **Tests and verification:** a viewport matrix table in `PROGRESS.md` with pass, fail, or not visually verified for every width and section. If the agent cannot view a browser, provide the owner a manual checklist and keep those items unchecked until the owner confirms.
- **Needed from owner:** confirmation of any manually tested items.
- **Gate to move forward:** the matrix is complete and approved.

---

## Design Upgrade Track (D1–D6)

*Approved design upgrade sub-track executed between Phase 11 and Phase 12. Specifications defined in `gemini-code-1791903855995.md`.*

- **D1 — Visual Direction and Design System:** Refine tokens, surfaces, borders, typography, and CSS primitives.
- **D2 — Full-Screen Hero and Functional Interactive Terminal:** Immersive hero with truthful interactive terminal.
- **D3 — Visual Project Showcase:** Visual presentation of verified projects.
- **D4 — Blockchain Network Visualization:** Restrained, truthful SVG/CSS blockchain graphics.
- **D5 — Interactive Skills Explorer:** Interactive exploration of verified skills without rating bars.
- **D6 — Motion and Interaction Polish:** Coordinated transitions and subtle interactions respecting reduced motion.

---

## Phase 12 — Accessibility

- **Objective and scope:** verify and fix accessibility. Target WCAG 2.2 AA.
- **Depends on:** Phase 11.
- **Tasks**
  1. Keyboard: every interactive element reachable and operable; logical tab order; no traps; skip link works.
  2. Focus: visible on all elements, with sufficient contrast.
  3. Semantics: one `h1`; heading order; landmarks; `aria-labelledby` on sections; link and button names meaningful out of context.
  4. Contrast: recompute for final styles. 4.5:1 normal text, 3:1 large text and UI components.
  5. Motion: `prefers-reduced-motion` disables non-essential animation.
  6. Images and SVG: `alt` text or hidden from assistive tech if decorative.
  7. Reflow at 320 px wide and 200% zoom; information not conveyed by color alone.
  8. Optionally run the browser's built-in Lighthouse accessibility audit (no installation needed) and record the real score.
- **Expected deliverables:** fixes; an accessibility checklist with results in `PROGRESS.md`.
- **Acceptance criteria:** every checklist item passes or has a documented, owner-approved exception.
- **Tests and verification:** keyboard-only walkthrough; measured contrast numbers; reduced-motion check (OS setting or DevTools emulation); Lighthouse if run. Anything unmeasured is marked not verified.
- **Needed from owner:** a screen-reader spot check if available (optional).
- **Gate to move forward:** approval of results and exceptions.

---

## Phase 13 — Quality Assurance

- **Objective and scope:** a final audit before deployment. Fixes only.
- **Depends on:** Phase 12.
- **Tasks**
  1. `npm run build` and `npm run preview`; test the production build, not just the dev server.
  2. `npm run lint` if present.
  3. Open the browser console on every section; record errors and warnings.
  4. Click every internal anchor and every external link.
  5. **Content audit:** read every sentence against the Truth Table; search for forbidden terms (`deployed`, `mainnet`, `testnet`, `audited`, `production`, `completed`, `coverage`, `%`, `lorem`).
  6. **Placeholder scan:** search source and built output for `PLACEHOLDER_`.
  7. **Dependency audit:** `npm ls --depth=0` against the approved list; confirm nothing unapproved was added.
  8. Confirm no network requests to third parties and no secrets in the repository.
  9. Check page title, meta description, favicon, and language attribute.
  10. Confirm existing projects are untouched (the owner can verify the other folders independently).
  11. Update `README.md`: move every instruction you ran successfully to **Verified**.
- **Expected deliverables:** QA report in `PROGRESS.md`; fixes; updated `README.md`.
- **Acceptance criteria:** build succeeds; console is clean or issues are explained; all links behave; content audit finds no unverified claims; placeholders either resolved or explicitly signed off; dependency list matches the approved list.
- **Tests and verification:** actual command output and observations recorded for each task above.
- **Needed from owner:** decisions on any remaining placeholders; real links if now available.
- **Gate to move forward:** the owner signs off the QA report.

---

## Phase 14 — Deployment

- **Objective and scope:** publish the site. Nothing is claimed live until verified live.
- **Depends on:** Phase 13.
- **Tasks**
  1. Choose the hosting platform with the owner (I-13). Candidates include GitHub Pages, Netlify, Vercel, and Cloudflare Pages. Check the platform's **current** documentation; do not rely on memory.
  2. Decide the repository and visibility. The owner creates the account or repository; the agent never asks for passwords or tokens.
  3. Configure only what the platform needs (for example Vite's `base` setting for a project page on GitHub Pages, or a build command and output directory `dist`). Propose the change and wait for approval.
  4. Confirm the placeholder status (resolved, or signed off item by item).
  5. Deploy via the owner-approved method.
  6. Verify the live site: the URL loads; assets load; no console errors; every link works; direct anchor URLs work; responsive layout at a mobile width.
  7. Write down a rollback method (for example redeploying the previous commit or build).
  8. Record the live URL in `README.md` and `PROGRESS.md` **only after** step 6 passes.
- **Expected deliverables:** deployment configuration (if any), live URL, updated `README.md` deployment section, final `PROGRESS.md`.
- **Acceptance criteria:** the live site matches the verified production build; no secrets committed; deployment steps in `README.md` are marked Verified only if they were actually run.
- **Tests and verification:** open the live URL and run the step 6 checks; record observed results.
- **Needed from owner:** I-13, plus account actions.
- **Gate to finish:** the owner confirms the live site and approves project completion.

---

## 3. Post-Launch (Out of Scope Unless Approved)

Project updates (for example when FundMe or the Restaurant POS change status), the Finance Ledger API once implementation starts, and any new section are separate, approved tasks. Update the Truth Table in `AGENTS.md` first, with the owner's approval.
