/* ========================================
   PREMIUM INTERACTIONS ENGINE
   Infinity Designs — Full Animation Suite
   ======================================== */

const PremiumEffects = {
    init() {
        this.scrollProgressBar();
        this.magneticButtons();
        this.tiltCards();
        this.spotlightCards();
        this.counterAnimations();
        this.parallaxOnScroll();
        this.smoothScrollEnhanced();
        this.sectionDividers();
        this.staggerGalleryCards();
        this.enhancedModals();
        this.typingEffect();
        this.statusBadges();
        console.log('✨ Premium Effects initialized');
    },

    // === Scroll Progress Bar ===
    scrollProgressBar() {
        const bar = document.createElement('div');
        bar.className = 'scroll-progress';
        bar.style.width = '0%';
        document.body.appendChild(bar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            bar.style.width = scrollPercent + '%';
        }, { passive: true });
    },

    // === Magnetic Buttons ===
    magneticButtons() {
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    },

    // === 3D Tilt Cards ===
    tiltCards() {
        const cards = document.querySelectorAll('.service-card, .doc-card, .excel-card, .ppt-card, .testimonial-card, .client-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (0.5 - y) * 12;
                const rotateY = (x - 0.5) * 12;
                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
                setTimeout(() => card.style.transition = '', 500);
            });
        });
    },

    // === Spotlight Cursor on Cards ===
    spotlightCards() {
        const cards = document.querySelectorAll('.service-card, .doc-card, .excel-card, .ppt-card, .glass-card');
        cards.forEach(card => {
            card.classList.add('spotlight-effect');
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
                card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
            });
        });
    },

    // === Counter Animations ===
    counterAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count')) || 0;
                    const duration = 2000;
                    const start = performance.now();
                    
                    const animate = (now) => {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.round(target * eased);
                        if (progress < 1) requestAnimationFrame(animate);
                        else el.textContent = target;
                    };
                    requestAnimationFrame(animate);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
    },

    // === Parallax on Scroll ===
    parallaxOnScroll() {
        const parallaxElements = document.querySelectorAll('.parallax-layer');
        if (!parallaxElements.length) return;

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            parallaxElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-speed')) || 0.3;
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.style.transform = `translateY(${scrollY * speed * 0.1}px)`;
                }
            });
        }, { passive: true });
    },

    // === Enhanced Smooth Scroll ===
    smoothScrollEnhanced() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (!target) return;
                
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });
    },

    // === Section Dividers ===
    sectionDividers() {
        document.querySelectorAll('.section').forEach((section, i) => {
            if (i > 0) {
                const divider = document.createElement('div');
                divider.className = 'section-divider';
                section.insertBefore(divider, section.firstChild);
            }
        });
    },

    // === Stagger Gallery Card Animations ===
    staggerGalleryCards() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.gallery-card, .doc-card, .excel-card, .ppt-card');
                    cards.forEach((card, i) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, i * 80);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.gallery-grid, .doc-grid, .excel-grid, .ppt-grid').forEach(grid => {
            const cards = grid.querySelectorAll('.gallery-card, .doc-card, .excel-card, .ppt-card');
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
            });
            observer.observe(grid);
        });
    },

    // === Enhanced Modal Animations ===
    enhancedModals() {
        const overlay = document.getElementById('projectModal');
        if (!overlay) return;

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!overlay.classList.contains('active')) return;
            if (e.key === 'Escape') Modal.close();
        });

        // Add scroll lock
        const originalClose = Modal.close.bind(Modal);
        Modal.close = () => {
            originalClose();
            document.body.style.overflow = '';
        };
    },

    // === Typing Effect for Hero ===
    typingEffect() {
        const titleElements = document.querySelectorAll('.hero-title');
        titleElements.forEach((el, i) => {
            const originalText = el.textContent;
            el.textContent = '';
            el.style.borderRight = '2px solid var(--primary-light)';
            
            setTimeout(() => {
                let char = 0;
                const typeInterval = setInterval(() => {
                    el.textContent += originalText[char];
                    char++;
                    if (char >= originalText.length) {
                        clearInterval(typeInterval);
                        setTimeout(() => el.style.borderRight = 'none', 1000);
                    }
                }, 50);
            }, 1500 + (i * 800));
        });
    },

    // === Status Badges ===
    statusBadges() {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;
        
        const detailItems = aboutSection.querySelectorAll('.detail-item');
        detailItems.forEach(item => {
            if (item.textContent.includes('Open to Work')) {
                const badge = document.createElement('span');
                badge.className = 'status-badge available';
                badge.innerHTML = '<span class="pulse-dot"></span> Available';
                item.appendChild(badge);
            }
        });
    }
};
