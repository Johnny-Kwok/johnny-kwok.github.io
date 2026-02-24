/**
 * Portfolio site – 整合優化版
 * 保留原有所有功能，並新增 Lightbox 及手機選單優化
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       Media protection: disable context menu and dragging on img/video
       ---------------------------------------------------------------------- */
    document.addEventListener('contextmenu', (e) => {
        if (e.target.matches('img, video') || e.target.closest('.media-protect')) e.preventDefault();
    }, true);
    document.querySelectorAll('img').forEach((img) => { img.draggable = false; });
    
    document.querySelectorAll('.media-protect__overlay').forEach((overlay) => {
        overlay.addEventListener('click', (e) => {
            const link = e.currentTarget.closest('a');
            if (link && e.button === 0) {
                link.click();
            } else {
                // 【新增：如果不是連結，則是攝影集，觸發 Lightbox】
                const img = overlay.previousElementSibling;
                if (img && img.tagName === 'IMG' && typeof openLightbox === 'function') {
                    openLightbox(img.src);
                }
            }
        });
    });

    /* ----------------------------------------------------------------------
       Nav: hamburger menu
       ---------------------------------------------------------------------- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

        // 【新增：點擊連結後自動收起選單，提升手機版體驗】
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    /* ----------------------------------------------------------------------
       Scroll: animate-in and animate-item
       ---------------------------------------------------------------------- */
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-in, .animate-item').forEach((el) => {
        observer.observe(el);
    });

    /* ----------------------------------------------------------------------
       Video previews: hover to play
       ---------------------------------------------------------------------- */
    document.querySelectorAll('.video-preview-card video').forEach((v) => {
        v.addEventListener('mouseenter', () => { v.play(); });
        v.addEventListener('mouseleave', () => {
            v.pause();
            v.currentTime = 0;
        });
    });

    /* ----------------------------------------------------------------------
       Contact form interaction
       ---------------------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalBtnText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.style.opacity = '0.7';
            btn.style.cursor = 'default';

            // 模擬發送請求
            setTimeout(() => {
                // 【優化：顯示成功訊息而非只是變回文字】
                contactForm.style.transition = 'opacity 0.4s';
                contactForm.style.opacity = '0';
                setTimeout(() => {
                    contactForm.innerHTML = `
                        <div style="text-align:center; padding: 2rem; border: 1px solid var(--border);">
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
       Photography gallery: filter by category
       ---------------------------------------------------------------------- */
    const galleryContainer = document.querySelector('.photo-gallery-grid');
    const filterButtons = document.querySelectorAll('.photo-filters .btn-filter');
    if (galleryContainer && filterButtons.length) {
        const allItems = Array.from(galleryContainer.querySelectorAll('.mosaic-item'));
        function updateGallery(category) {
            allItems.forEach((item) => { item.style.display = 'none'; });
            const filtered = category === 'all'
                ? allItems
                : allItems.filter((item) => item.dataset.category === category);
            filtered.forEach((item) => {
                item.style.display = '';
                galleryContainer.appendChild(item);
            });
        }
        filterButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                filterButtons.forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');
                updateGallery(btn.dataset.category);
            });
        });
        updateGallery('all');
    }

    /* ----------------------------------------------------------------------
       【全新新增：Lightbox 功能】
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
    lbImg.style.maxHeight = '90%';
    lbImg.style.maxWidth = '90%';
    lbImg.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    
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