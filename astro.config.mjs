import { defineConfig } from 'astro/config';

// Minimal config that works for:
// - GitHub Project Pages: https://<user>.github.io/<repo>/
// - Custom domain/root pages: base omitted
//
// On GitHub Actions, set base from repo name automatically.
const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1];
const isGhPagesProject = !!process.env.GITHUB_ACTIONS && !!repo;

export default defineConfig({
  output: 'static',
  // If you later add a custom domain, set `site: 'https://example.com'`.
  base: isGhPagesProject ? `/${repo}` : undefined,
});
