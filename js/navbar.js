/* ========================================
   Navbar
   ======================================== */

const Navbar = {
    navbar: null,
    hamburger: null,
    navLinks: null,
    sections: null,

    init() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('navHamburger');
        this.navLinks = document.getElementById('navLinks');
        this.sections = document.querySelectorAll('.section, .hero');

        // Scroll effect
        window.addEventListener('scroll', () => this.onScroll(), { passive: true });

        // Hamburger toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMobile());
        }

        // Close mobile on link click
        this.navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.navLinks.classList.remove('mobile-open');
                this.hamburger.classList.remove('active');
            });
        });

        this.onScroll();
    },

    onScroll() {
        // Navbar background
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        // Active section
        let current = '';
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    },

    toggleMobile() {
        this.navLinks.classList.toggle('mobile-open');
        this.hamburger.classList.toggle('active');
    }
};
