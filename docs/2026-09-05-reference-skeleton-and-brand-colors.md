# Reference Skeleton + Brand Colors — Implementation Notes
**Session:** 5 September 2026 · **Status:** Built & tested locally (21/21) — pending push

---

## 1 · Reference deconstruction — portfolio.alphexdigitalz.pro

The reference (Abraham James — Full Stack Developer & Graphics Designer) follows the classic
dev-portfolio skeleton. Here's what was adopted, adapted, and deliberately kept better:

| Reference element | Decision | Why |
|---|---|---|
| Hero with **portrait photo** | ✅ **Adopted** | Name + face builds trust instantly; placed right of the name, work still follows immediately |
| **Socials row in hero** (GitHub, Instagram, WhatsApp, Email) | ✅ **Adopted** | Editorial mono-text links (no icon soup) — matches Orivon's typographic language |
| **3 hero CTAs** (Hire Me / View Projects / Download Resume) | ✅ **Adopted** | View selected work · Partner with Orivon · Download CV |
| **Dedicated Skills section** (categorized stack) | ✅ **Adopted** | New section 04 "Capabilities" — 4 category cards (Design & Creative / Microsoft Office / Data & Web / Professional Practice) |
| Skills in nav | ✅ **Adopted** | Nav now: Work · Documents · Services · Skills · About · Contact |
| **"Hire Me" header CTA** | ✅ Already had it | "Let's talk" + availability pill |
| Stats counters | ✅ Already had it | Lives in About (work-first rule) |
| Experience timeline | ✅ Already had it | In About |
| Testimonials | ✅ Already had it | Section 06 |
| 15 services grid | ❌ **Kept ours (6)** | Six focused services reads premium; 15 reads generic |
| Portfolio → GitHub link | ❌ **Kept ours** | Real project grid with case-study modals is far stronger |
| "Available: 24/7" | ❌ **Kept ours** | "Available for work" + "Booking Q4 2026" reads professional, not desperate |

## 2 · Brand palette — extracted from the official Orivon mark

The Brand Identity Sheet PNG could not be fetched this session (sandbox network restriction
blocks GitHub file downloads). Palette was therefore extracted programmatically from the
official mark (`assets/brand/mark.png`):

| Hex | Coverage | Role |
|---|---|---|
| `#020C1C` | 71.6% | **Brand midnight** — deep navy-black |
| `#C6962F` | 14.8% | **Brand gold** |
| `#E5BD5E` | 9.2% | Light gold |
| `#D2A541` | 1.8% | Gold |
| `#F8D57B` | 1.5% | Pale gold highlight |

### Applied as the dual-theme system

**Orivon Onyx (new DEFAULT — dark):** bg `#020C1C` · cards `#0A1526` · alt sections `#061020` ·
text bone `#F2F1EC` (17.3:1) · accent brand gold `#C6962F` (8.7:1 AA) · hover light gold `#E5BD5E`

**Orivon Gallery (light toggle):** paper `#FFFFFF`/`#F7F6F2` · text brand-midnight `#0A1226` ·
accent deep gold `#8A6520` (5.1:1 AA) · hover `#7D5C1D`

Document mocks (Word/Excel/PPT previews) stay paper-white in both themes via dedicated
`--mock-*` tokens. Theme toggle in header; preference persists in localStorage; brand marks
swap between black and bone variants automatically.

## 3 · Files changed in this update

- `index.html` — hero (portrait/socials/3 CTAs), Skills section, nav, renumbering (Contact = 07), theme attributes
- `css/style.css` — Onyx/Gallery token system, brand gold accents, mock tokens, new components
- `js/app.js` — theme manager (persist + image variant swapping)
- `assets/brand/mark-light.png`, `assets/brand/wordmark-light.png` — bone-recolored marks for the dark theme (generated from the official masters)

## 4 · Pending

- ⚠️ **Push to GitHub** — this session's push access is closed. Upload the zip contents via
  GitHub web UI (drag-drop into the repo root — replace files when prompted), or run the push
  from a new coding session.
- 🔍 **Verify against the actual Brand Identity Sheet** (`assets/Brand Identity Sheet.png` on
  GitHub) — next session should pull it, extract the exact hexes, and confirm/adjust the token
  values above (the mark-derived palette is expected to match, but the sheet is the source of truth).
