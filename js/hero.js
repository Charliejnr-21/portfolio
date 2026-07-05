/* ========================================
   Hero — 3D Logo & Holographic Effects
   ======================================== */

const Hero = {
    init() {
        this.setupHolographicCards();
        this.setupParallax();
    },

    setupHolographicCards() {
        const holoCards = document.querySelectorAll('.holo-card');
        holoCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    },

    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const hero = document.querySelector('.hero-content');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                hero.style.opacity = 1 - (scrolled / window.innerHeight);
            }
        }, { passive: true });
    }
};
