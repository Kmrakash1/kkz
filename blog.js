// Blog template with developer profile
const blogTemplate = () => `
    <div id="blogSection" class="container py-5">
        <h2 class="text-center section-title">Developer's Blog</h2>
        
        <!-- Developer Profile Card -->
        <div class="developer-profile mb-5">
            <div class="profile-header">
                <div class="profile-banner"></div>
                <div class="profile-avatar">
                    <img src="IMG_20241020_113252_372.webp" alt="Developer Avatar" class="avatar-img">
                </div>
            </div>
            <div class="profile-content text-center">
                <h3 class="dev-name">Aakash <span class="aka">@anonymous</span></h3>
                <div class="dev-title">Full Stack Developer & AI Engineer</div>
                <div class="dev-badges">
                    <span class="dev-badge"><i class="fas fa-code"></i> Full Stack</span>
                    <span class="dev-badge"><i class="fas fa-brain"></i> AI Engineering</span>
                    <span class="dev-badge"><i class="fas fa-shield-alt"></i> Cyber Security</span>
                    <span class="dev-badge"><i class="fas fa-robot"></i> Machine Learning</span>
                </div>
                <p class="dev-bio">
                    Passionate about building secure, scalable applications and exploring the frontiers of AI technology. 
                    Specializing in full-stack development, artificial intelligence, and cybersecurity solutions.
                </p>
                <div class="tech-stack">
                    <h4>Tech Stack</h4>
                    <div class="tech-icons">
                        <span class="tech-icon"><i class="fab fa-python"></i></span>
                        <span class="tech-icon"><i class="fab fa-js"></i></span>
                        <span class="tech-icon"><i class="fab fa-react"></i></span>
                        <span class="tech-icon"><i class="fab fa-node"></i></span>
                        <span class="tech-icon"><i class="fab fa-docker"></i></span>
                        <span class="tech-icon"><i class="fab fa-aws"></i></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Latest Blog Posts -->
        <h3 class="text-center mb-4">Latest Articles</h3>
        <div class="row mt-4">
            <div class="col-md-6 mb-4">
                <div class="card h-100 blog-card">
                    <img src="how-to-install-xapk.webp" class="card-img-top" alt="XAPK Installation Guide">
                    <div class="card-body">
                        <div class="post-meta">
                            <span class="post-category"><i class="fas fa-folder"></i> Tutorials</span>
                            <span class="post-date"><i class="far fa-calendar"></i> Jan 15, 2024</span>
                        </div>
                        <h3 class="card-title h5">What is XAPK and How to Install XAPK?</h3>
                        <p class="card-text text-muted">A comprehensive guide to understanding and installing XAPK files on Android devices.</p>
                        <div class="blog-preview">
                            <div class="preview-content">
                                <p>Key topics covered:</p>
                                <ul>
                                    <li>Understanding XAPK format</li>
                                    <li>Installation requirements</li>
                                    <li>Step-by-step guide</li>
                                    <li>Troubleshooting tips</li>
                                </ul>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary">Read More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card h-100 blog-card">
                    <img src="how-to-install-apks.webp" class="card-img-top" alt="Mod APK Installation Guide">
                    <div class="card-body">
                        <div class="post-meta">
                            <span class="post-category"><i class="fas fa-folder"></i> Guides</span>
                            <span class="post-date"><i class="far fa-calendar"></i> Jan 12, 2024</span>
                        </div>
                        <h3 class="card-title h5">Complete Guide to Installing Mod APKs</h3>
                        <p class="card-text text-muted">Learn the safe and proper way to install modified Android applications.</p>
                        <div class="blog-preview">
                            <div class="preview-content">
                                <p>Topics covered:</p>
                                <ul>
                                    <li>Safety considerations</li>
                                    <li>Installation process</li>
                                    <li>Common issues & fixes</li>
                                    <li>Best practices</li>
                                </ul>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary">Read More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

export default blogTemplate;