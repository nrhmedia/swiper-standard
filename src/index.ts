// Function to initialize Swipers
function initializeSwipers() {
  document.querySelectorAll('.swiper.is-default').forEach((swiperElement) => {
    const rewindAttribute = swiperElement.getAttribute('swiper-rewind');
    const shouldRewind = rewindAttribute === 'true';

    // Check if Swiper is already initialized to avoid double initialization
    if (!swiperElement.swiper) {
      const swiper = new Swiper(swiperElement, {
        speed: 400,
        navigation: {
          nextEl: swiperElement.querySelector(
            '.swiper-navigation.is-default .swiper-navigation-button.is-next'
          ),
          prevEl: swiperElement.querySelector(
            '.swiper-navigation.is-default .swiper-navigation-button.is-prev'
          ),
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        rewind: shouldRewind,
        spaceBetween: 16, // mobile, default
        slidesPerView: 1, // mobile, default
        breakpoints: {
          992: {
            // desktop
            slidesPerView: 4,
            spaceBetween: 16,
          },
          768: {
            // tablet
            slidesPerView: 3,
            spaceBetween: 16,
          },
          480: {
            // mobile landscape
            slidesPerView: 2,
            spaceBetween: 16,
          },
        },
      });
    }
  });
}

// Function to observe DOM changes and initialize Swiper when necessary
function observeDOMChanges() {
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.matches('.swiper.is-default')) {
            initializeSwipers();
          }
        });
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// Wait for the page content to load before starting observation
document.addEventListener('DOMContentLoaded', function () {
  observeDOMChanges();
  initializeSwipers(); // In case Swiper elements are already present
});
