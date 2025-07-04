// Featured apps template
const featuredAppsTemplate = () => `
    <div class="container py-5">
        <h2 class="text-center section-title">Featured Apps</h2>
        <div class="row">
            <!-- YouTube Premium -->
            <div class="col-md-4">
                <div class="app-card">
                    <span class="featured-badge">Premium</span>
                    <img src="youtube.png" alt="YouTube Premium" class="app-icon">
                    <div class="app-title">
                        <h4>YouTube</h4>
                        <span class="premium-badge">Premium</span>
                    </div>
                    <span class="category-badge">Entertainment</span>
                    <p>Ad-free videos, downloads & background play</p>
                    <div class="app-info">
                        <span><i class="fas fa-code-branch"></i> v5.1.0.0</span>
                        <span><i class="fas fa-weight-hanging"></i> 47 MB</span>
                    </div>
                    <button class="download-btn" data-bs-toggle="modal" data-bs-target="#youtubeModal">Download</button>
                </div>
            </div>
            <!-- ChatGPT Premium -->
            <div class="col-md-4">
                <div class="app-card">
                    <span class="featured-badge">Premium</span>
                    <img src="chatgpt.png" alt="ChatGPT Premium" class="app-icon">
                    <div class="app-title">
                        <h4>ChatGPT</h4>
                        <span class="premium-badge">Premium</span>
                    </div>
                    <span class="category-badge">Productivity</span>
                    <p>Advanced AI chat with GPT-4 capabilities</p>
                    <div class="app-info">
                        <span><i class="fas fa-code-branch"></i> v5.1.0.0</span>
                        <span><i class="fas fa-weight-hanging"></i> 47 MB</span>
                    </div>
                    <button class="download-btn" data-bs-toggle="modal" data-bs-target="#chatgptModal">Download</button>
                </div>
            </div>
            <!-- CapCut Pro -->
            <div class="col-md-4">
                <div class="app-card">
                    <span class="featured-badge">Premium</span>
                    <img src="CapCut-MOD-APK4 (1).webp" alt="CapCut Pro" class="app-icon">
                    <div class="app-title">
                        <h4>CapCut Pro</h4>
                        <span class="premium-badge">Pro</span>
                    </div>
                    <span class="category-badge">Video Editor</span>
                    <p>Professional video editing with advanced effects</p>
                    <div class="app-info">
                        <span><i class="fas fa-code-branch"></i> v14.6.0</span>
                        <span><i class="fas fa-weight-hanging"></i> 47 MB</span>
                    </div>
                    <button class="download-btn" data-bs-toggle="modal" data-bs-target="#modInfoModal" 
                            onclick="showModInfo('CapCut Pro', 'Pro', 'https://www.mediafire.com/file/z5jexnc50u72t22/capcut%20v14.6.0%20-%20espacioapk.com.apk/file')">
                        Download Pro
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- YouTube Modal -->
    <div class="modal fade" id="youtubeModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    <div class="mod-info-content">
                        <h3>YouTube Premium</h3>
                        <div class="mod-badge">Premium</div>
                        <div class="mod-features">
                            <h4>Premium Features</h4>
                            <ul class="feature-list">
                                <li><i class="fas fa-check-circle"></i> Ad-free Viewing</li>
                                <li><i class="fas fa-check-circle"></i> Background Play</li>
                                <li><i class="fas fa-check-circle"></i> Video Downloads</li>
                                <li><i class="fas fa-check-circle"></i> High Quality Streaming</li>
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
                            <a href="https://getmodsapk.com/youtube-premium-free-apk-mod/download" target="_blank" class="download-mod-btn">
                                <i class="fas fa-download"></i> Download Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ChatGPT Modal -->
    <div class="modal fade" id="chatgptModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    <div class="mod-info-content">
                        <h3>ChatGPT Premium</h3>
                        <div class="mod-badge">Premium</div>
                        <div class="mod-features">
                            <h4>Premium Features</h4>
                            <ul class="feature-list">
                                <li><i class="fas fa-check-circle"></i> GPT-4 Access</li>
                                <li><i class="fas fa-check-circle"></i> No Usage Limits</li>
                                <li><i class="fas fa-check-circle"></i> Priority Response</li>
                                <li><i class="fas fa-check-circle"></i> Advanced Features</li>
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
                            <a href="https://getmodsapk.com/chatgpt-free-premium-apk/download/113326" target="_blank" class="download-mod-btn">
                                <i class="fas fa-download"></i> Download Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Spotify Modal -->
    <div class="modal fade" id="spotifyModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    <div class="mod-info-content">
                        <h3>Spotify Premium</h3>
                        <div class="mod-badge">Premium</div>
                        <div class="mod-features">
                            <h4>Premium Features</h4>
                            <ul class="feature-list">
                                <li><i class="fas fa-check-circle"></i> Ad-free Music</li>
                                <li><i class="fas fa-check-circle"></i> Offline Downloads</li>
                                <li><i class="fas fa-check-circle"></i> High Quality Audio</li>
                                <li><i class="fas fa-check-circle"></i> Unlimited Skips</li>
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

export default featuredAppsTemplate;