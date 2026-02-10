# Custom domain on GitHub Pages (quick guide)

You can use your own domain with GitHub Pages.

## 1) Set the custom domain in GitHub
Repo → **Settings → Pages → Custom domain**
- Example: `builderlog.example.com` (subdomain) or `example.com` (apex)

GitHub will guide you through DNS + HTTPS.

## 2) Add `public/CNAME`
Create `public/CNAME` with **ONLY** your domain on a single line:
```text
builderlog.example.com
```
Commit + push.

## 3) DNS records
### Subdomain (recommended)
- `builderlog.example.com` → **CNAME** to:
  - `yeyebot.github.io`

### Apex/root domain
GitHub Pages uses **A records** (or ALIAS/ANAME if your DNS supports it). Follow GitHub’s current docs for the exact IPs.

## 4) Common gotcha (Astro)
- For **project pages** (`https://<user>.github.io/<repo>/`), you must set Astro `base` to `/<repo>`.
- For **custom domains**, you generally want **no `base`** (root `/`).

In this repo we auto-set `base` during GitHub Actions runs using `GITHUB_REPOSITORY`, so it works on project pages without extra config.
