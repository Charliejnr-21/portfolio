/* ========================================
   Gallery — Filters & Interactions
   ======================================== */

const Gallery = {
    init() {
        this.setupFilters();
        this.setupCardEffects();
    },

    setupFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.gallery-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                cards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.classList.remove('hidden');
                        setTimeout(() => card.style.opacity = '1', 10);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.classList.add('hidden'), 300);
                    }
                });
            });
        });
    },

    setupCardEffects() {
        const cards = document.querySelectorAll('.gallery-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const inner = card.querySelector('.gallery-card-inner');
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;

                inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                const inner = card.querySelector('.gallery-card-inner');
                inner.style.transform = '';
            });

            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project-id');
                if (projectId && GALLERY_DETAILS[projectId]) {
                    Modal.openGallery(projectId);
                }
            });
        });
    }
};
