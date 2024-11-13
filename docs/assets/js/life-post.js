import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.js';
import PhotoSwipe from '/assets/js/photoswipe.esm.js';

const lightbox = new PhotoSwipeLightbox({
    bgOpacity: 0.8,
    gallery: '#gallery',
    children: 'a',  // Elements within gallery (slides)
    showHideAnimationType: 'zoom',
    pswpModule: PhotoSwipe
});

window.onload = function () {
    const links = document.querySelectorAll('.flex-item-wrapper');
    links.forEach(link => {
        const img = new Image();
        img.src = link.href;

        img.onload = function () {
            const height = img.naturalHeight;
            const width = img.naturalWidth;

            link.setAttribute('data-pswp-height', height);
            link.setAttribute('data-pswp-width', width);
        };
    });
};

lightbox.init();

document.addEventListener('DOMContentLoaded', function () {
    const toTopButton = document.getElementById('return-to-top');

    // Listen for both scroll and touchmove events
    window.addEventListener('scroll', toggleButtonVisibility);
    window.addEventListener('touchmove', toggleButtonVisibility);

    function toggleButtonVisibility() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    }

    // Smooth scroll back to top
    toTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
