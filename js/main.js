// Smooth Scrolling Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init('jS774oyqSbaXYSjWm');

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const header = document.getElementById('header');

    // ── UX #6: Nav backdrop ──
    const backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);

    function openMenu() {
        menuToggle.classList.add('active');
        navMenu.classList.add('active');
        backdrop.classList.add('active');
    }
    function closeMenu() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        backdrop.classList.remove('active');
    }

    menuToggle.addEventListener('click', function() {
        navMenu.classList.contains('active') ? closeMenu() : openMenu();
    });
    backdrop.addEventListener('click', closeMenu);

    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                closeMenu();
            }
        });
    });

    // ── UX #9: Active nav — tighter dead zone (50px instead of 100px) ──
    // ── UX #4: Scroll progress bar ──
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', function() {
        // Progress bar
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (scrollTop / docHeight * 100) + '%';

        // Active nav
        let current = '';
        const sections = document.querySelectorAll('section');
        const headerHeight = header.offsetHeight;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50;
            if (scrollTop >= sectionTop && scrollTop < sectionTop + section.offsetHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });

        // ── UX #10: Back-to-top threshold 600px ──
        backToTop.classList.toggle('visible', scrollTop > 600);
    });

    // Back to top
    const backToTop = document.getElementById('backToTop');
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ── UX #7: Collapsible max-height fix via JS ──
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(item => {
        const hdr = item.querySelector('.experience-header, .cert-header');
        const content = item.querySelector('.experience-content, .cert-content');
        const toggleBtn = item.querySelector('.toggle-btn');

        hdr.addEventListener('click', function() {
            const isOpen = content.classList.contains('active');
            if (isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                requestAnimationFrame(() => {
                    content.style.maxHeight = '0';
                    content.classList.remove('active');
                });
            } else {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.addEventListener('transitionend', function onEnd() {
                    content.style.maxHeight = 'none';
                    content.removeEventListener('transitionend', onEnd);
                }, { once: true });
            }
            toggleBtn.textContent = isOpen ? '+' : '−';
        });
    });

    // Project read more accordion
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const detailsCloseBtns = document.querySelectorAll('.details-close-btn');

    function closeOverlay(card) {
        const details = card.querySelector('.project-details');
        const btn = card.querySelector('.read-more-btn');
        if (details) details.classList.remove('active');
        if (btn) btn.textContent = 'Read More';
    }

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.project-card');
            const details = card.querySelector('.project-details');
            const isActive = details.classList.contains('active');
            projectCards.forEach(c => { if (c !== card) closeOverlay(c); });
            if (isActive) {
                closeOverlay(card);
            } else {
                details.classList.add('active');
                this.textContent = 'Read Less';
            }
        });
    });

    detailsCloseBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeOverlay(this.closest('.project-card'));
        });
    });

    // ── UX #2: Close project overlay on outside tap ──
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const details = card.querySelector('.project-details');
            if (details && details.classList.contains('active') && e.target === card) {
                closeOverlay(card);
            }
        });

        // Swipe down to close overlay
        let touchStartY = 0;
        card.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
        card.addEventListener('touchend', e => {
            const details = card.querySelector('.project-details');
            if (details && details.classList.contains('active')) {
                if (e.changedTouches[0].clientY - touchStartY > 60) closeOverlay(card);
            }
        }, { passive: true });
    });

    // Fade in animation on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.project-card, .blog-card, .skill-category').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // ── UX #1: Image skeleton blur-up ──
    document.querySelectorAll('.project-thumbnail').forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => img.classList.add('loaded'));
        }
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.querySelector('.form-status');
    const submitBtn = contactForm.querySelector('.submit-btn');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let isValid = true;

        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));

        if (!name.value.trim()) { showError(name, 'Name is required'); isValid = false; }
        if (!email.value.trim()) { showError(email, 'Email is required'); isValid = false; }
        else if (!isValidEmail(email.value)) { showError(email, 'Please enter a valid email'); isValid = false; }
        if (!message.value.trim()) { showError(message, 'Message is required'); isValid = false; }

        if (isValid) {
            // ── UX #3: Disable button + spinner ──
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span>Sending...';
            formStatus.style.display = 'none';

            emailjs.send('service_z3h81gg', 'template_5pvupg5', {
                name: name.value, email: email.value,
                message: message.value, title: 'Portfolio Contact'
            }).then(() => {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.className = 'form-status success';
                contactForm.reset();
                setTimeout(() => { formStatus.style.display = 'none'; }, 5000);
            }).catch(err => {
                formStatus.textContent = 'Failed to send message. Please try again.';
                formStatus.className = 'form-status error';
                console.error('EmailJS error:', err);
            }).finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                formStatus.style.display = 'block';
            });
        } else {
            formStatus.textContent = 'Please fix the errors above';
            formStatus.className = 'form-status error';
            formStatus.style.display = 'block';
        }
    });

    // ── UX #12: Textarea character counter ──
    const textarea = document.getElementById('message');
    const MAX_CHARS = 500;
    const counter = document.createElement('span');
    counter.className = 'char-counter';
    counter.textContent = `0 / ${MAX_CHARS}`;
    textarea.parentElement.appendChild(counter);
    textarea.addEventListener('input', function() {
        const len = this.value.length;
        if (len > MAX_CHARS) this.value = this.value.slice(0, MAX_CHARS);
        const current = Math.min(len, MAX_CHARS);
        counter.textContent = `${current} / ${MAX_CHARS}`;
        counter.className = 'char-counter' + (current >= MAX_CHARS ? ' at-limit' : current >= MAX_CHARS * 0.8 ? ' near-limit' : '');
    });

    function showError(input, message) {
        input.classList.add('error');
        input.parentElement.querySelector('.error-message').textContent = message;
    }
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
