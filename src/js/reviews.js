import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

let swiperInstance;

function initializeSwiper() {
  const isDesktop = window.innerWidth >= 1024;

  if (!isDesktop) {
    // Ініціалізуємо Swiper на мобільних пристроях
    if (!swiperInstance) {
      swiperInstance = new Swiper('.mySwiper', {
        direction: 'horizontal',
        spaceBetween: 20,
        loop: true,
        slidesPerView: 'auto',
        modules: [Navigation, Keyboard],
        navigation: {
          nextEl: '.reviews-button-next',
          prevEl: '.reviews-button-prev',
        },
      });
    }
  } else {
    // На десктопі знищуємо Swiper і видаляємо класи
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    // Видалення класів тільки в межах секції
    const reviewGrid = document.querySelector('.review-grid');
    if (reviewGrid) {
      reviewGrid.classList.remove('swiper', 'mySwiper');
      reviewGrid.querySelectorAll('.swiper-slide').forEach(element => {
        element.classList.remove('swiper-slide');
      });
      reviewGrid.querySelectorAll('.swiper-wrapper').forEach(element => {
        element.classList.remove('swiper-wrapper');
      });
    }
  }
}

// Виклик функції при завантаженні сторінки
initializeSwiper();

// Обробка зміни розміру вікна
window.addEventListener('resize', initializeSwiper);
