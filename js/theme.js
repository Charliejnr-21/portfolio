/* ========================================
   Theme Toggle
   ======================================== */

const Theme = {
    init() {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        // Check saved preference
        const saved = localStorage.getItem('theme');
        if (saved) {
            document.documentElement.setAttribute('data-theme', saved);
        }

        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }
};
