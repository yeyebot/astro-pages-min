# Astro + GitHub Pages (minimal)

## Local
```bash
npm ci
npm run dev
```

## Deploy
- Repo → Settings → Pages → **Source: GitHub Actions**
- Push to `main`

### Important: private repo limitation
GitHub Pages requires **Pro/Team/Enterprise** for **private** repos. If you keep this repo private on GitHub Free, Pages will not enable.

### Custom domain (optional)
Add `public/CNAME` and set `site` in `astro.config.mjs`.
