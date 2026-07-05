/* ========================================
   Cursor Glow
   ======================================== */

const Cursor = {
    init() {
        const glow = document.getElementById('cursorGlow');
        if (!glow || window.innerWidth < 768) return;

        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                glow.style.left = e.clientX + 'px';
                glow.style.top = e.clientY + 'px';
            });
        });
    }
};
