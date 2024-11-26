import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const creationGallerySwiper = () => {
  const desktop = window.innerWidth >= 1200;

  if (desktop) {
    new Swiper('.gallery-list-desk', {
      slidesPerView: 1, // За замовчуванням
      spaceBetween: 30, // Відстань між слайдами
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
      },
    });
  } else {
    new Swiper('.gallery-list-mob', {
      slidesPerView: 1, // За замовчуванням
      spaceBetween: 10, // Відстань між слайдами
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
      },
    });
  }
};

creationGallerySwiper();
