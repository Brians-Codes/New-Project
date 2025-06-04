document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        once: true
    });

    const navbar = document.querySelector('.navbar');
    const toTopBtn = document.getElementById('to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        if (window.scrollY > 300) {
            toTopBtn.classList.add('visible');
        } else {
            toTopBtn.classList.remove('visible');
        }
    });

    const parallaxSections = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', () => {
        parallaxSections.forEach(section => {
            const speed = 0.4;
            const offset = window.pageYOffset * speed;
            section.style.backgroundPositionY = `${-offset}px`;
        });
    });

    toTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function activateLink() {
        const scrollPos = window.scrollY + window.innerHeight / 2;
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const active = document.querySelector('.nav-links a[href="#' + section.id + '"]');
                if (active) active.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', activateLink);
    activateLink();
});
