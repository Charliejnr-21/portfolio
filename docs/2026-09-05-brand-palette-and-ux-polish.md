# Orivon — Official Brand Palette Application & UX Polish

**Date:** 2026-09-05
**Status:** Complete locally — 43/43 automated tests passing. Awaiting upload to GitHub.
**Supersedes:** the provisional mark-derived palette in `2026-09-05-reference-skeleton-and-brand-colors.md`.

---

## 1. The official palette (verbatim from the Brand Identity Sheet)

| Colour | HEX | Role (per sheet) |
|---|---|---|
| Deep Navy | `#0B1F3A` | Primary brand colour |
| Warm Ivory | `#F7F2E8` | Primary light / background |
| Charcoal Black | `#111315` | Dark backgrounds / text |
| Champagne Gold | `#D6B36A` | Premium accent |
| Soft Gold | `#E5C98A` | Secondary gold / highlights |
| Slate Blue | `#344B68` | Secondary technology colour |
| Muted Ivory | `#E9E1D2` | Secondary neutral |
| Pure White | `#FFFFFF` | Clean backgrounds |
| Deep Navy Black | `#071321` | Premium dark mode |
| Gold Shadow | `#A98545` | Dark gold / detail work |

---

## 2. How each colour is applied

### Orivon Midnight — premium dark mode (DEFAULT)

| Sheet colour | Applied as |
|---|---|
| Deep Navy Black `#071321` | `--bg` page canvas · `--accent-ink` text on gold · browser chrome (`theme-color`) |
| Deep Navy `#0B1F3A` | `--paper` — cards, panels, mobile nav overlay · ambient light pools |
| Warm Ivory `#F7F2E8` | `--ink` primary type · recoloured `mark-light.png` / `wordmark-light.png` |
| Muted Ivory `#E9E1D2` | blended to `--ink-2 #BCB8AF` (secondary type) and `--ink-3 #7E8798` (meta, slate-tinted) |
| Champagne Gold `#D6B36A` | `--accent` — buttons, active chips, focus rings, frames, selection |
| Soft Gold `#E5C98A` | `--accent-deep` hover · `--accent-text` for small gold type |
| Gold Shadow `#A98545` | `--gold-shadow` — scrollbar, gradient detail |
| Slate Blue `#344B68` | `--slate` — Excel mock headers (technology colour), tint of meta text |
| Charcoal Black `#111315` | modal backdrop + shadow tint (`--shadow`) |

### Orivon Ivory — warm paper (LIGHT theme, via toggle)

| Sheet colour | Applied as |
|---|---|
| Warm Ivory `#F7F2E8` | `--bg` page canvas · browser chrome |
| Pure White `#FFFFFF` | `--paper` cards, inputs, mock pages |
| Muted Ivory `#E9E1D2` | `--paper-warm` section bands, testimonial cards, form |
| Charcoal Black `#111315` | `--ink` body type |
| Deep Navy `#0B1F3A` | `--heading` — every h1–h3 in brand navy |
| Slate Blue `#344B68` | `--ink-2` all secondary text (its natural sheet role) |
| Gold Shadow `#A98545` | `--accent` — buttons, chips, frames, large display accents |
| Gold Shadow text-grade `#77602F` | `--accent-text` — small gold type (AA-safe ramp of Gold Shadow) |
| Soft Gold (shaded) `#B8945A` | `--accent-deep` hover |
| Deep Navy Black `#071321` | `--accent-ink` — text on gold buttons/chips |

### Contrast audit (WCAG 2.1)

| Pair | Ratio | Grade |
|---|---|---|
| Champagne Gold on Deep Navy Black | 9.3:1 | AAA |
| Warm Ivory on Deep Navy Black | 16.7:1 | AAA |
| Warm Ivory on Deep Navy (cards) | 14.8:1 | AAA |
| Gold Shadow + navy-black text (light buttons) | 4.8:1 | AA |
| Gold Shadow on Warm Ivory (large display type) | 3.07:1 | AA (large) |
| Text-grade gold `#77602F` on Warm Ivory | 5.4:1 | AA |
| Deep Navy headings on Warm Ivory | 14.8:1 | AAA |
| Slate Blue secondary type on Warm Ivory | 7.6:1 | AAA |

**Theme values renamed:** `onyx`/`gallery` → **`midnight`/`ivory`** (nothing was live yet, and the JS maps any legacy stored value automatically).

---

## 3. Portraits — the 10 photos (SAVE_CHARLIE 1–10)

Ten photos of Elijah were uploaded to the repo root of `assets/` on GitHub. They belong in a proper folder with clean names:

| On GitHub now (assets/) | Move to |
|---|---|
| `SAVE_CHARLIE (1).png` | `assets/portraits/elijah-01.png` |
| `SAVE_CHARLIE (2).png` | `assets/portraits/elijah-02.png` |
| `SAVE_CHARLIE (3).png` | `assets/portraits/elijah-03.png` |
| `SAVE_CHARLIE (4).png` | `assets/portraits/elijah-04.png` |
| `SAVE_CHARLIE (5).png` | `assets/portraits/elijah-05.png` |
| `SAVE_CHARLIE (6).png` | `assets/portraits/elijah-06.png` |
| `SAVE_CHARLIE (7).png` | `assets/portraits/elijah-07.png` |
| `SAVE_CHARLIE (8).png` | `assets/portraits/elijah-08.png` |
| `SAVE_CHARLIE (9).png` | `assets/portraits/elijah-09.png` |
| `SAVE_CHARLIE (10).png` | `assets/portraits/elijah-10.png` |

### Where they appear on the site

- **About portrait** — `elijah-02.png` (falls back to `profile.png` until moved)
- **Studio strip** — a slow, seamless marquee of 8 photos (`elijah-01, 03–09`) inside the About section, "Behind the work — the creative lead, in person". Pauses on hover; respects reduced motion; hides itself entirely until the photos exist
- **Hero** — keeps `profile.png` for now (swap to any portrait later, one line)
- `elijah-10.png` is spare — future hero candidate

**Graceful degradation is tested:** if the photos aren't moved yet, the About portrait falls back to `profile.png` and the strip stays hidden. Nothing ever renders broken.

### How to move them (GitHub web UI, ~4 minutes)

1. Go to the repo → `assets/` → open `SAVE_CHARLIE (1).png`
2. Click the **pencil ✏️ (Edit)** icon
3. In the filename field, replace `assets/SAVE_CHARLIE (1).png` with `assets/portraits/elijah-01.png`
4. **Commit changes** directly to main
5. Repeat for 2–10

*(Faster alternative: from your computer, make a `portraits` folder containing the 10 photos renamed `elijah-01.png`…`elijah-10.png`, then repo → assets → Add file → Upload files → drag the folder in.)*

---

## 4. UX / UI polish added

1. **Scrollspy** — the nav link of the section you're reading underlines in gold, no layout shift
2. **Smooth theme cross-fade** — 380 ms colour transition class applied only during the toggle (no permanent transition overhead)
3. **Browser chrome sync** — `meta theme-color` follows the theme (#071321 / #F7F2E8)
4. **Ambient brand wash** — deep-navy light pools on midnight; soft gold on ivory; fine film grain on dark (SVG, 3.5% opacity)
5. **Gold scrollbar** — themed for both modes (WebKit + Firefox)
6. **Back-to-top FAB** — glass circle, fades in after 640 px, respects reduced motion
7. **Studio strip** — seamless photo marquee (see above)
8. **Active filter/doc chips are now gold** (accent fill + navy-black text) instead of inverted ink
9. **Hero portrait micro-interaction** — image lifts, offset gold frame expands on hover
10. **About portrait** lifted with a brand shadow
11. **Excel mock headers use Slate Blue** — the sheet's "technology colour" where it means something
12. **Perf polish** — `fetchpriority="high"` on the hero portrait, `loading="lazy" decoding="async"` on all below-fold marks/portraits

---

## 5. Changed files (this pass)

- `index.html` — theme attr `midnight`, theme-color meta, About portrait swap + fallback, studio strip, FAB, lazy/async hints
- `css/style.css` — full official-palette token system (+`--heading`, `--accent-text`, `--gold-shadow`, `--slate`, `--shadow`), component remaps, ambient wash, grain, scrollbar, scrollspy, FAB, strip styles
- `js/app.js` — Theme engine (midnight/ivory, meta sync, cross-fade class, legacy mapping, `aria-pressed`), scrollspy, FAB, graceful image fallbacks
- `assets/brand/mark-light.png`, `wordmark-light.png` — regenerated in Warm Ivory `#F7F2E8`
- `docs/2026-09-05-brand-palette-and-ux-polish.md` — this file

## 6. Next session

1. Fetch `SAVE_CHARLIE` photos + `Brand Identity Sheet.png` (network permitting), visually curate: pick the strongest hero portrait, optimise to WebP ≤ 400 KB each
2. Reconcile this branch with `origin/main` and push (do not force-push)
3. Delete the 10 loose `assets/SAVE_CHARLIE (N).png` copies after the portraits are moved
4. Optional: free-domain flow (see `FREE-DOMAIN-GUIDE.md`)
