# ORIVON — Portfolio

> **From vision.** — *Orí* (Yoruba): inner vision, destiny.

The studio portfolio of **Elijah Charles Sunday — Creative Lead at Orivon**. Brand identity · Art direction · Campaign design, plus business documents, dashboards and presentations. Based in Akwa Ibom, Nigeria — working worldwide.

### 🌐 Live site — [https://charliejnr-21.github.io/portfolio/](https://charliejnr-21.github.io/portfolio/)

---

## 🎨 Design

A clean, **editorial, Behance-inspired** portfolio in the official Orivon brand palette, with a premium dark mode and a warm light mode. The work leads — the interface stays out of the way.

**Themes:** **Orivon Midnight** (default — Deep Navy Black canvas, Warm Ivory type, Champagne Gold accents) and **Orivon Ivory** (Warm Ivory canvas, Deep Navy headings, Gold Shadow accents), toggled in the header and remembered per visitor.

| Token | Value |
|-------|-------|
| Canvas | Deep Navy Black `#071321` / Warm Ivory `#F7F2E8` |
| Surfaces | Deep Navy `#0B1F3A` / Pure White `#FFFFFF` |
| Ink | Warm Ivory `#F7F2E8` / Charcoal Black `#111315` |
| Accent | Champagne Gold `#D6B36A` / Gold Shadow `#A98545` |
| Secondary | Soft Gold `#E5C98A` · Slate Blue `#344B68` · Muted Ivory `#E9E1D2` |
| Display type | **Archivo** (tight, bold headlines) |
| Editorial accents | **Instrument Serif** (italic) |
| Body | **Inter** |
| Labels & metadata | **IBM Plex Mono** |

## ✨ Features

- 🖼 **Behance-style masonry work grid** — 16 commissioned design pieces with category filters
- 📂 **Case-study modals** — every project opens with objective, challenge, solution, palette & typography
- 🗂 **The Office Studio** — 30 Microsoft Word / Excel / PowerPoint projects as case studies, each with its **actual file downloadable**
- 🔢 **Editorial numbered services** — six capabilities, from brand identity to virtual assistance
- 👤 **About** — bio, philosophy, facts, experience timeline and full toolset
- 📄 **Resume kit** — 4 role-specific resumes + cover letters and the complete CV, one click away
- 🎭 **Dual theme** — Orivon Midnight / Ivory with smooth cross-fade and per-visitor memory
- 🧭 **Scrollspy nav**, gold scrollbar, back-to-top button, ambient brand wash
- 📸 **Studio strip** — a seamless marquee of the creative lead's portraits in About
- 💬 **Testimonials** from real clients
- ✉️ **Working contact form** (mailto-based, no backend needed)
- ♿ **Accessible** — skip link, focus states, keyboard-operable cards, reduced-motion support
- 📱 **Fully responsive** — desktop, tablet and mobile with a full-screen mobile menu
- ⚡ **Zero dependencies** — semantic HTML, modern CSS, vanilla JS

## 📂 Structure

```
portfolio/
├── index.html          # Single-page site (6 curated sections)
├── css/
│   └── style.css       # Design system + all components
├── js/
│   ├── data.js         # All project & testimonial data
│   └── app.js          # Rendering, filters, tabs, modal, form
└── assets/
    ├── images/         # Design work, logo, portrait
    ├── portraits/      # Portrait set of the creative lead (elijah-01…10)
    └── documents/      # Word / Excel / PowerPoint files, resumes, CV
```

**Brand assets** live in `assets/brand/` — official Orivon mark (`mark.png`), wordmark (`wordmark.png`), favicon set (light + dark browser variants, apple-touch-icon) and OG share image, all generated from the client-supplied master files.

**Sections:** Hero → Selected Work → The Office Studio → Services → Capabilities → About (+ Studio strip + Experience + Resume kit) → Testimonials → Contact

**Planning docs** live in `docs/` — dated session records (brand palette application, reference deconstruction, rebrand plan, free-domain guide).

## 🛠 Tech

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, grid, masonry columns, scroll-driven reveals
- **Vanilla JavaScript** — no frameworks, no build step
- **Deployment** — GitHub Pages

## 🚀 Run locally

```bash
git clone https://github.com/Charliejnr-21/portfolio.git
cd portfolio
python3 -m http.server 8000
# Visit http://localhost:8000
```

---

## 👤 Author

**Elijah Charles Sunday** — Creative Lead, Orivon
- 📧 charliejnr38@gmail.com
- 🐙 [GitHub](https://github.com/Charliejnr-21)
- 📸 [Instagram](https://instagram.com/charliejnr38)
- 🏷️ **Orivon** — Brand Identity · Art Direction · Campaign Design

---

## 📄 License

© 2026 Orivon — Elijah Sunday. All rights reserved.
