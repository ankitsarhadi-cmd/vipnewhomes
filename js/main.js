/* ============================================================
   VIP NEW HOMES — Main JS
   ============================================================ */

// ── Navbar scroll effect ───────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Mobile hamburger ───────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const spans     = hamburger.querySelectorAll('span');

function openMenu() {
    navLinks.classList.add('open');
    spans[0].style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity = '0';
    spans[2].style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
    document.body.style.overflow = 'hidden';
}
function closeMenu() {
    navLinks.classList.remove('open');
    spans.forEach(s => s.style.cssText = '');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// ── Scroll-in animation ────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity  = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.project-card, .benefit-card, .review-card').forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
});

// ── Contact form ───────────────────────────────────────────
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('.btn-submit');
        btn.textContent     = '✓ Registered! We\'ll be in touch soon.';
        btn.style.background  = '#16a34a';
        btn.style.borderColor = '#16a34a';
        btn.disabled = true;
        form.querySelectorAll('input, select, textarea').forEach(f => f.disabled = true);
    });
}
