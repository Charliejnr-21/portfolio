/* ========================================
   Floating Particles
   ======================================== */

const Particles = {
    init() {
        const container = document.getElementById('particlesContainer');
        if (!container) return;

        const count = window.innerWidth < 768 ? 15 : 30;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = particle.style.height = (Math.random() * 3 + 1) + 'px';
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            container.appendChild(particle);
        }
    }
};
