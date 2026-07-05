/* ========================================
   Modal
   ======================================== */

const Modal = {
    overlay: null,
    content: null,
    currentType: null,
    currentId: null,

    init() {
        this.overlay = document.getElementById('projectModal');
        this.content = document.getElementById('modalContent');
        
        document.getElementById('modalClose').addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.close();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.close();
        });
    },

    openGallery(projectId) {
        const data = GALLERY_DETAILS[projectId];
        if (!data) return;

        this.currentType = 'gallery';
        this.currentId = projectId;

        const imagePath = this.getGalleryImagePath(projectId);

        this.content.innerHTML = `
            <img class="modal-image" src="${imagePath}" alt="${data.title}" loading="lazy">
            <div class="modal-body">
                <h2 class="modal-title">${data.title}</h2>
                <div class="modal-details-grid">
                    <div class="modal-detail"><div class="modal-detail-label">Category</div><div class="modal-detail-value">${data.category}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Industry</div><div class="modal-detail-value">${data.industry}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Year</div><div class="modal-detail-value">${data.year}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Client Type</div><div class="modal-detail-value">${data.clientType}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Software</div><div class="modal-detail-value">${data.software}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Palette</div><div class="modal-detail-value">${data.palette}</div></div>
                </div>
                <div class="modal-description">
                    <h4 style="color:var(--primary-light);margin-bottom:8px;font-family:var(--font-display);">Design Objective</h4>
                    <p style="margin-bottom:16px">${data.objective}</p>
                    <h4 style="color:var(--primary-light);margin-bottom:8px;font-family:var(--font-display);">Design Challenges</h4>
                    <p style="margin-bottom:16px">${data.challenges}</p>
                    <h4 style="color:var(--primary-light);margin-bottom:8px;font-family:var(--font-display);">Solution</h4>
                    <p>${data.solution}</p>
                </div>
            </div>
        `;

        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    openProject(project, type) {
        this.currentType = type;
        this.currentId = project.id;

        let detailsHTML = '';
        if (type === 'word') {
            detailsHTML = `
                <div class="modal-details-grid">
                    <div class="modal-detail"><div class="modal-detail-label">Category</div><div class="modal-detail-value">${project.category}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Industry</div><div class="modal-detail-value">${project.industry}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Year</div><div class="modal-detail-value">${project.year}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Client</div><div class="modal-detail-value">${project.clientType}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Pages</div><div class="modal-detail-value">${project.pages}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Software</div><div class="modal-detail-value">${project.software}</div></div>
                </div>
            `;
        } else if (type === 'excel') {
            detailsHTML = `
                <div class="modal-details-grid">
                    <div class="modal-detail"><div class="modal-detail-label">Category</div><div class="modal-detail-value">${project.category}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Industry</div><div class="modal-detail-value">${project.industry}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Year</div><div class="modal-detail-value">${project.year}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Sheets</div><div class="modal-detail-value">${project.sheets}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Records</div><div class="modal-detail-value">${project.records}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Software</div><div class="modal-detail-value">${project.software}</div></div>
                </div>
                <div style="margin-bottom:16px">
                    <h4 style="color:var(--primary-light);margin-bottom:8px;font-family:var(--font-display);">Key Features</h4>
                    <div style="display:flex;flex-wrap:wrap;gap:8px">
                        ${project.features.map(f => `<span class="skill-tag">${f}</span>`).join('')}
                    </div>
                </div>
            `;
        } else if (type === 'ppt') {
            detailsHTML = `
                <div class="modal-details-grid">
                    <div class="modal-detail"><div class="modal-detail-label">Category</div><div class="modal-detail-value">${project.category}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Industry</div><div class="modal-detail-value">${project.industry}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Year</div><div class="modal-detail-value">${project.year}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Slides</div><div class="modal-detail-value">${project.slides}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Client</div><div class="modal-detail-value">${project.clientType}</div></div>
                    <div class="modal-detail"><div class="modal-detail-label">Software</div><div class="modal-detail-value">${project.software}</div></div>
                </div>
                <div style="margin-bottom:16px">
                    <h4 style="color:var(--primary-light);margin-bottom:8px;font-family:var(--font-display);">Key Features</h4>
                    <div style="display:flex;flex-wrap:wrap;gap:8px">
                        ${project.features.map(f => `<span class="skill-tag">${f}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        this.content.innerHTML = `
            <div class="modal-body" style="padding-top:var(--space-3xl)">
                <h2 class="modal-title">${project.icon} ${project.title}</h2>
                ${detailsHTML}
                <div class="modal-description">
                    <h4 style="color:var(--primary-light);margin-bottom:8px;font-family:var(--font-display);">Project Overview</h4>
                    <p style="margin-bottom:16px">${project.description}</p>
                    ${project.challenges ? `<h4 style="color:var(--primary-light);margin-bottom:8px;font-family:var(--font-display);">Design Challenges</h4><p style="margin-bottom:16px">${project.challenges}</p>` : ''}
                    ${project.solution ? `<h4 style="color:var(--primary-light);margin-bottom:8px;font-family:var(--font-display);">Solution</h4><p>${project.solution}</p>` : ''}
                </div>
            </div>
        `;

        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close() {
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    },

    getGalleryImagePath(projectId) {
        const mapping = {
            'eve-wig': 'Eve Wig Flyer.png',
            'millicent': 'Millicent Elegance and Charm.png',
            'thanksgiving': 'Thanksgiving Service May.png',
            'worship': 'Worship Experience.png',
            'marissa': "Marissa's Kitchen 2.png",
            'hotel': 'Hotel Design.png',
            'auditions': 'Call fo Auditions.png',
            'dog-detectives': 'Dog Detectives.png',
            'album': 'Album Back 1.png',
            'childrens-day': 'Childrens day.png',
            'teh-ry': 'Teh_Ry birthday 2.png',
            'birthday-id': 'Birthday Design ID.png',
            'happy-weekend': 'Happy Weekend.png',
            'october': 'OCTOBER DESIGN.jpg',
            'april': 'Month of April.png',
            'designz': 'DESIGNZ 1.jpg'
        };
        return `assets/images/${mapping[projectId] || ''}`;
    }
};
