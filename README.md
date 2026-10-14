# Ahmed Atif — Developer Portfolio

A personal developer portfolio for **Ahmed Atif**, a Computer Science graduate (Faculty of Science, Zagazig University, 2026), focused equally on **Backend Engineering** and **Web3 Development**. It is built to support applications for internships and entry-level roles in both fields.

> **Project status: planning complete, no code yet.** This README describes the project as planned. Nothing in the instructions below has been run in this project yet, so everything sits under **Needs verification** until a phase proves it. See `PROGRESS.md` for the current state.

---

## Project Documents

| File | Purpose |
| --- | --- |
| `AGENTS.md` | Permanent rules for the AI coding agent (truthfulness, safety, design, workflow) |
| `PROJECT_PLAN.md` | The 14-phase roadmap from setup to deployment |
| `PROGRESS.md` | What has actually been done and verified |
| `README.md` | This file |

## Intended Technology Stack

- **React** with **Vite**
- **Plain CSS** (design tokens as custom properties)
- No Tailwind CSS, Bootstrap, or UI component libraries
- No dependency beyond the approved Vite React template without the owner's approval
- Planned hosting: undecided (see Phase 14 of `PROJECT_PLAN.md`)

## Planned Sections

Hero · Selected Projects · Technical Capabilities · Engineering Approach · About · Contact

Content follows the accuracy rules in `AGENTS.md`: nothing is invented, project statuses are labeled honestly, and contact values stay as clearly marked placeholders until the owner supplies them.

---

## Verification Status

### Verified

None yet. No command in this project has been run on the owner's machine.

### Needs verification

Every command and instruction in the sections below. Each moves to **Verified** only after it runs successfully in this project, and the agent must record the result in `PROGRESS.md`.

| Instruction | Verified in phase |
| --- | --- |
| Owner setup commands (create folder, copy handoff files) | Phase 2 |
| Scaffold command and the protected procedure | Phase 3 |
| `npm install` | Phase 3 |
| `npm run dev` | Phase 3 |
| `npm run build` | Phase 3 and 13 |
| `npm run preview` | Phase 13 |
| `npm run lint` (if the template provides it) | Phase 3 and 13 |
| Deployment steps | Phase 14 |

---

## Prerequisites (Needs verification)

- **Windows** with **PowerShell**
- **Node.js** and **npm**, at a version that meets the current official Vite requirement. Check the Vite documentation for the current minimum.
- **Git** (optional, only if the owner chooses to use it)

Check what you have in PowerShell:

```powershell
node -v
npm -v
git --version
```
These print installed versions. An error such as "not recognized" means the tool is not installed or not on your PATH.

## Initial Setup by the Owner (Needs verification)

Run one block at a time. The first two blocks never overwrite anything: the folder is created only if it does not exist.

```powershell
$parent = "C:\PATH\TO\PARENT"          # PLACEHOLDER: a folder that is NOT an existing project
$target = Join-Path $parent "ahmed-atif-portfolio"
$target
```
Sets the paths and prints the target folder. Nothing is created yet.

```powershell
if (Test-Path -LiteralPath $target) { Write-Host "STOP: folder already exists: $target" }
else { New-Item -ItemType Directory -Path $target | Out-Null; Write-Host "Created: $target" }
```
Creates the folder only when the path is free.

```powershell
$src = "C:\PATH\TO\HANDOFF\FILES"      # PLACEHOLDER: where you saved the four files
Copy-Item -LiteralPath "$src\AGENTS.md","$src\PROJECT_PLAN.md","$src\PROGRESS.md","$src\README.md" -Destination $target
Get-ChildItem -LiteralPath $target -Force | Select-Object Name
```
Copies the four handoff files into the new folder and lists them.

**Then open only `ahmed-atif-portfolio` as the workspace in Google Antigravity, never its parent folder.** Your other projects (including FundMe and the Restaurant POS) must stay outside the agent's workspace.

## Using This Package with Google Antigravity

1. Open the `ahmed-atif-portfolio` folder as the workspace.
2. Start the agent with a prompt like:

   > Read `AGENTS.md`, `PROJECT_PLAN.md`, `PROGRESS.md`, and `README.md` in full. Follow `AGENTS.md` strictly. Report the current phase and the next step from `PROGRESS.md`. Do not create, edit, delete, or install anything until I approve the plan for the next phase.

3. Approve each phase explicitly before the next one starts.

**Recommended agent settings (Needs verification):** if your Antigravity version offers a setting that asks for confirmation before running terminal commands or editing files, keep it on. Check what your version actually provides; this package does not assume any specific feature.

---

## Setup, Run, and Build (Needs verification; applies after Phase 3)

The project does not exist as code yet. Once Phase 3 scaffolds it, these standard Vite commands are expected to apply. Confirm the real script names in `package.json`.

```powershell
npm install
```
Installs the dependencies listed in `package.json`.

```powershell
npm run dev
```
Starts the local development server and prints a local URL to open in your browser.

```powershell
npm run build
```
Creates the production build in the `dist` folder.

```powershell
npm run preview
```
Serves the production build locally so you can test it before deploying.

```powershell
npm run lint
```
Runs the linter, if the template provides one.

## Planned Project Structure

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
    ├── data/        (projects.js, skills.js, links.js)
    ├── components/  (Navbar, Hero, Projects, Skills, Approach, About, Contact)
    └── styles/      (tokens.css, base.css, components.css)
```

Contact values live only in `src/data/links.js`. Until supplied they appear as visibly pending text and never as links.

## Deployment (Needs verification; Phase 14)

The platform is not chosen yet. Candidates include GitHub Pages, Netlify, Vercel, and Cloudflare Pages. Steps will be written here after the platform is chosen, checked against its current documentation, and run successfully. No live URL is listed because none has been verified.

## Placeholders

| Placeholder | Meaning |
| --- | --- |
| `PLACEHOLDER_GITHUB_URL` | GitHub profile URL, not yet supplied |
| `PLACEHOLDER_LINKEDIN_URL` | LinkedIn profile URL, not yet supplied |
| `PLACEHOLDER_INSTAGRAM_URL` | Instagram profile URL, not yet supplied |
| `PLACEHOLDER_EMAIL_ADDRESS` | Email address, not yet supplied |

## Safety Notes

- The agent works only inside this folder and never touches other projects.
- The Vite scaffold would overwrite `README.md`; Phase 3 of `PROJECT_PLAN.md` protects the handoff files.
- No secrets, passwords, or tokens are needed anywhere in this project.
