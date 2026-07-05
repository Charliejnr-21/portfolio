/* ========================================
   Loader
   ======================================== */

const Loader = {
    bar: null,
    init() {
        this.bar = document.getElementById('loaderBarFill');
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15 + 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    document.getElementById('loader').classList.add('hidden');
                    document.body.classList.remove('loading');
                }, 400);
            }
            if (this.bar) this.bar.style.width = progress + '%';
        }, 150);
    }
};
