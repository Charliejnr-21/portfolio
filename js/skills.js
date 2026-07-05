/* ========================================
   Skills — Animate Bars on Scroll
   ======================================== */

const Skills = {
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll('.skill-fill');
                    fills.forEach(fill => {
                        const level = fill.getAttribute('data-level');
                        setTimeout(() => {
                            fill.style.width = level;
                        }, 200);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const skillsSection = document.getElementById('skills');
        if (skillsSection) observer.observe(skillsSection);
    }
};
