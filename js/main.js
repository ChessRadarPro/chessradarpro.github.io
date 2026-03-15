/* ═══════════════════════════════════════════════════════════════
   ChessRadarPro Website — Main JavaScript
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── Scroll-triggered fade-in ─────────────────────────────── */
    const fadeEls = document.querySelectorAll('.fade-in');
    if (fadeEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });
        fadeEls.forEach(el => io.observe(el));
    }

    /* ── Mobile hamburger toggle ──────────────────────────────── */
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            const isOpen = mobileNav.classList.contains('open');
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile nav on link click
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ── Active nav highlighting on scroll ─────────────────────── */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    if (sections.length && navLinks.length) {
        const onScroll = () => {
            const scrollY = window.scrollY + 120;
            sections.forEach(sec => {
                const top = sec.offsetTop;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');
                if (scrollY >= top && scrollY < top + height) {
                    navLinks.forEach(a => {
                        a.classList.remove('active');
                        if (a.getAttribute('href') === '#' + id) {
                            a.classList.add('active');
                        }
                    });
                }
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ── FAQ accordion ────────────────────────────────────────── */
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const wasOpen = item.classList.contains('open');
            // Close all
            document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
            // Toggle clicked
            if (!wasOpen) item.classList.add('open');
        });
    });

    /* ── Smooth stagger animation on feature cards ─────────────── */
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length) {
        featureCards.forEach((card, i) => {
            card.style.transitionDelay = `${i * 0.08}s`;
        });
    }

});
