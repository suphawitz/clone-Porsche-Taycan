// ===== Script for edit using =====

// Create an class Active nav link on scroll Active menu
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

// Slider in SlickJs
$(document).ready(function(){
    $('.model-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.model-data-slider').slick({
        centerMode: true,
        infinite: false,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
                }
            }
        ]
    });

    $('.model-slider .slick-prev').html('<i class="fa-solid fa-angle-left"></i>');
    $('.model-slider .slick-next').html('<i class="fa-solid fa-angle-right"></i>');
});
