document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. 手機版選單 (Hamburger Menu)
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
       4. 影片預覽 (Video Previews - YouTube AutoPlay on Scroll)
       ---------------------------------------------------------------------- */
       const videoFrames = document.querySelectorAll('.video-wrap iframe');

       const videoObserver = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
               const iframe = entry.target;
   
               if (entry.isIntersecting) {
                   if (!src.includes('autoplay=1')) {
                       iframe.src = src.replace('autoplay=0', 'autoplay=1').replace('autoplay=', 'autoplay=1');
                   }
               } else {
                   if (src.includes('autoplay=1')) {
                       iframe.src = src.replace('autoplay=1', 'autoplay=0');
                   }
               }
           });
       }, {threshold: 0.5 });
   
       videoFrames.forEach(frame => observer.observe(frame));
    

    /* ----------------------------------------------------------------------
       5. 聯絡表單 (Contact Form)
       ---------------------------------------------------------------------- */
    const emailInput = document.getElementById('email');
    const emailList = document.getElementById('email-options');
    const domains = ['gmail.com', 'outlook.com', 'icloud.com', 'yahoo.com.hk', 'qq.com', '163.com', 'sina.com', 'foxmail.com'];

    /* Only on pages with the contact form (index, etc.) — avoids crashing gallery-only pages */
    if (emailInput && emailList) {
        emailInput.addEventListener('input', function() {
            const value = this.value;
            if (!value || value.includes('.com')) {
                emailList.innerHTML = '';
                return;
            }
            let options = '';
            domains.forEach(domain => {
                options += `<option value="${value}@${domain}">${value}@${domain}</option>`;
            });
            emailList.innerHTML = options;
        });
    }
       
    const contactForm = document.getElementById('contactForm');
    const messageInput = document.getElementById('message');
       
    if (contactForm) {
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email.toLowerCase());
        }
       
        if (messageInput) {
            messageInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    contactForm.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                }
            });
        }
      
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
     
            const emailValue = emailInput.value.trim();
       
            if (!validateEmail(emailValue)) {
                alert('請輸入有效的電子郵件地址');
                emailInput.focus();
                return;
            }
               
            const formData = new FormData(contactForm);
            const googleFormUrl = `https://script.google.com/macros/s/AKfycbxdQkqEdrxNLjOpXNMCz7r-oG4JJ91fup9SfgUC7tTgBoxwSgZFk3KOjekd-FfNb4hy/exec`;
      
            fetch(googleFormUrl, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            }).catch(err => console.error('Background send failed:', err));
       
            contactForm.style.transition = 'opacity 0.2s';
            contactForm.style.opacity = '0';
               
            setTimeout(() => {
                contactForm.innerHTML = `
                    <div class="glass-card" style="text-align:center; padding: 2.5rem; border-radius:12px; border:1px solid var(--border); background: rgba(255,255,255,0.05); backdrop-filter: blur(10px);">
                        <h3 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 1rem;">Thank You!</h3>
                        <p style="opacity: 0.8;">Your message has been sent successfully.</p>
                        <p style="opacity: 0.8;">I will get back to you soon.</p>
                    </div>
                `;
                contactForm.style.opacity = '1';
            }, 200);   
        });
    }

    /* ----------------------------------------------------------------------
       6. Photography gallery: filter by category
       ---------------------------------------------------------------------- */
    const galleryContainer = document.querySelector('.photo-gallery-grid');
    const filterButtons = document.querySelectorAll('.photo-filters .btn-filter');
       
    if (galleryContainer && filterButtons.length) {
        const allItems = Array.from(galleryContainer.querySelectorAll('.mosaic-item'));
       
        function shuffleArray(arr) {
            const a = arr.slice();
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }
       
        function restoreOrder() {
            allItems.forEach(item => galleryContainer.appendChild(item));
        }

        function updateGallery(category) {
            /* Reset DOM order first so category view matches HTML order */
            restoreOrder();

            if (category === 'all') {
                const allCategories = [...new Set(allItems.map(item => item.dataset.category).filter(Boolean))];
                const selectedCategories = shuffleArray(allCategories).slice(0, 3);
                const pool = allItems.filter(item => selectedCategories.includes(item.dataset.category));
                if (pool.length === 0) return;
                const selection = shuffleArray(pool).slice(0, 10);

                allItems.forEach(item => { item.style.display = 'none'; });
                selection.forEach(item => {
                    galleryContainer.appendChild(item);
                    item.style.display = '';
                });
            } else {
                allItems.forEach(item => {
                    item.style.display = item.dataset.category === category ? '' : 'none';
                });
            }

            if (window.instgrm) window.instgrm.Embeds.process();
        }
       
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateGallery(btn.dataset.category);
            });
        });
       
        updateGallery('all');
    }

    /* ----------------------------------------------------------------------
       Video gallery: tab switcher (My Work / IG Reels / YouTube)
       ---------------------------------------------------------------------- */
    const myWorkContent = document.getElementById('my-work-content');
    if (myWorkContent) {
        const tabButtons = document.querySelectorAll('.photo-filters .btn-filter[data-tab]');
        const tabPanels = {
            'my-work': document.getElementById('my-work-content'),
            'ig-reels': document.getElementById('ig-reels-content'),
            'youtube': document.getElementById('youtube-content')
        };
        function showTab(tabId) {
            Object.values(tabPanels).forEach(function(panel) {
                if (panel) panel.classList.remove('active');
            });
            tabButtons.forEach(function(b) { b.classList.remove('active'); });
            var panel = tabPanels[tabId];
            var btn = Array.prototype.find.call(tabButtons, function(b) { return b.dataset.tab === tabId; });
            if (panel) panel.classList.add('active');
            if (btn) btn.classList.add('active');
        }
        tabButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                showTab(btn.dataset.tab);
            });
        });
        showTab('my-work');
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
