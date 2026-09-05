# 🌐 Free Domain Options for the Orivon Portfolio — Complete Guide

**Your portfolio is already hosted FREE and live at:**
## 👉 https://charliejnr-21.github.io/portfolio/
*(GitHub Pages — free forever, HTTPS included, no expiry)*

---

## The honest landscape (2026)

- **Free top-level domains (like .com/.tk/.ml) are effectively gone.** Freenom shut down its free registrations in 2024 — avoid anything claiming "free .com forever."
- **What's genuinely free: subdomains** — and some look very professional.

---

## ⚡ Option A — `orivon.netlify.app` (INSTANT, ~3 minutes)

1. Go to `github.com/Charliejnr-21/portfolio` → green **Code** button → **Download ZIP** → extract
2. Go to **app.netlify.com/drop** → drag the extracted `portfolio-main` folder onto the page
3. You instantly get a live link like `https://random-name-123.netlify.app`
4. **Site configuration → Change site name** → type `orivon` → Save
5. **Your link: `https://orivon.netlify.app`**

**Even better (auto-updating):** free Netlify account → "Add new site → Import an existing project" → connect GitHub → select `portfolio`. Every push to GitHub then auto-redeploys both versions.

---

## 🏆 Option B — `orivon.is-a.dev` (best free "domain", ~1–3 days approval)

### Step 1 — Submit the registration (5 minutes)
1. Log in to GitHub → go to **github.com/is-a-dev/register**
2. Click **Fork** → Create fork
3. In YOUR fork: **Add file → Create new file** → name it exactly `domains/orivon.json`
4. Paste the contents of **`orivon.is-a.dev.json`** (in this folder):
```json
{
  "$schema": "https://raw.githubusercontent.com/is-a-dev/register/main/domain-schema.json",
  "owner": {
    "username": "Charliejnr-21",
    "email": "charliejnr38@gmail.com"
  },
  "record": {
    "CNAME": "charliejnr-21.github.io"
  }
}
```
5. Commit to a new branch → **Open a pull request** to `is-a-dev/register`
6. A maintainer merges it (usually 1–3 days) → `orivon.is-a.dev` DNS goes live

### Step 2 — Connect it (ONLY after the PR is merged)
> ⚠️ Setting a custom domain before DNS exists would temporarily break your live site.

1. In `github.com/Charliejnr-21/portfolio` → **Add file → Create new file**
2. Name it exactly `CNAME` (no extension), content one line: `orivon.is-a.dev`
3. Commit to `main` → Pages serves **https://orivon.is-a.dev**
4. Settings → Pages → confirm custom domain → tick **Enforce HTTPS** once available (≤24h)

---

## Alternatives

| Option | Link style | Notes |
|---|---|---|
| `eu.org` | `orivon.eu.org` | Free real domain — manual approval takes **weeks** |
| `js.org` | `orivon.js.org` | PR-based; meant for JS projects — marginal fit |
| `duckdns.org` | `orivon.duckdns.org` | Instant but reads "hobbyist" — not recommended |
| Current | `charliejnr-21.github.io/portfolio` | Already yours, free forever |

---

## 💎 When ready for the real upgrade (~$12/year)

**`orivon.design`** from Namecheap/Porkbun/Cloudflare:
- Buy domain → repo **Settings → Pages → Custom domain** → enter it
- At the registrar: `CNAME orivon.design → charliejnr-21.github.io`
- Enforce HTTPS → done in ~15 minutes
- Unlocks professional email: `hello@orivon.design`

---

## Recommendation

1. **Today:** Option A — `orivon.netlify.app` (instant)
2. **This week:** submit Option B — `orivon.is-a.dev`
3. **When revenue allows:** buy `orivon.design`
