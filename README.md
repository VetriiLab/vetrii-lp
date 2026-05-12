# Vetrii — Landing Page

Marketing site for [vetrii.com](https://vetrii.com). Built with Next.js 16 (App Router) + Chakra UI + Framer Motion. Deployed on AWS Amplify Hosting.

## Repository layout

```
landing-page/                 ← repo root (also: monorepo submodule path)
├── amplify.yml               ← Amplify build spec (uses appRoot: app)
├── .github/
│   ├── actions/setup-node-yarn/   ← reusable composite action
│   └── workflows/
│       ├── feature-workflow.yml      (feat/**, fix/**, chore/**, task/**)
│       ├── staging-v2-workflow.yml   (push to staging-v2 → Amplify)
│       └── main-workflow.yml         (push to main → Amplify)
└── app/                      ← Next.js project root (everything below here)
    ├── package.json
    ├── yarn.lock
    ├── next.config.ts
    ├── tsconfig.json
    ├── eslint.config.mjs
    ├── public/
    └── src/
        ├── app/              ← App Router entry
        ├── components/
        └── lib/
```

The `app/` subfolder is required because Amplify reuses the same monorepo convention as the main `vetrii-frontend` app (`AMPLIFY_MONOREPO_APP_ROOT=app`).

## Local development

```bash
cd app
yarn install
yarn dev          # http://localhost:3000
yarn lint         # ESLint
yarn tsc --noEmit # type check
yarn build        # production build
```

Use **yarn** (not npm/pnpm). Only `app/yarn.lock` is committed.

## Branch strategy

- `feat/**`, `fix/**`, `chore/**`, `task/**` → CI runs lint + build (no deploy)
- `staging-v2` → CI runs lint + triggers Amplify build for `staging-v2.vetrii.com`
- `main` → CI runs lint + triggers Amplify build for `vetrii.com` / `www.vetrii.com`

Promote: `feat/** → PR → staging-v2 → PR → main`.

## Deployment

Hosting: **AWS Amplify**, app `vetrii-aws-app-landing-page-vetrii` (`d367va2kg172f6`), region `us-east-1`.

- Auto-build on push is **disabled** in Amplify. The GitHub Actions workflow runs lint/tsc and then POSTs to the per-branch Amplify webhook (stored as `AMPLIFY_WEBHOOK` secret in the matching GitHub Environment: `Production` for `main`, `staging-v2` for `staging-v2`).
- Default URLs: `https://main.d367va2kg172f6.amplifyapp.com` and `https://staging-v2.d367va2kg172f6.amplifyapp.com`.

Full infra notes — including the DNS records that need to be created at **GoDaddy** (where `vetrii.com` is registered, **not** AWS Route 53) — live in the orchestrator monorepo at `project/infra/landing-page-deploy.md`.
