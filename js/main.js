/* ========================================
   Main — Initialize Everything
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loading');
    
    Loader.init();
    
    setTimeout(() => {
        Navbar.init();
        Hero.init();
        Gallery.init();
        Projects.init();
        Modal.init();
        Skills.init();
        FAQ.init();
        Contact.init();
        Theme.init();
        Cursor.init();
        Particles.init();
        Animations.init();
        
        // Premium effects with slight delay for smooth load
        setTimeout(() => {
            PremiumEffects.init();
        }, 500);
    }, 100);
});
