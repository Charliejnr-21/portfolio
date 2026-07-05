/* ========================================
   Contact Form
   ======================================== */

const Contact = {
    init() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span>✓ Message Sent!</span>';
            btn.style.background = 'linear-gradient(135deg, #4ADE80, #22C55E)';
            
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                form.reset();
            }, 3000);
        });
    }
};
