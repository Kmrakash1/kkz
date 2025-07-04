// Games template with popular titles
const gamesTemplate = () => `
    <div class="container py-5">
        <h2 class="text-center section-title">Popular Games</h2>
        <div class="row mt-4">
            <!-- GTA San Andreas -->
            <div class="col-md-4 mb-4">
                <div class="game-card">
                    <div class="game-banner">
                        <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/12120/header.jpg" alt="GTA San Andreas" class="game-img">
                    </div>
                    <div class="game-content">
                        <h3>GTA San Andreas</h3>
                        <div class="game-info">
                            <span><i class="fas fa-gamepad"></i> Action</span>
                            <span><i class="fas fa-download"></i> 2.5GB</span>
                        </div>
                        <p>Experience the classic open-world action game on mobile.</p>
                        <button class="download-now-btn" data-bs-toggle="modal" data-bs-target="#gameModInfoModal" 
                           onclick="showGameModInfo('GTA San Andreas', 'https://www.mediafire.com/file/6jmdd2ib0g03kr7/gta%20san%20andreas%20mod%20v2.11.277%20-%20espacioapk.com.apk/file')">
                            Download Now
                        </button>
                    </div>
                </div>
            </div>

            <!-- GTA Vice City -->
            <div class="col-md-4 mb-4">
                <div class="game-card">
                    <div class="game-banner">
                        <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/12110/header.jpg" alt="GTA Vice City" class="game-img">
                    </div>
                    <div class="game-content">
                        <h3>GTA Vice City</h3>
                        <div class="game-info">
                            <span><i class="fas fa-gamepad"></i> Action</span>
                            <span><i class="fas fa-download"></i> 1.8GB</span>
                        </div>
                        <p>Welcome to the 80s in this classic crime adventure.</p>
                        <button class="download-now-btn" data-bs-toggle="modal" data-bs-target="#gameModInfoModal" 
                           onclick="showGameModInfo('GTA Vice City', 'https://www.mediafire.com/file/6jmdd2ib0g03kr7/gta%20san%20andreas%20mod%20v2.11.277%20-%20espacioapk.com.apk/file')">
                            Download Now
                        </button>
                    </div>
                </div>
            </div>

            <!-- GTA 4 -->
            <div class="col-md-4 mb-4">
                <div class="game-card">
                    <div class="game-banner">
                        <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/12210/header.jpg" alt="GTA 4" class="game-img">
                    </div>
                    <div class="game-content">
                        <h3>GTA 4 Mobile</h3>
                        <div class="game-info">
                            <span><i class="fas fa-gamepad"></i> Action</span>
                            <span><i class="fas fa-download"></i> 3GB</span>
                        </div>
                        <p>Liberty City comes to mobile in this fan-made port.</p>
                        <button class="download-now-btn" data-bs-toggle="modal" data-bs-target="#gameModInfoModal" 
                           onclick="showGameModInfo('GTA 4 Mobile', 'https://www.mediafire.com/file/eq042b72t11in8z/GTA%204%20Mobile%20(Fanmade)%20v1.0%20-%20espacioapk.com.apk/file')">
                            Download Now
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bully: Anniversary Edition -->
            <div class="col-md-4 mb-4">
                <div class="game-card">
                    <div class="game-banner">
                        <img src="Bully_Anniversary_Edition01.webp" alt="Bully" class="game-img">
                    </div>
                    <div class="game-content">
                        <h3>Bully: Anniversary Edition</h3>
                        <div class="game-info">
                            <span><i class="fas fa-gamepad"></i> Action/Adventure</span>
                            <span><i class="fas fa-download"></i> 2GB</span>
                        </div>
                        <p>Rule the school in this classic Rockstar title.</p>
                        <button class="download-now-btn" data-bs-toggle="modal" data-bs-target="#gameModInfoModal" 
                           onclick="showGameModInfo('Bully: Anniversary Edition', 'https://www.mediafire.com/folder/nwfpmtq3qokuk/bull')">
                            Download Now
                        </button>
                    </div>
                </div>
            </div>

            <!-- Minecraft -->
            <div class="col-md-4 mb-4">
                <div class="game-card">
                    <div class="game-banner">
                        <img src="https://www.minecraft.net/content/dam/games/minecraft/key-art/SUPM_Game-Image_One-Vanilla_672x400.jpg" 
                             alt="Minecraft" class="game-img">
                    </div>
                    <div class="game-content">
                        <h3>Minecraft</h3>
                        <div class="game-info">
                            <span><i class="fas fa-gamepad"></i> Sandbox</span>
                            <span><i class="fas fa-download"></i> 150MB</span>
                        </div>
                        <p>Create, explore, and survive in this beloved sandbox game.</p>
                        <button class="download-now-btn" data-bs-toggle="modal" data-bs-target="#gameModInfoModal" 
                           onclick="showGameModInfo('Minecraft', 'https://www.mediafire.com/file/9d1px6juvoqf0dk/MC%20v1.21.92%20-%20espacioapk.com.apk/file')">
                            Download Now
                        </button>
                    </div>
                </div>
            </div>

            <!-- NBA 2K20 -->
            <div class="col-md-4 mb-4">
                <div class="game-card">
                    <div class="game-banner">
                        <img src="a7dd0dedddec05fcfa6d1d279efd323c.webp" alt="NBA 2K20" class="game-img">
                    </div>
                    <div class="game-content">
                        <h3>NBA 2K20</h3>
                        <div class="game-info">
                            <span><i class="fas fa-gamepad"></i> Sports</span>
                            <span><i class="fas fa-download"></i> 3.5GB</span>
                        </div>
                        <p>Experience the most realistic basketball simulation on mobile.</p>
                        <button class="download-now-btn" data-bs-toggle="modal" data-bs-target="#gameModInfoModal" 
                           onclick="showGameModInfo('NBA 2K20', 'https://www.mediafire.com/folder/jtgrros7q7oor/nk2')">
                            Download Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Game Mod Info Modal -->
    <div class="modal fade" id="gameModInfoModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    <div class="mod-info-content">
                        <h3 id="gameModName">Game Name</h3>
                        <div class="game-details">
                            <div class="detail-item">
                                <i class="fas fa-code-branch"></i>
                                <span>Version: 2025.3.1</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-calendar-alt"></i>
                                <span>Updated: March 2025</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-user"></i>
                                <span>Publisher: Apprium</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-tag"></i>
                                <span>Price: Free</span>
                            </div>
                        </div>
                        <div class="telegram-invite">
                            <div class="telegram-icon">
                                <i class="fab fa-telegram"></i>
                            </div>
                            <h4>Join Our Telegram Channel</h4>
                            <p>Get instant updates for latest games</p>
                            <a href="https://t.me/apprium" target="_blank" class="telegram-btn">
                                Join Now <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <a href="#" class="download-game-btn" id="gameDownloadBtn">
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

export default gamesTemplate;