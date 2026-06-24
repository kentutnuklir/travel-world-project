const header = document.querySelector('header');
const navLinks = document.querySelector('nav ul');
const hamburger = document.getElementById('hamburger');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
    });
});