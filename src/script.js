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


// Parallax scrolling
let parallaxModel1 = document.getElementById['parallax-model-11'];
let parallaxModel2 = document.getElementById['parallax-model-2'];

function onScroll() {
    const model1 = document.querySelector('.parallax-model-11');
    const model2 = document.querySelector('.parallax-model-2');

    valueScroll = window.scrollY;
    console.log(model1);
    model1.style.paddingTop = valueScroll * 0.07 + 'px';
    // model1.style.transform = `translate(${window.scrollY * 0.7}%, ${window.scrollY * -0.7}%})`;
    model2.style.transform = `translate(${window.scrollY * 0.7}% , ${window.scrollY * -0.7}%})`;
}

function run() {
    document.addEventListener('scroll' , onScroll);
}

// I know that the code could be better.
// If you have some tips or improvement, please let me know.

$('.img-parallax').each(function() {
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
        var speed = img.data('speed');
        var imgY = imgParent.offset().top;
        var winY = $(this).scrollTop();
        var winH = $(this).height();
        var parentH = imgParent.innerHeight();
  
    
        // The next pixel to show on screen      
        var winBottom = winY + winH;
  
        // If block is shown on screen
        if (winBottom > imgY && winY < imgY + parentH) {
            // Number of pixels shown after block appear
            var imgBottom = ((winBottom - imgY) * speed);
            // Max number of pixels until block disappear
            var imgTop = winH + parentH;
            // Porcentage between start showing until disappearing
            var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
        }
        img.css({
            top: imgPercent + '%',
            transform: 'translate(-50%, -' + imgPercent + '%)'
        });
        }
        $(document).on({
        scroll: function () {
            parallaxImg();
        }, ready: function () {
            parallaxImg();
        }
    });
});
