/* ========================================
   Scroll Animations
   ======================================== */

const Animations = {
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
            observer.observe(el);
        });
    }
};
