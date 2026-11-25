# Aarish — Portfolio & Website Projects

A Next.js website for presenting software projects and experiments, explaining web/AI work, and exploring website-product workflows.

**Status:** Active development. This is a portfolio and product experiment, not a claim of professional credentials or completed client contracts. Verify individual features against the current code and deployed build.

## Public source projects

- [QuestPop](https://github.com/Aarish-khatib/Questpop) — React/Vite productivity app with quest planning and local progress tracking
- [Universe](https://github.com/Aarish-khatib/Universe) — work-in-progress 3D space visualization
- [Limitless AI](https://github.com/Aarish-khatib/AI) — local-first AI and media workspace; individual features require validation

## Technology

- Next.js 15, React, TypeScript, Tailwind CSS
- Framer Motion, Three.js, UI component libraries
- Optional Supabase-backed data for selected site features

## Run locally

Install Node.js and npm. With the committed lockfile:

```bash
git clone https://github.com/Aarish-khatib/My-portfolio-and-Website-shop-1.git
cd My-portfolio-and-Website-shop-1
npm ci
npm run dev
```

Open the local URL printed by Next.js (normally `http://localhost:3000`).

### Optional Supabase connection

To connect the site's data-backed features, copy `.env.example` to `.env.local` and fill in your own project's public URL and anon key:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-anon-key
```

Never commit `.env.local`, service-role keys, passwords, or API secrets. The anon key is public by design; enforce row-level security and appropriate access policies in Supabase. Without configured backend access, some features may use static data, show empty states, or remain unavailable.

## Verify changes

```bash
npm run typecheck
npm run build
npm run lint
```

These are available project scripts, not a guarantee that the current branch passes every check. Inspect CI/deployment results when publishing.

## Portfolio content and claims

See [Portfolio evidence policy](docs/PORTFOLIO_EVIDENCE.md) for how project descriptions, credentials, client claims, and privacy should be handled. Only publish actual work and verified achievements. Work that is unfinished should be labeled accordingly.

## Repository notes

- This project includes a website/store concept; production billing, fulfillment, and commercial commitments must be verified independently.
- Third-party integrations may need configuration and service-specific terms.
- No license is implied. Ask the repository owner before reusing the code beyond rights granted by law.

---

Maintained for [Aarish](https://github.com/Aarish-khatib).
