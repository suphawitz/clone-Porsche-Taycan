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

    // Header info slider
    $('.model-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Model & Data slider
    $('.model-data-slider').slick({
        dots: true,
        infinite: false,
        // centerPadding: '-60px',
        slidesToScroll: 1,
        slidesToShow: 2,
        // centerMode: true,
        variableWidth: true,
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

    // Highlight slider
    $('.highlight-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });
   
    $('.highlight-info')
        .on('init', function(event, slick) {
            $('.highlight-info .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            focusOnSelect: false,
            infinite: false,
            centerMode: false,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
               }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
           }
            }]
        });
   
    $('.highlight-slider').on('afterChange', function(event, slick, currentSlide) {
        $('.highlight-info').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.highlight-info .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.highlight-info .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
   
    $('.highlight-info').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
   
        $('.highlight-slider').slick('slickGoTo', goToSingleSlide);
    });

    $('.slider .slick-prev').html('<i class="fa-solid fa-angle-left"></i>');
    $('.slider .slick-next').html('<i class="fa-solid fa-angle-right"></i>');

});
