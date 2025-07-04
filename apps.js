// Apps page template with pagination
const appsPageData = {
    1: [
        {
            name: "CapCut Pro",
            badge: "Pro",
            icon: "CapCut-MOD-APK4 (1).webp",
            category: "Video Editor",
            description: "Professional video editing with advanced effects",
            downloads: "10M+",
            rating: "4.8",
            downloadLink: "https://www.mediafire.com/file/z5jexnc50u72t22/capcut%20v14.6.0%20-%20espacioapk.com.apk/file"
        },
        {
            name: "KineMaster",
            badge: "Pro",
            icon: "KineMaster Pro MOD APK4 (1).webp",
            category: "Video Editor",
            description: "Professional multi-layer video editor",
            downloads: "5M+",
            rating: "4.6",
            downloadLink: "https://www.mediafire.com/file/gsdgwwqfe5pwzgw/KineMaster%20Pro%20v7.6.24.34812.GP%20-%20espacioapk.com.apk/file"
        },
        {
            name: "Netflix",
            badge: "Premium",
            icon: "netflix (2).png",
            category: "Entertainment",
            description: "Stream movies and shows in 4K HDR",
            downloads: "100M+",
            rating: "4.9",
            downloadLink: "https://www.mediafire.com/file/juo8xhcdwqy1015/PlayHUB%20v1.2.26%20-%20espacioapk.com.apk/file"
        },
        {
            name: "Kuku TV",
            badge: "Premium",
            icon: "kuku-tv-mod-apk.webp",
            category: "Entertainment",
            description: "Regional content streaming platform",
            downloads: "1M+",
            rating: "4.5",
            downloadLink: "https://getmodsapk.com/kuku-tv-mod-apk/download"
        },
        {
            name: "VN Editor",
            badge: "Pro",
            icon: "VN-MOD-APK8.webp",
            category: "Video Editor",
            description: "Easy-to-use video editor with pro features",
            downloads: "3M+",
            rating: "4.7",
            downloadLink: "https://www.mediafire.com/file/ypqok1k8qfqrpne/VN%20Premium%20v2.4.1%20-%20espacioapk.com.apk/file"
        },
        {
            name: "Adobe Lightroom",
            badge: "Premium",
            icon: "lightroom.png",
            category: "Photo Editor",
            description: "Professional photo editing and presets",
            downloads: "50M+",
            rating: "4.8",
            downloadLink: "https://www.mediafire.com/file/kdodi8emef8g1yi/Lightroom%20Premium%20v10.3.2%20-%20%20espacioapk.com.apk/file"
        }
    ],
    2: [
        {
            name: "CapCut Premium",
            badge: "Premium",
            icon: "CapCut  MOD APK7 (2).webp",
            category: "Video Editor",
            description: "Ultimate video editing suite with all features",
            downloads: "15M+",
            rating: "4.9",
            downloadLink: "https://www.mediafire.com/file/6uv26jd0k6yx4m9/capcut%20chino%20(Original)%20v16.4.0%20-%20espacioapk.com.apk/file"
        },
        {
            name: "Crunchyroll",
            badge: "Premium",
            icon: "CrunchyRoll Premium APK (1)1.webp",
            category: "Anime",
            description: "Ad-free anime streaming platform",
            downloads: "50M+",
            rating: "4.7",
            downloadLink: "https://getmodsapk.com/crunchyroll-hack-premium-apk/download"
        },
        {
            name: "Truecaller",
            badge: "Gold",
            icon: "truecaller-mod-apk-5.webp",
            category: "Communication",
            description: "Advanced caller ID and spam blocking",
            downloads: "500M+",
            rating: "4.6",
            downloadLink: "https://filecr.com/android/truecaller-mod-apk-15137/?id=249310010000"
        },
        {
            name: "CapCut VPN",
            badge: "Pro",
            icon: "vpn.png",
            category: "Security",
            description: "Secure VPN for CapCut users",
            downloads: "1M+",
            rating: "4.5",
            downloadLink: "https://www.mediafire.com/file/w0fqniqkegltns9/expressvpn%20v11.88.0%20-%20espacioapk.com.apk/file"
        },
        {
            name: "Disney+ Hotstar",
            badge: "Premium",
            icon: "hotstar-mod-apk.webp",
            category: "Entertainment",
            description: "Stream Disney+ content and sports",
            downloads: "100M+",
            rating: "4.8",
            downloadLink: "https://getmodsapk.com/vip-disney-plus-hotstar-free-mod-apk/download/109271"
        },
        {
            name: "VMake",
            badge: "Pro",
            icon: "Vmake MOD APK (1)7.webp",
            category: "Video Editor",
            description: "Professional video effects and transitions",
            downloads: "5M+",
            rating: "4.6",
            downloadLink: "https://getmodsapk.com/vmake-mod-apk/download"
        }
    ]
};

let filteredApps = null;

const createAppCard = (app) => `
    <div class="col-md-4 mb-4">
        <div class="app-card">
            <span class="featured-badge">Updated</span>
            <img src="${app.icon}" alt="${app.name}" class="app-icon">
            <div class="app-title">
                <h4>${app.name}</h4>
                <span class="premium-badge">${app.badge}</span>
            </div>
            <span class="category-badge">${app.category}</span>
            <p>${app.description}</p>
            <div class="app-info">
                <span><i class="fas fa-download"></i> ${app.downloads}</span>
                <span><i class="fas fa-star"></i> ${app.rating}</span>
            </div>
            <button class="download-btn" data-bs-toggle="modal" data-bs-target="#modInfoModal" 
                    onclick="showModInfo('${app.name}', '${app.badge}', '${app.downloadLink || ''}')">
                Download ${app.badge}
            </button>
        </div>
    </div>
`;

const appsTemplate = (currentPage = 1) => `
    <div class="container py-5">
        <h2 class="text-center section-title">Premium Apps</h2>
        
        <!-- Search Bar -->
        <div class="search-container mb-4">
            <div class="input-group">
                <input type="text" class="form-control search-input" placeholder="Search apps..." id="appSearchInput">
                <button class="btn btn-primary search-btn" onclick="searchApps()">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>

        <div class="row" id="appsContainer">
            ${(filteredApps || appsPageData[currentPage]).map(app => createAppCard(app)).join('')}
        </div>
        
        <div class="pagination-container text-center mt-4">
            <button class="btn ${currentPage === 1 ? 'btn-primary' : 'btn-outline-primary'} mx-2" onclick="changePage(1)">1</button>
            <button class="btn ${currentPage === 2 ? 'btn-primary' : 'btn-outline-primary'} mx-2" onclick="changePage(2)">2</button>
        </div>
    </div>

    <!-- Mod Info Modal -->
    <div class="modal fade" id="modInfoModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    <div class="mod-info-content">
                        <h3 id="modAppName">App Name</h3>
                        <div class="mod-badge" id="modBadge">Premium</div>
                        <div class="mod-features">
                            <h4>Mod Features</h4>
                            <ul class="feature-list">
                                <li><i class="fas fa-check-circle"></i> Ads Removed</li>
                                <li><i class="fas fa-check-circle"></i> Premium Features Unlocked</li>
                                <li><i class="fas fa-check-circle"></i> No Subscription Required</li>
                                <li><i class="fas fa-check-circle"></i> All Premium Content Access</li>
                            </ul>
                        </div>
                        <div class="telegram-invite">
                            <div class="telegram-icon">
                                <i class="fab fa-telegram"></i>
                            </div>
                            <h4>Join Our Telegram Channel</h4>
                            <p>Get instant updates for latest mod apps</p>
                            <a href="https://t.me/apprium" target="_blank" class="telegram-btn">
                                Join Now <i class="fas fa-arrow-right"></i>
                            </a>
                            <a href="#" class="download-mod-btn">
                                <i class="fas fa-download"></i> Download Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

// Add this function to the global scope through window object
window.searchApps = function() {
    const searchTerm = document.getElementById('appSearchInput').value.toLowerCase();
    const allApps = [...appsPageData[1], ...appsPageData[2]];
    
    if (searchTerm === '') {
        filteredApps = null;
        changePage(1);
        return;
    }
    
    filteredApps = allApps.filter(app => 
        app.name.toLowerCase().includes(searchTerm) ||
        app.category.toLowerCase().includes(searchTerm) ||
        app.description.toLowerCase().includes(searchTerm)
    );
    
    document.getElementById('appsContainer').innerHTML = appsTemplate(1);
};

export default appsTemplate;