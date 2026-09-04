/* ============================================================
   INFINITY DESIGNS — Portfolio App
   Sunday Elijah Charles — Creative Designer & MS Office Specialist
   ============================================================ */
(function () {
    'use strict';

    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

    const MAILTO = 'charliejnr38@gmail.com';

    /* ============ Header ============ */
    const header = $('#siteHeader');
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ============ Mobile nav ============ */
    const navToggle = $('#navToggle');
    const mainNav = $('#mainNav');

    function setNav(open) {
        document.body.classList.toggle('nav-open', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    navToggle.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
    $$('a', mainNav).forEach(a => a.addEventListener('click', () => setNav(false)));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.body.classList.contains('nav-open')) setNav(false);
    });

    /* ============ Reveal on scroll ============ */
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                en.target.classList.add('in');
                revealObserver.unobserve(en.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    function observeReveals(ctx = document) {
        $$('.reveal', ctx).forEach(el => revealObserver.observe(el));
    }

    /* ============ Hero counters ============ */
    function animateCount(el) {
        const target = parseInt(el.dataset.count, 10) || 0;
        const suffix = el.dataset.suffix || '';
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.textContent = target + suffix;
            return;
        }
        const dur = 1100;
        const t0 = performance.now();
        const tick = now => {
            const p = Math.min((now - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }
    const statsObserver = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                $$('dd[data-count]', en.target).forEach(animateCount);
                statsObserver.unobserve(en.target);
            }
        });
    }, { threshold: 0.4 });
    const stats = $('.hero-stats');
    if (stats) statsObserver.observe(stats);

    /* ============ Work grid ============ */
    const workGrid = $('#workGrid');

    function renderWork() {
        if (!workGrid) return;
        workGrid.innerHTML = DESIGN_WORK.map((d, i) => `
            <article class="work-card" data-cat="${esc(d.cat)}" data-id="${esc(d.id)}" tabindex="0"
                     role="button" aria-label="View case study: ${esc(d.title)}"
                     style="--d:${(i % 6) * 0.05}s; animation: cardIn .6s var(--ease) both; animation-delay:${(i % 6) * 0.05}s">
                <figure>
                    <img src="${esc(d.img)}" alt="${esc(d.alt || d.title)}" loading="lazy">
                    <span class="view-badge" aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 13 13 3M5.5 3H13v7.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </span>
                </figure>
                <figcaption>
                    <h3>${esc(d.title)}</h3>
                    <span class="work-meta">${esc(d.category)} · ${esc(d.year)}</span>
                </figcaption>
            </article>
        `).join('');

        $$('.work-card', workGrid).forEach(card => {
            card.addEventListener('click', () => openDesignModal(card.dataset.id));
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDesignModal(card.dataset.id); }
            });
        });
    }

    /* Work filters */
    $$('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.filter-btn').forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const f = btn.dataset.filter;
            $$('.work-card', workGrid).forEach(card => {
                card.classList.toggle('is-hidden', f !== 'all' && card.dataset.cat !== f);
            });
        });
    });

    /* ============ Office studio ============ */
    const docGrid = $('#docGrid');
    const TYPE_LABEL = { word: 'Word Document', excel: 'Excel Workbook', ppt: 'PowerPoint Presentation' };

    /* --- CSS mock previews --- */
    function wordMock() {
        return `<div class="mock mock-word" aria-hidden="true">
            <div class="mw-title-bar"></div>
            <div class="mw-headline"></div>
            <div class="mw-line w-90"></div><div class="mw-line w-80"></div><div class="mw-line w-60"></div>
            <div class="mw-table"><span></span><span></span><span></span><span></span><span></span><span></span></div>
            <div class="mw-line w-80"></div><div class="mw-line w-90"></div>
        </div>`;
    }

    function excelMock(i) {
        const hot = [1, 6, 8, 11][i % 4];
        let cells = '<span class="g"></span>';
        for (let r = 0; r < 4; r++) {
            if (r > 0) cells += '<span class="g"></span>';
            for (let c = 0; c < 4; c++) {
                const n = r * 4 + c;
                cells += (n === hot) ? '<span class="a"></span>' : '<span></span>';
            }
        }
        return `<div class="mock mock-excel" aria-hidden="true">
            <div class="me-grid"><span class="h"></span><span class="h"></span><span class="h"></span><span class="h"></span><span class="h"></span>${cells.slice(0)}</div>
            <div class="me-bars">
                <i style="height:38%"></i><i class="hot" style="height:72%"></i><i style="height:52%"></i>
                <i style="height:88%"></i><i class="hot" style="height:64%"></i>
            </div>
        </div>`;
    }

    function pptMock() {
        return `<div class="mock mock-ppt" aria-hidden="true">
            <div class="mp-stack">
                <div class="mp-slide">
                    <div><div class="mp-title"></div><div class="mp-sub"></div></div>
                    <div class="mp-chart">
                        <i style="height:55%"></i><i class="c" style="height:82%"></i><i style="height:44%"></i>
                        <i style="height:66%"></i><i class="c" style="height:92%"></i><i style="height:38%"></i>
                    </div>
                </div>
            </div>
        </div>`;
    }

    const MOCKS = {
        word: (p, i) => wordMock(i),
        excel: (p, i) => excelMock(i),
        ppt: (p, i) => pptMock(i)
    };

    const DATA_SETS = { word: WORD_PROJECTS, excel: EXCEL_PROJECTS, ppt: PPT_PROJECTS };

    function renderDocs(type) {
        if (!docGrid) return;
        const data = DATA_SETS[type];
        docGrid.innerHTML = data.map((p, i) => {
            const count = type === 'word' ? `${p.pages} pages`
                        : type === 'excel' ? `${p.sheets} sheets`
                        : `${p.slides} slides`;
            return `<article class="doc-card" data-type="${type}" data-id="${esc(p.id)}" tabindex="0"
                     role="button" aria-label="View case study: ${esc(p.title)}" style="--d:${(i % 6) * 0.05}s">
                <div class="doc-preview">${MOCKS[type](p, i)}</div>
                <div class="doc-card-body">
                    <p class="doc-tag">${TYPE_LABEL[type]} · ${esc(count)}</p>
                    <h3>${esc(p.title)}</h3>
                    <p class="doc-meta">${esc(p.category)} · ${esc(p.year)}</p>
                    <span class="doc-open">Case study
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 13 13 3M5.5 3H13v7.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </span>
                </div>
            </article>`;
        }).join('');

        $$('.doc-card', docGrid).forEach(card => {
            card.addEventListener('click', () => openOfficeModal(card.dataset.type, card.dataset.id));
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOfficeModal(card.dataset.type, card.dataset.id); }
            });
        });
    }

    $$('.doc-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.doc-tab').forEach(t => {
                t.classList.remove('is-active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('is-active');
            tab.setAttribute('aria-selected', 'true');
            renderDocs(tab.dataset.tab);
        });
    });

    /* ============ Testimonials ============ */
    function renderTestimonials() {
        const grid = $('#testimonialGrid');
        if (!grid) return;
        grid.innerHTML = TESTIMONIALS.map((t, i) => `
            <figure class="testimonial-card reveal" style="--d:${(i % 3) * 0.07}s">
                <div>
                    <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                    <blockquote class="testimonial-quote">&ldquo;${esc(t.quote)}&rdquo;</blockquote>
                </div>
                <figcaption class="testimonial-who">
                    <span class="testimonial-avatar" aria-hidden="true">${esc(t.initials)}</span>
                    <div>
                        <div class="testimonial-name">${esc(t.name)}</div>
                        <div class="testimonial-role">${esc(t.role)}</div>
                    </div>
                </figcaption>
            </figure>
        `).join('');
    }

    /* ============ Modal ============ */
    const modal = $('#modal');
    const modalScroll = $('#modalScroll');
    let lastFocused = null;

    function modalSection(label, text) {
        return text ? `<div class="modal-section"><h4>${esc(label)}</h4><p>${esc(text)}</p></div>` : '';
    }

    function metaGrid(pairs) {
        return `<dl class="meta-grid">${pairs.filter(p => p[1]).map(([k, v]) =>
            `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;
    }

    function buildDesignModal(d) {
        const det = GALLERY_DETAILS[d.id] || {};
        return `
            <div class="modal-media"><img src="${esc(d.img)}" alt="${esc(d.alt || d.title)}"></div>
            <div class="modal-body">
                <p class="doc-tag">${esc(det.category || d.category)} · ${esc(det.year || d.year)}</p>
                <h2>${esc(det.title || d.title)}</h2>
                ${metaGrid([
                    ['Client', det.clientType],
                    ['Industry', det.industry],
                    ['Software', det.software],
                    ['Palette', det.palette],
                    ['Typography', det.typography]
                ])}
                ${modalSection('About the project', det.description)}
                ${modalSection('Objective', det.objective)}
                ${modalSection('Challenge', det.challenges)}
                ${modalSection('Solution', det.solution)}
                <div class="modal-actions">
                    <a class="btn btn-accent" href="mailto:${MAILTO}?subject=${encodeURIComponent('Project enquiry — similar to ' + (det.title || d.title))}">Commission something similar
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 13 13 3M5.5 3H13v7.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                </div>
            </div>`;
    }

    function buildOfficeModal(type, p) {
        const count = type === 'word' ? `${p.pages} pages`
                    : type === 'excel' ? `${p.sheets} sheets · ${p.records} records`
                    : `${p.slides} slides`;
        const features = (p.features && p.features.length)
            ? `<div class="modal-features"><h4 class="mono-label" style="margin-bottom:.8rem">Built with</h4><ul class="tag-list">${p.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul></div>`
            : '';
        const isWord = type === 'word';
        const fileLabel = type === 'word' ? 'Download .docx' : type === 'excel' ? 'Download .xlsx' : 'Download .pptx';

        return `
            <div class="modal-media">${MOCKS[type](p, 0)}</div>
            <div class="modal-body">
                <p class="doc-tag">${TYPE_LABEL[type]} · ${esc(count)}</p>
                <h2>${esc(p.title)}</h2>
                ${metaGrid([
                    ['Industry', p.industry],
                    ['Client', p.clientType],
                    ['Year', p.year],
                    ['Software', p.software],
                    ...(type === 'word' ? [['Deliverables', p.deliverables], ['Palette', p.colorPalette], ['Typography', p.typography]] : [])
                ])}
                ${modalSection('About the project', p.description)}
                ${isWord ? modalSection('Challenge', p.challenges) : ''}
                ${isWord ? modalSection('Solution', p.solution) : ''}
                ${features}
                <div class="modal-actions">
                    <a class="btn btn-accent" href="${esc(p.file)}" download>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2v8m0 0 3.5-3.5M8 10 4.5 6.5M2.5 13.5h11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        ${fileLabel}
                    </a>
                    <a class="btn btn-ghost" href="mailto:${MAILTO}?subject=${encodeURIComponent('Project enquiry — similar to ' + p.title)}">Ask about a similar project</a>
                </div>
            </div>`;
    }

    function openModal(html) {
        lastFocused = document.activeElement;
        modalScroll.innerHTML = html;
        modalScroll.scrollTop = 0;
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        $('.modal-close', modal).focus();
        document.addEventListener('keydown', onModalKey);
    }

    function closeModal() {
        modal.hidden = true;
        modalScroll.innerHTML = '';
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onModalKey);
        if (lastFocused) lastFocused.focus();
    }

    function onModalKey(e) {
        if (e.key === 'Escape') closeModal();
    }

    $$('[data-close]', modal).forEach(el => el.addEventListener('click', closeModal));

    function openDesignModal(id) {
        const d = DESIGN_WORK.find(x => x.id === id);
        if (d) openModal(buildDesignModal(d));
    }

    function openOfficeModal(type, id) {
        const p = DATA_SETS[type].find(x => x.id === id);
        if (p) openModal(buildOfficeModal(type, p));
    }

    /* ============ Contact form (mailto) ============ */
    const form = $('#contactForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            if (!form.reportValidity()) return;
            const data = new FormData(form);
            const subject = `Project enquiry — ${data.get('service')} (via portfolio)`;
            const body = [
                `Name: ${data.get('name')}`,
                `Email: ${data.get('email')}`,
                `Service: ${data.get('service')}`,
                '',
                String(data.get('message')).trim()
            ].join('\n');
            window.location.href = `mailto:${MAILTO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }

    /* ============ Footer year ============ */
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ============ Init ============ */
    renderWork();
    renderDocs('word');
    renderTestimonials();
    observeReveals();
})();
