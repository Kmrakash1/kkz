// Main templates file - now just imports and exports the individual templates
import bannerTemplate from './templates/banner.js';
import heroTemplate from './templates/hero.js';
import featuredAppsTemplate from './templates/featured.js';
import appsTemplate from './templates/apps.js';
import blogTemplate from './templates/blog.js';
import legalTemplate from './templates/legal.js';
import gamesTemplate from './templates/games.js';

// Remove all the old template definitions and replace with this:
const templates = {
    banner: bannerTemplate,
    hero: heroTemplate,
    featuredApps: featuredAppsTemplate,
    apps: appsTemplate,
    blog: blogTemplate,
    legal: legalTemplate,
    games: gamesTemplate
};

window.templates = templates;