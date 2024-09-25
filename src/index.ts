document.querySelectorAll('.swiper.is-default').forEach((swiperElement) => {
  const rewindAttribute = swiperElement.getAttribute('swiper-rewind');
  const shouldRewind = rewindAttribute === 'true';

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
});
