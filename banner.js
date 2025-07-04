// Banner template module
const bannerTemplate = () => `
    <div class="banner-carousel">
        <div class="container">
            <div id="premiumBanner" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="banner-slide">
                            <img src="new-youtube-premium-features-1280-6d58ec9cf9.webp" alt="YouTube Premium">
                            <div class="banner-content">
                                <h2>YouTube Premium</h2>
                                <p>Watch without ads, download videos, and enjoy background play.</p>
                                <a href="#" class="banner-btn">Get Premium</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="banner-slide">
                            <img src="maxresdefault (1).jpg" alt="CapCut Premium">
                            <div class="banner-content">
                                <h2>CapCut Pro</h2>
                                <p>Professional editing tools with premium effects.</p>
                                <a href="#" class="banner-btn">Try Pro</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="banner-slide">
                            <img src="BrandAssets_Logos_01-Wordmark.jpg" alt="Netflix Premium">
                            <div class="banner-content">
                                <h2>Netflix Premium</h2>
                                <p>Stream in Ultra HD on 4 screens.</p>
                                <a href="#" class="banner-btn">Subscribe Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#premiumBanner" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#premiumBanner" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    </div>
`;

export default bannerTemplate;

