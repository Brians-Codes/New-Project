document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        once: true
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
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
});
