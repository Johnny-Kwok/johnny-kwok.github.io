/* ==========================================================================
   Johnny Kwok · Portfolio — Main stylesheet
   ==========================================================================
   Sections:
   1. Variables & Reset
   2. Media protection (images/video)
   3. Animations
   4. Base & Typography
   5. Navbar
   6. Buttons
   7. Sections & About
   8. Work / Portfolio
   9. Contact
  10. Footer
  11. Hamburger (mobile)
  12. Page: Photography & Graphic Design (masonry, filters, back link)
  13. Page: Video gallery (tabs, reels, YouTube)
  14. Page: CV
  15. Swiss design (hero & info bar)
  16. Responsive
   ========================================================================== */

/* ==========================================================================
   1. Variables & Reset
   ========================================================================== */

:root {
    /* Layout & spacing */
    --max-width: 960px;
    --space: 1.5rem;
    --space-lg: 2.5rem;
    --radius: 6px;
    --radius-sm: 4px;
    /* Colors */
    --bg: #f8f8f8;
    --bg-alt: #fff;
    --text: #1a1a1a;
    --text-muted: #5c5c5c;
    --border: #e8e8e8;
    --accent: #1a1a1a;
    /* Swiss / hero variant */
    --swiss-bg: #ececec;
    --swiss-black: #111111;
    --swiss-border: #999999;
    /* Typography */
    --font-sans: 'DM Sans', system-ui, sans-serif;
    --font-serif: 'DM Serif Display', Georgia, serif;
    /* Shadows */
    --shadow-1: 0 1px 3px rgba(0, 0, 0, 0.04);
    --shadow-2: 0 4px 12px rgba(0, 0, 0, 0.06);
    --shadow-hover: 0 12px 28px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

/* ==========================================================================
   2. Media protection (discourage saving images/videos)
   ========================================================================== */

img,
video {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
}

.media-protect {
    position: relative;
    display: block;
}

.media-protect__overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    cursor: pointer; /* parent is often a link */
    /* receives right-click (empty div); left-click forwarded to parent link in JS */
}

/* ==========================================================================
   3. Animations
   ========================================================================== */

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ==========================================================================
   4. Base & Typography
   ========================================================================== */

body {
    font-family: var(--font-sans);
    background: var(--bg);
    color: var(--text);
    font-size: 15px;
    line-height: 1.65;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
}

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--space);
}

h1, h2, h3 { font-family: var(--font-serif); font-weight: 400; }
h1 { font-size: clamp(2rem, 5vw, 3rem); letter-spacing: -0.02em; line-height: 1.15; }
h2 { font-size: 1.2rem; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 1.75rem; }
h3 { font-size: 0.95rem; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 1rem; }

/* ==========================================================================
   5. Navbar
   ========================================================================== */

.navbar {
    background: var(--bg-alt);
    border-bottom: 1px solid var(--border);
    padding: 0.875rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-1);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
}

.navbar .container > * {
    display: flex;
    align-items: center;
}

/* Hamburger: always hidden on desktop (overrides .container > * which would show it) */
.navbar .container > .hamburger {
    display: none !important;
}

.nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.75rem;
}

.nav-links li {
    display: flex;
    align-items: center;
}

.nav-links a {
    color: var(--text);
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.25s ease, transform 0.25s ease;
}

.nav-links a:hover {
    color: var(--text-muted);
    transform: translateY(-1px);
}

.logo {
    display: flex;
    align-items: center;
}
.logo-image {
    height: 42px;
    width: auto;
    display: block;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.logo-image:hover {
    opacity: 0.7;
    transform: scale(1.02);
}

.nav-btn-container {
    margin-left: 0;
}

.nav-view-cv {
    background-color: var(--accent);
    color: #fff !important;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-sm);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: opacity 0.25s ease, transform 0.25s ease;
    text-decoration: none;
    display: inline-block;
}

.nav-view-cv:hover {
    opacity: 0.9;
    transform: translateY(-1px);
}

/* ==========================================================================
   6. Buttons
   ========================================================================== */

.btn {
    display: inline-block;
    background: var(--accent);
    color: #fff;
    padding: 0.7rem 1.4rem;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 500;
    border: none;
    cursor: pointer;
    border-radius: var(--radius-sm);
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.btn:hover {
    opacity: 0.88;
    transform: translateY(-1px);
}

.wbtn {
    margin-top: 1rem;
    display: inline-block;
    background: var(--accent);
    color: #fff;
    padding: 0.65rem 1.35rem;
    text-decoration: none;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 500;
    border: none;
    cursor: pointer;
    border-radius: var(--radius-sm);
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.wbtn:hover { opacity: 0.88; transform: translateY(-1px); }

/* ==========================================================================
   7. Sections & About
   ========================================================================== */

section {
    padding: 4.5rem 0;
    background: var(--bg-alt);
}

section:nth-child(even) { background: var(--bg); }

section .container { position: relative; z-index: 1; }

#about .about-content {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
}

.profile-pic {
    width: 120px;
    height: 120px;
    object-fit: cover;
    flex-shrink: 0;
}

.text-content p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

/* ==========================================================================
   8. Work / Portfolio
   ========================================================================== */

.work-categories {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.work-category {
    border-bottom: 1px solid var(--border);
    padding-bottom: 3rem;
}

.work-category:last-of-type { border-bottom: none; padding-bottom: 0; }

.work-category h3 { margin-bottom: 1.25rem; }

.work-preview,
.mosaic-gallery {
    column-count: 3;
    column-gap: var(--space);
    margin-bottom: 1rem;
}

.work-item,
.mosaic-item {
    break-inside: avoid;
    margin-bottom: var(--space);
    overflow: hidden;
    background: var(--border);
    display: block;
    box-shadow: var(--shadow-2);
    transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.35s ease, opacity 0.5s ease;
}

.work-item.animate-item,
.mosaic-item.animate-item,
.video-entry.animate-item {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.35s ease;
}

.work-item.animate-item.visible,
.mosaic-item.animate-item.visible,
.video-entry.animate-item.visible {
    opacity: 1;
    transform: translateY(0);
}

.work-item .video-wrap,
.mosaic-item .video-wrap {
    position: relative;
    background: #000;
}

.work-item video,
.mosaic-item video {
    width: 100%;
    height: auto;
    display: block;
}

.work-item,
a.mosaic-item {
    text-decoration: none;
    color: inherit;
}

.work-item img,
.mosaic-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.work-item:hover,
.mosaic-item:hover {
    transform: scale(1.03);
    box-shadow: var(--shadow-hover);
}

.work-item:hover img,
.mosaic-item:hover img { transform: scale(1.02); }

.work-item.graphic-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 180px;
    color: var(--text-muted);
    font-size: 12px;
    letter-spacing: 0.05em;
}

.work-item.graphic-placeholder:hover { background: #e0e0e0; }

.video-preview-badge {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 10px;
    letter-spacing: 0.05em;
    padding: 4px 8px;
    font-family: var(--font-sans);
}

.mosaic-placeholder {
    min-height: 200px;
    background: var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    font-size: 12px;
    box-shadow: var(--shadow-2);
}

/* ==========================================================================
   9. Contact
   ========================================================================== */

.contact-form {
    max-width: 400px;
    margin: 0 auto;
    text-align: left;
}

.contact-form label {
    display: block;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
    color: var(--text-muted);
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 0.65rem 0;
    margin-bottom: 1.25rem;
    border: none;
    border-bottom: 1px solid var(--border);
    background: transparent;
    font-family: inherit;
    font-size: 14px;
    transition: border-color 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--text);
}

.contact-form input:invalid:not(:placeholder-shown) { border-bottom: 1px solid #ff4d4d; }
.contact-form input:valid:not(:placeholder-shown) { border-bottom: 1px solid #4CAF50; }

#message { height: 80px; resize: none; }

/* ==========================================================================
  10. Footer
   ========================================================================== */

.footer {
    padding: 2.25rem 0;
    text-align: center;
    border-top: 1px solid var(--border);
    background: var(--bg-alt);
}

.footer p {
    font-size: 12px;
    color: var(--text-muted);
    letter-spacing: 0.02em;
}

.footer.footer-spaced { margin-top: 4rem; }

/* ==========================================================================
  11. Hamburger (mobile nav)
   ========================================================================== */

.hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    font: inherit;
    color: inherit;
    border: none;
    background: none;
}

.hamburger:focus {
    outline: none;
}

.hamburger:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
}

.bar {
    width: 22px;
    height: 2px;
    background: var(--text);
    transition: transform 0.25s ease, opacity 0.25s ease;
    pointer-events: none; /* clicks pass through to button so toggle always works */
}

/* When menu is open: hamburger turns into X */
.hamburger.is-open .bar:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}
.hamburger.is-open .bar:nth-child(2) {
    opacity: 0;
}
.hamburger.is-open .bar:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

/* ==========================================================================
  12. Page: Photography & Graphic Design (masonry, filters, back link)
   ========================================================================== */

.page-header {
    padding-top: 2.25rem;
    margin-bottom: 2.25rem;
}

/* Back button: consistent, decent look on CV, Photography, Video pages */
.back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 0.75rem;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    text-decoration: none;
    font-family: var(--font-sans);
    font-weight: 500;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    background: var(--bg-alt);
    transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.back-link:hover {
    color: var(--text);
    border-color: var(--text-muted);
    background: var(--bg);
    box-shadow: var(--shadow-1);
}

.photo-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 2rem;
}

.photo-filters .btn-filter {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
    padding: 0.5rem 1.2rem;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: var(--font-sans);
    font-weight: 500;
    border-radius: var(--radius-sm);
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.photo-filters .btn-filter:hover,
.photo-filters .btn-filter.active {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
}

/* Photography & Graphic Design: shared masonry layout (CSS columns) */
.page-photography .masonry-gallery,
.page-graphic-design .masonry-gallery {
    column-count: 4;
    column-gap: var(--space);
    margin-bottom: 0;
    padding-bottom: 4rem;
}

.page-photography .masonry-gallery .mosaic-item,
.page-graphic-design .masonry-gallery .mosaic-item {
    break-inside: avoid;
    margin-bottom: var(--space);
    overflow: hidden;
    display: block;
    background: var(--border);
    box-shadow: var(--shadow-2);
}

.page-photography .masonry-gallery .mosaic-item img,
.page-graphic-design .masonry-gallery .mosaic-item img {
    width: 100%;
    height: auto;
    display: block;
}

.page-header .back-link { margin-bottom: 1rem; }
.page-photography .page-header h1,
.page-video .page-header h1,
.page-graphic-design .page-header h1 { margin-top: 0.25rem; }

/* ==========================================================================
  13. Page: Video gallery (tabs, reels, YouTube)
   ========================================================================== */

.video-gallery { padding-bottom: 4rem; }

.video-entry { margin-bottom: 4rem; }
.video-entry:last-child { margin-bottom: 0; }

.video-entry-title {
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    font-family: var(--font-sans);
}

.video-entry .video-wrap { display: inline-block; max-width: 100%; border-radius: var(--radius-sm); overflow: hidden; }
.video-entry video { display: block; width: auto; height: auto; max-width: 100%; }

/* Video tab switcher: hide inactive panels, show active */
.video-tab-content {
    display: none;
    padding-bottom: 4rem;
}
.video-tab-content.active {
    display: block;
}

/* video-wrap: consistent spacing and border-radius for all embeds */
.video-wrap {
    border-radius: var(--radius-sm);
    overflow: hidden;
}
.video-wrap iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
}

/* IG Reels: grid sized to fit Instagram embed, no cropping */
.ig-reels-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
    align-items: start;
}
.reel-card {
    display: flex;
    flex-direction: column;
    gap: 0;
}
.video-wrap--reel {
    width: 100%;
    /* Slightly taller than 9:16 so embed caption/UI isn’t cropped */
    aspect-ratio: 9 / 18;
    background: #000;
}
.video-wrap--reel iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: 0;
}
.reel-stats {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.75rem;
    padding: 0 0.25rem 0 0;
    font-family: var(--font-sans);
    font-size: 11px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
}
.reel-stats-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    flex-shrink: 0;
}
.reel-stats-icon svg {
    display: block;
}
.reel-stats-count {
    font-weight: 500;
}

/* YouTube: 16:9 horizontal grid */
.youtube-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
    gap: var(--space-lg);
}
.video-wrap--youtube {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
}
.video-wrap--youtube iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: 0;
}


/* ==========================================================================
  14. Page: CV
   ========================================================================== */

.cv-page {
    padding: 2rem 0 4rem;
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
}

.cv-page h1 { margin-bottom: 0.5rem; }

.cv-page .subtitle {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 3rem;
}

.cv-section { margin-bottom: 2.5rem; }

.cv-section h2 {
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: var(--text-muted);
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.5rem;
}

.cv-item {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cv-item:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.cv-item-title {
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--text);
    margin-bottom: 0.25rem;
}

.cv-item-meta {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.cv-item-desc {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text);
}

.cv-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.cv-skills span {
    display: inline-block;
    font-size: 0.85rem;
    padding: 0.4rem 1rem;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

.page-cv .back-link { margin-bottom: 1.5rem; }

.page-cv .container { padding-top: 1.5rem; }

.page-cv section { background: transparent !important;}

.page-cv .cv-page { background: transparent !important;}

.page-cv .container { background: transparent !important; }

/* ==========================================================================
   Swiss design (hero & info bar)
   ========================================================================== */

#hero-swiss {
    background: var(--swiss-bg);
    padding: 5rem 0 4rem;
    border-bottom: 1px solid var(--swiss-border);
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 2rem;
    align-items: end;
}

.name-label {
    display: block;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 2rem;
    letter-spacing: 0.5px;
}

.hero-title {
    font-family: var(--font-sans);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -2px;
    margin-bottom: 2rem;
    color: var(--swiss-black);
}

.hero-intro {
    max-width: 420px;
    font-size: 1rem;
    color: #444;
    margin-bottom: 2.5rem;
    line-height: 1.5;
}

.btn-black {
    display: inline-block;
    background: var(--swiss-black);
    color: white;
    padding: 18px 45px;
    text-decoration: none;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.3s;
}

.btn-black:hover { opacity: 0.8; }

.hero-main-img {
    width: 100%;
    filter: grayscale(100%) contrast(1.1);
    display: block;
}

.image-overlay-container { position: relative; }

#info-bar { background: var(--swiss-bg); padding: 4rem 0; }

.info-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 2rem;
    align-items: start;
}

#info-bar .label {
    display: block;
    font-size: 11px;
    font-weight: 900;
    color: #777;
    margin-bottom: 1.5rem;
    letter-spacing: 1.5px;
}

.services-list {
    display: flex;
    gap: 3rem;
}

.s-col {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 16px;
    font-weight: 700;
    color: var(--swiss-black);
}

.follow-box {
    border-left: 1px solid var(--swiss-border);
    padding-left: 2rem;
}

.social-links-minimal {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.social-links-minimal a {
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    color: var(--swiss-black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 0.25rem;
    border-bottom: 1.5px solid var(--swiss-black);
    max-width: 220px;
    transition: opacity 0.2s;
}

.social-links-minimal a:hover { opacity: 0.7; }

/* ==========================================================================
  16. Responsive
   ========================================================================== */

/* Desktop: keep hamburger hidden so only nav links show */
@media (min-width: 769px) {
    .navbar .container > .hamburger,
    .hamburger {
        display: none !important;
    }
}

@media (max-width: 768px) {
    .back-link { padding: 0.45rem 0.85rem 0.45rem 0.65rem; font-size: 11px; }
    .navbar .container { justify-content: space-between; gap: 0; }
    .navbar .container { position: relative; }
    .nav-links {
        display: none !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 101;
        flex-direction: column;
        padding: 1rem;
        background: var(--bg-alt);
        border-bottom: 1px solid var(--border);
        box-shadow: var(--shadow-2);
    }
    body.menu-open .nav-links { display: flex !important; }
    .navbar .container > .hamburger,
    .hamburger {
        display: flex !important;
        position: relative;
        z-index: 102;
        min-width: 44px;
        min-height: 44px;
        cursor: pointer;
        padding: 0.5rem;
        border: none;
        background: transparent;
        -webkit-tap-highlight-color: transparent;
        align-items: center;
        justify-content: center;
    }
    .work-preview,
    .mosaic-gallery { column-count: 2; }
    #about .about-content { flex-direction: column; align-items: center; text-align: center; }

    .page-photography .masonry-gallery,
    .page-graphic-design .masonry-gallery { column-count: 2; }

    .ig-reels-grid { grid-template-columns: 1fr; }

    .hero-grid,
    .info-grid { grid-template-columns: 1fr; }
    .follow-box {
        border-left: none;
        padding-left: 0;
        padding-top: 40px;
        border-top: 1px solid var(--swiss-border);
    }
    .services-list { flex-direction: column; gap: 12px; }
    .nav-btn-container {
        margin-left: 0;
        margin-top: 1rem;
        width: 100%;
        text-align: center;
    }
    .nav-view-cv {
        width: 100%;
        padding: 0.8rem;
    }
}
