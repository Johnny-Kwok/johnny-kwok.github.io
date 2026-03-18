document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. 手機版選單 (Hamburger Menu) - 強制初始化與修復
       ---------------------------------------------------------------------- */
    const body = document.body;
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    body.classList.remove('menu-open');
    if (navLinks) navLinks.classList.remove('active');

    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            body.classList.toggle('menu-open');
            navLinks.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (body.classList.contains('menu-open') && !e.target.closest('.navbar')) {
            body.classList.remove('menu-open');
            navLinks.classList.remove('active');
        }
    });

    /* ----------------------------------------------------------------------
       2. 影像保護 (Media Protection)
       ---------------------------------------------------------------------- */
    document.addEventListener('contextmenu', (e) => {
        if (e.target.matches('img, video') || e.target.closest('.media-protect')) {
            e.preventDefault();
        }
    }, true);

    document.querySelectorAll('img').forEach(img => {
        img.draggable = false;
    });

    document.querySelectorAll('.media-protect__overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            const link = e.currentTarget.closest('a');
            if (link && e.button === 0) {
                link.click();
            } else {
                const img = overlay.previousElementSibling;
                if (img && img.tagName === 'IMG' && window.openLightbox) {
                    window.openLightbox(img.src);
                }
            }
        });
    });

    /* ----------------------------------------------------------------------
       3. 滾動動畫 (Scroll Animations)
       ---------------------------------------------------------------------- */
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-in, .animate-item').forEach(el => observer.observe(el));

    /* ----------------------------------------------------------------------
       4. 影片預覽 (Video Previews - Home Page)
       ---------------------------------------------------------------------- */
    document.querySelectorAll('.video-preview-card video').forEach(v => {
        v.addEventListener('mouseenter', () => v.play());
        v.addEventListener('mouseleave', () => {
            v.pause();
            v.currentTime = 0;
        });
    });

    /* ----------------------------------------------------------------------
       5. 聯絡表單 (Contact Form)
       ---------------------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                contactForm.style.opacity = '0';
                setTimeout(() => {
                    contactForm.innerHTML = `
                        <div class="glass-card" style="text-align:center; padding: 2rem; border-radius:12px; border:1px solid var(--border);">
                            <h3 style="font-family: var(--font-serif);">Thank You!</h3>
                            <p>Your message has been sent successfully.</p>
                        </div>
                    `;
                    contactForm.style.opacity = '1';
                }, 400);
            }, 1200);
        });
    }

    /* ----------------------------------------------------------------------
       6. 攝影 / 作品集篩選 (Filter)
       ---------------------------------------------------------------------- */
    const galleryContainer = document.querySelector('.photo-gallery-grid, .video-gallery');
    const filterButtons = document.querySelectorAll('.btn-filter');
    
    if (galleryContainer && filterButtons.length) {
        const allItems = Array.from(galleryContainer.children);
        
        function updateFilter(category) {
            allItems.forEach(item => {
                const itemCat = item.dataset.category;
                if (category === 'all' || itemCat === category) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
            if (window.instgrm) window.instgrm.Embeds.process();
        }

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateFilter(btn.dataset.tab || btn.dataset.category);
            });
        });
    }

    /* ----------------------------------------------------------------------
       7. Lightbox 功能 (相簿放大)
       ---------------------------------------------------------------------- */
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox-overlay';
    Object.assign(lightbox.style, {
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(255,255,255,0.95)', zIndex: 10000,
        display: 'none', alignItems: 'center', justifyContent: 'center',
        cursor: 'zoom-out', opacity: 0, transition: 'opacity 0.3s'
    });
    const lbImg = document.createElement('img');
    lbImg.style.maxHeight = '90%'; lbImg.style.maxWidth = '90%';
    lightbox.appendChild(lbImg);
    document.body.appendChild(lightbox);

    window.openLightbox = (src) => {
        lbImg.src = src;
        lightbox.style.display = 'flex';
        setTimeout(() => lightbox.style.opacity = 1, 10);
    };

    lightbox.addEventListener('click', () => {
        lightbox.style.opacity = 0;
        setTimeout(() => lightbox.style.display = 'none', 300);
    });
});
