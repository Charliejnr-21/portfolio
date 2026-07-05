/* ========================================
   FAQ Accordion
   ======================================== */

const FAQ = {
    init() {
        document.querySelectorAll('.faq-question').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.parentElement;
                const answer = item.querySelector('.faq-answer');
                const isOpen = item.classList.contains('open');

                // Close all
                document.querySelectorAll('.faq-item').forEach(i => {
                    i.classList.remove('open');
                    i.querySelector('.faq-answer').style.maxHeight = '0';
                });

                // Open clicked (if it was closed)
                if (!isOpen) {
                    item.classList.add('open');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });
    }
};
