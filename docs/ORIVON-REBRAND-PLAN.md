# ORIVON — Portfolio & Brand Overhaul Plan
### From "Infinity Designs" to an agency-grade studio brand
**Prepared for:** Elijah Charles Sunday — Creative Lead, Orivon
**Date:** September 2026 · **Horizon:** 4 weeks to launch

> **✅ PROGRESS UPDATE (post-launch):** Phase 1 is **complete and live** — Orivon rebrand, official brand
> assets (mark, wordmark, favicon set), work-first hero, flagship grid ordering, all deployed at
> **https://charliejnr-21.github.io/portfolio/**. Phase 4 is partially done (free hosting live; custom
> domain pending). Phases 2–3 (4:3 cover system + full case studies) remain — see §8.

---

> **Positioning statement (the north star for every decision below):**
> Orivon is a strategy-led brand identity and campaign studio for ambitious, category-defining companies. Not a freelancer with a portfolio — a studio with a standard.

---

## 0 · Brand Foundation (read this first)

Everything below hangs on three decisions. Make them once, apply them everywhere.

### 0.1 Name architecture

| Layer | Name | Where it appears |
|---|---|---|
| **Studio brand** | **Orivon** | Logo, site title, email domain, invoices, social handles, case-study headers |
| **Founder** | **Elijah Sunday** (full: Elijah Charles Sunday) | Hero kicker, About, LinkedIn, signature, "Founded by Elijah Sunday" |
| **Legacy** | ~~Infinity Designs~~ | Retired. The ∞ evolved into the Orivon mark — continuity, not erasure |

> ✅ **Done:** name consistency applied across the site (display name "Elijah Sunday", full legal name
> "Elijah Charles Sunday" in About, copyright and meta tags). Remaining: align CV/resume documents.

### 0.2 The name story (suggested narrative — use in your About page)

> *"Orivon draws on **Orí** — the Yoruba concept of spiritual destiny and inner vision — with the Latinate **-von**, 'from.' From vision. Because every category-defining brand starts as somebody's inner picture of what could be. Orivon exists to make that picture impossible to ignore."*

A name story is what separates a "cool word" from a brand. This one roots the studio in Nigerian creative heritage while reading globally.

### 0.3 Service architecture

Replace the flat list `Brand Identity • Art Direction • Campaign Design` with a three-pillar architecture:

| Pillar | Contains | Case-study tag |
|---|---|---|
| **Brand Identity** | Strategy, naming support, logo systems, visual language, guidelines | `Identity` |
| **Art Direction** | Campaign concepts, photography direction, editorial design, social systems | `Direction` |
| **Campaign Design** | Launch campaigns, event & promotional systems, print + digital rollouts | `Campaign` |

*(MS Office work stays as "Studio Capabilities" inside About — proof of range, not brand-level.)*

---

## 1 · Brand Identity Integration & Rebranding — ✅ SHIPPED

### 1.1 Rebrand inventory — applied

| Location | Now says |
|---|---|
| `<title>` | "Orivon — Brand Identity · Art Direction · Campaign Design \| Elijah Sunday" |
| Header | Orivon mark (black + champagne gold) + ORIVON wordmark |
| Hero kicker | "Orivon — Brand Identity · Art Direction · Campaign Design" |
| Footer | "© 2026 Orivon — Elijah Charles Sunday" |
| Modal mailto subjects | "New project — {service} × Orivon" |
| Favicons | Full set in `assets/brand/` (256px, 32px, dark-tab 64px, apple-touch 180px) |

### 1.2 The logo system

| Mark | Use | Status |
|---|---|---|
| **Orivon mark** (`assets/brand/mark.png`) | Header, footer, philosophy block | ✅ Live |
| **ORIVON wordmark** (`assets/brand/wordmark.png`) | Header lockup + footer | ✅ Live |
| **Favicon set** | Browser tabs (light + dark), iOS home screen | ✅ Live |

### 1.3 Header logo rules (applied)

- Header mark 31px, wordmark 19px — shrink to 26px/16px on scroll
- Clear space = height of the mark on all sides
- SVG/PNG only; dark marks on the light theme (verified programmatically)
- Favicon: dark-tab variant recolors black → warm bone `#F2F1EC`

---

## 2 · Professional Hosting & Custom Domain — 🟡 PARTIAL (free hosting live)

**Current:** live free on GitHub Pages at https://charliejnr-21.github.io/portfolio/

**Free upgrades available (see FREE-DOMAIN-GUIDE.md):**
- `orivon.netlify.app` — instant via Netlify Drop / Git connect
- `orivon.is-a.dev` — free subdomain via is-a.dev PR (1–3 day approval)

**Platform matrix (2026 pricing, billed annually):**

| Platform | Custom domain cost | Best for | Verdict |
|---|---|---|---|
| **Framer** | $10/mo Basic (domain included) | Design-led, CMS case studies, forms, analytics | ⭐ Recommended upgrade |
| **Webflow** | $15/mo Basic (no CMS); CMS needs $25/mo Premium | Agency-standard tool, deepest control | Alternative |
| **Adobe Portfolio** | Free with Creative Cloud | Behance sync | Mirror only |
| **Netlify (current code)** | $0 + ~$12/yr domain | Your site is already fast & custom | Fastest path |

**Domain shortlist:** 1. orivon.design 2. orivon.studio 3. orivon.co
**Professional email:** hello@orivon.design (Zoho free–$1, or Google Workspace $6–7/user)

---

## 3 · Hero Section & Typography — ✅ SHIPPED (work-first variant)

**Live hero structure:**
```
KICKER   Orivon — Brand Identity · Art Direction · Campaign Design
H1       Elijah Sunday
ROLE     Creative Lead at Orivon        (Instrument Serif italic, cobalt)
SUB      For brands that intend to lead their category — from first mark
         to full campaign. Akwa Ibom, Nigeria · worldwide.
CTA      [View selected work ↓]  [Partner with Orivon →]
→        Selected Work grid, immediately
```

**Alternate H1 options (if you ever want a statement-led hero):**
- A: "Brands that intend to lead **start here.**"
- B: "Identity is strategy. **I make it** *unforgettable.*"
- C: "For brands with the *audacity* to be iconic."

**Three tagline variations:**
1. **"Identity systems · Art direction · Campaigns that turn attention into demand."**
2. "A strategy-led studio for category-defining brands."
3. "From first mark to full campaign — the visual language of ambitious brands."

**Type system (live):** Archivo (display 800, −3.5% tracking) · Instrument Serif (italic accents) · Inter (body) · IBM Plex Mono (labels, +14% tracking)

---

## 4 · Grid & Thumbnail Strategy — 🟡 ORDER DONE, COVERS PENDING

**Done:** flagship-first sequencing live — Millicent → Eve Wig → Big John Hotel → Worship → October → DESIGNZ lead the grid; nothing sits between the name and the work.

**Pending — cover art rules (Phase 2):**

| Rule | Spec |
|---|---|
| **Aspect ratio** | Uniform **4:3** across the grid (Behance covers: also export 808×632) |
| **Master size** | 2400×1800px (2× retina), WebP ≤ 400KB |
| **Composition** | Center-weighted, 8–10% margin, ONE focal point |
| **Your fix** | Portrait flyers re-composed at 60% scale on brand-color canvas with extended background + mono label |

**Grid:** 12-col, max-w 1440px, 24–32px gutters · flagship row 2-up (span 6), standard 3-up (span 4)
**Hover:** −4px lift + crossfade to second cover + metadata row below image, 400ms `cubic-bezier(0.22,1,0.36,1)`

---

## 5 · High-End Case Study Architecture — 🟡 MODALS DONE, DEDICATED PAGES PENDING

Every project already opens a case-study modal (objective, challenge, solution, palette, typography, file download). **Phase 2/3: dedicated full pages** with:

```
CLIENT — DELIVERABLE                     "DEMI Scents — Luxury Campaign System"
meta bar: Sector · Scope · Year · Timeline
EXECUTIVE SUMMARY      50–75 words (what · for whom · outcome · proof)
01 · THE CHALLENGE     business problem, not design problem
02 · STRATEGIC APPROACH the thinking + 2–4-word big idea
03 · ART DIRECTION     palette chips, type pairing, imagery rules
04 · EXECUTION         deliverables + 3D mockup gallery
05 · BUSINESS IMPACT   metric chips + client quote
DELIVERABLES · NEXT PROJECT → · CTA
```

**3D mockup standard:** one light source across all mockups · 45–60° angle · soft contact shadows · consistent device/substrate family · 16:9 @2× (3200×1800) · photoreal comps, never flat templates

**Framer CMS fields (when you rebuild):** Title · Client · Sector · Scope · Year · Timeline · Cover (4:3) · Hover cover · Summary · Challenge · Approach · Art direction · Gallery · Impact metrics · Client quote · Next project

---

## 6 · Color Palettes & Visual Tone (exact hex)

### Palette A — "Orivon Onyx" (dark/slate flagship look)

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#0B0C0F` | Page background |
| `--surface` | `#12141A` | Cards, panels |
| `--surface-2` | `#1A1D26` | Elevated/hover |
| `--ink` | `#F2F1EC` | Primary text (16.9:1) |
| `--ink-2` | `#A6A8B3` | Secondary (7.1:1) |
| `--line` | `rgba(242,241,236,0.09)` | Hairlines |
| `--accent` | `#C9A961` | **Champagne gold** (matches your mark's #C8A050) |
| `--accent-ink` | `#0B0C0F` | Text on accent |

### Palette B — "Orivon Gallery" (clean editorial — CURRENTLY LIVE)

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#FAFAF7` | Warm paper |
| `--surface` | `#F1F0EB` | Warm alternates |
| `--ink` | `#101014` | Primary text |
| `--ink-2` | `#55565E` | Secondary (7.2:1) |
| `--line` | `#E7E5DE` | Hairlines |
| `--accent` | `#1B49D8` | Cobalt (interactive) |
| `--accent-deep` | `#123AB2` | Hover |

**Usage discipline:** 60% background / 30% ink / 10% accent. Accent only on interactive elements + one hero word.

---

## 7 · CTAs & Client Conversion — ✅ SHIPPED (partial)

**Live:** header "Let's talk" + availability pill · hero "Partner with Orivon" (mailto) · footer "Start a project" + response promise · branded form subjects ("New project — {service} × Orivon").

**Pending (when moving off static/GitHub Pages):**
- Budget bracket field on inquiry form ($1–3k / $3–8k / $8k+) — self-selecting high-budget clients
- Calendly "Book a 20-min intro call" (free tier, brand it with the mark + Onyx palette)
- Capabilities deck PDF (12-page best-6 case studies) as a leave-behind

**Microcopy bank:**
- "Currently booking **Q4 2026** — two project slots remaining."
- "Every engagement starts with a 20-minute conversation. No pitch, no pressure."
- "From first mark to full campaign — one studio, one standard."

---

## 8 · Rollout Roadmap — status

| Phase | Week | Deliverables | Status |
|---|---|---|---|
| **1 · Rebrand core** | 1 | Orivon identity, hero, CTAs, name consistency, brand assets | ✅ **DONE — live** |
| **2 · Work system** | 2 | 16 covers re-composed to 4:3; dual-cover hovers; DEMI/Millicent full case-study page | 🔲 Next |
| **3 · Complete case studies** | 3 | Remaining 5 flagship case studies; capabilities deck | 🔲 |
| **4 · Domain & launch** | 4 | Custom domain (or free is-a.dev first), email, analytics, social bios | 🟡 Free hosting live; domain pending |

**Definition of done:** a creative director lands on the site, understands the positioning in 5 seconds, sees 6 flagship covers in a uniform grid, opens one case study, sees strategic thinking + 3D mockups + business impact, and clicks "Partner with Orivon."

---

*Orivon — from vision, from Orí.*
