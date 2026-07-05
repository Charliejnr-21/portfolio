/* ========================================
   MS Office Projects — Dynamic Rendering
   ======================================== */

const Projects = {
    init() {
        this.renderWordProjects();
        this.renderExcelProjects();
        this.renderPptProjects();
    },

    renderWordProjects() {
        const grid = document.getElementById('wordGrid');
        if (!grid) return;

        grid.innerHTML = WORD_PROJECTS.map(p => `
            <div class="doc-card reveal-up" data-project-type="word" data-project-id="${p.id}" style="--delay:0s">
                <div class="doc-card-preview">
                    <div class="doc-card-preview-icon">${p.icon}</div>
                    <div class="doc-card-preview-page">
                        <div class="doc-preview-line title"></div>
                        <div class="doc-preview-line long"></div>
                        <div class="doc-preview-line medium"></div>
                        <div class="doc-preview-line long"></div>
                        <div class="doc-preview-line short"></div>
                        <div class="doc-preview-line medium"></div>
                        <div class="doc-preview-line long"></div>
                        <div class="doc-preview-line short"></div>
                    </div>
                </div>
                <div class="doc-card-body">
                    <span class="doc-card-tag">${p.tag}</span>
                    <h3 class="doc-card-title">${p.title}</h3>
                    <p class="doc-card-desc">${p.description.substring(0, 120)}...</p>
                    <div class="doc-card-meta">
                        <span>📅 ${p.year}</span>
                        <span>📄 ${p.pages} pages</span>
                        <span>🏢 ${p.industry}</span>
                    </div>
                </div>
            </div>
        `).join('');

        grid.querySelectorAll('.doc-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-project-id');
                const project = WORD_PROJECTS.find(p => p.id === id);
                if (project) Modal.openProject(project, 'word');
            });
        });
    },

    renderExcelProjects() {
        const grid = document.getElementById('excelGrid');
        if (!grid) return;

        grid.innerHTML = EXCEL_PROJECTS.map(p => {
            const barHeights = [30, 55, 40, 70, 45, 60, 35, 80, 50, 65, 38, 75].sort(() => Math.random() - 0.5);
            return `
            <div class="excel-card reveal-up" data-project-type="excel" data-project-id="${p.id}" style="--delay:0s">
                <div class="excel-card-preview">
                    <div class="excel-dashboard-mini">
                        <div class="excel-mini-kpi">
                            <span class="excel-mini-kpi-label">Revenue</span>
                            <span class="excel-mini-kpi-value">$${(Math.random() * 100).toFixed(1)}K</span>
                            <span class="excel-mini-kpi-change">▲ +${(Math.random() * 20).toFixed(1)}%</span>
                        </div>
                        <div class="excel-mini-kpi">
                            <span class="excel-mini-kpi-label">Growth</span>
                            <span class="excel-mini-kpi-value">${(Math.random() * 30).toFixed(0)}%</span>
                            <span class="excel-mini-kpi-change">▲ +${(Math.random() * 10).toFixed(1)}%</span>
                        </div>
                        <div class="excel-mini-kpi">
                            <span class="excel-mini-kpi-label">Users</span>
                            <span class="excel-mini-kpi-value">${(Math.random() * 5).toFixed(1)}K</span>
                            <span class="excel-mini-kpi-change">▲ +${(Math.random() * 15).toFixed(1)}%</span>
                        </div>
                        <div class="excel-mini-chart">
                            <span class="excel-mini-chart-label">Monthly Trend</span>
                            <div class="excel-mini-chart-bars">
                                ${barHeights.slice(0, 12).map(h => `<div class="excel-mini-bar" style="height:${h}%"></div>`).join('')}
                            </div>
                        </div>
                        <div class="excel-mini-table">
                            <div class="excel-mini-table-row">
                                <div class="excel-mini-table-cell"></div>
                                <div class="excel-mini-table-cell"></div>
                                <div class="excel-mini-table-cell"></div>
                            </div>
                            <div class="excel-mini-table-row">
                                <div class="excel-mini-table-cell"></div>
                                <div class="excel-mini-table-cell"></div>
                                <div class="excel-mini-table-cell"></div>
                            </div>
                            <div class="excel-mini-table-row">
                                <div class="excel-mini-table-cell"></div>
                                <div class="excel-mini-table-cell"></div>
                                <div class="excel-mini-table-cell"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="excel-card-body">
                    <span class="excel-card-tag">${p.tag}</span>
                    <h3 class="excel-card-title">${p.title}</h3>
                    <p class="excel-card-desc">${p.description.substring(0, 120)}...</p>
                    <div class="excel-card-meta">
                        <span>📅 ${p.year}</span>
                        <span>📊 ${p.sheets} sheets</span>
                        <span>📁 ${p.records} records</span>
                    </div>
                </div>
            </div>
        `;}).join('');

        grid.querySelectorAll('.excel-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-project-id');
                const project = EXCEL_PROJECTS.find(p => p.id === id);
                if (project) Modal.openProject(project, 'excel');
            });
        });
    },

    renderPptProjects() {
        const grid = document.getElementById('pptGrid');
        if (!grid) return;

        grid.innerHTML = PPT_PROJECTS.map(p => `
            <div class="ppt-card reveal-up" data-project-type="ppt" data-project-id="${p.id}" style="--delay:0s">
                <div class="ppt-card-preview">
                    <div class="ppt-slide-stack">
                        <div class="ppt-slide">
                            <div class="ppt-slide-title">${p.title.split(' ')[0]}</div>
                            <div class="ppt-slide-body">
                                <div class="ppt-slide-line long"></div>
                                <div class="ppt-slide-line medium"></div>
                                <div class="ppt-slide-line short"></div>
                            </div>
                        </div>
                        <div class="ppt-slide">
                            <div class="ppt-slide-title">${p.category}</div>
                            <div class="ppt-slide-body">
                                <div class="ppt-slide-line medium"></div>
                                <div class="ppt-slide-line long"></div>
                                <div class="ppt-slide-line short"></div>
                            </div>
                        </div>
                        <div class="ppt-slide">
                            <div class="ppt-slide-title">${p.year}</div>
                            <div class="ppt-slide-body">
                                <div class="ppt-slide-line short"></div>
                                <div class="ppt-slide-line long"></div>
                                <div class="ppt-slide-line medium"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ppt-card-body">
                    <span class="ppt-card-tag">${p.tag}</span>
                    <h3 class="ppt-card-title">${p.title}</h3>
                    <p class="ppt-card-desc">${p.description.substring(0, 120)}...</p>
                    <div class="ppt-card-meta">
                        <span>📅 ${p.year}</span>
                        <span class="ppt-slide-count">${p.slides} Slides</span>
                        <span>🏢 ${p.industry}</span>
                    </div>
                </div>
            </div>
        `).join('');

        grid.querySelectorAll('.ppt-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-project-id');
                const project = PPT_PROJECTS.find(p => p.id === id);
                if (project) Modal.openProject(project, 'ppt');
            });
        });
    }
};
