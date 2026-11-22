# Deployment verification and release checklist

This is a **procedure**, not evidence that a live deployment or its features have been verified.

## Known repository configuration

- Framework: Next.js 13 (see `package.json`).
- `netlify.toml` currently runs `npx next build`, publishes `.next`, and enables `@netlify/plugin-nextjs`.
- The README also documents `npm ci`, `npm run typecheck`, `npm run build`, and `npm run lint`.
- `.env.example` lists optional public Supabase URL and anon-key settings. These are **not** proof that a production backend is configured.
- No `vercel.json` or `.github/workflows/ci.yml` was found on `main` during the 2026-11-22 review. Other workflow files or hosting settings may exist; verify them in the GitHub UI.

## Before publishing

1. Review the PR diff and other open PRs for overlapping paths. Check the latest base commit and deployment status immediately before merge.
2. On the exact commit intended for release, run:
   ```bash
   npm ci
   npm run typecheck
   npm run lint
   npm run build
   ```
   Record command results and commit SHA. A successful local build does not establish that a hosted deployment works.
3. Confirm the hosting provider's configured build command, publish directory, framework plugin, Node version, and deployment branch. Compare with `netlify.toml`; do not assume a provider has deployed merely because the file exists.
4. Check whether optional Supabase features need environment variables. Use the hosting provider's secret management; never paste actual values into issues, PRs, screenshots, or logs. Verify row-level security before enabling any data-backed feature.
5. Review public contact details and project claims against `docs/PORTFOLIO_EVIDENCE.md`. In particular, audit all routes and shared constants, not just the homepage.

## Preview smoke test (on the actual preview URL)

- Open the homepage and projects page on mobile and desktop widths; verify no horizontal overflow or broken assets.
- Navigate using keyboard only: Tab, Shift+Tab, Enter and Space. Confirm focus indicators and selected project/filter states.
- Check every prominent navigation and project link for correct destinations and obvious 404s.
- Confirm that missing optional backend configuration produces a safe empty or unavailable state rather than a crash or misleading success message.
- Inspect browser console and network failures. Avoid recording any user-specific or secret data.
- Confirm the preview corresponds to the intended commit SHA, then recheck checks and review status before any merge.

## Release evidence template

Copy this into the relevant PR when results are available; use **not tested** rather than assuming a pass.

| Item | Result | Evidence |
| --- | --- | --- |
| Commit SHA | not recorded | commit URL |
| `npm ci` | not tested | CI job or local output |
| Typecheck / lint / build | not tested | CI job or local output |
| Hosting preview | not tested | preview URL and deployment commit |
| Mobile / desktop navigation | not tested | browser and viewport |
| Keyboard navigation | not tested | browser and steps |
| Optional backend behavior | not tested | test conditions (no secrets) |
| Public privacy / claims review | not tested | reviewer notes |

Do not mark the release verified until the applicable checks have actually been performed.
