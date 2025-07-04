// Main application logic
let currentPage = 1;
let currentSection = 'home';

document.addEventListener('DOMContentLoaded', () => {
    // Initial page load
    showSection('home');
    
    // Add event listeners for legal page links
    document.querySelectorAll('.legal-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            showLegalPage(page);
        });
    });
});

function showSection(section) {
    currentSection = section;
    
    // Clear all containers
    document.getElementById('bannerContainer').innerHTML = '';
    document.getElementById('heroContainer').innerHTML = '';
    document.getElementById('featuredAppsContainer').innerHTML = '';
    document.getElementById('blogContainer').innerHTML = '';
    document.getElementById('legalContainer').innerHTML = '';

    switch(section) {
        case 'home':
            document.getElementById('bannerContainer').innerHTML = templates.banner();
            document.getElementById('heroContainer').innerHTML = templates.hero();
            document.getElementById('featuredAppsContainer').innerHTML = templates.featuredApps();
            break;
        case 'apps':
            currentPage = 1;
            document.getElementById('featuredAppsContainer').innerHTML = templates.apps(currentPage);
            break;
        case 'games':
            document.getElementById('featuredAppsContainer').innerHTML = templates.games();
            break;
        case 'blog':
            document.getElementById('blogContainer').innerHTML = templates.blog();
            break;
        case 'legal':
            document.getElementById('legalContainer').innerHTML = templates.legal(currentLegalPage);
            break;
    }
}

function showLegalPage(page) {
    currentSection = 'legal';
    document.getElementById('legalContainer').innerHTML = templates.legal(page);
}

// Add this new function for game downloads
window.showGameModInfo = function(gameName, downloadLink = '') {
    document.getElementById('gameModName').textContent = gameName;
    
    // Update the download button href if a link is provided
    const downloadBtn = document.getElementById('gameDownloadBtn');
    if (downloadLink) {
        downloadBtn.href = downloadLink;
        downloadBtn.target = "_blank"; // Open in new tab
    } else {
        downloadBtn.href = "#";
        downloadBtn.target = "";
    }
};

// Make functions available globally
window.changePage = function(pageNumber) {
    currentPage = pageNumber;
    if (currentSection === 'apps') {
        document.getElementById('featuredAppsContainer').innerHTML = templates.apps(currentPage);
    }
};

window.showModInfo = function(appName, badge, downloadLink = '') {
    document.getElementById('modAppName').textContent = appName;
    document.getElementById('modBadge').textContent = badge;
    
    // Update the download button href if a link is provided
    const downloadBtn = document.querySelector('.download-mod-btn');
    if (downloadLink) {
        downloadBtn.href = downloadLink;
        downloadBtn.target = "_blank"; // Open in new tab
    } else {
        downloadBtn.href = "#";
        downloadBtn.target = "";
    }
};