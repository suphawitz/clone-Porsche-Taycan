// ===== Script for edut using =====

// Create an Active nav link on scroll Active menu
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('nav li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('nav_active');
                document.querySelector('nav li a[href*=' + id + ']') .classList.add('nav_active');
            });
        };
    });
};