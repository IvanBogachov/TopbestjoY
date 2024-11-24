import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  spaceBetween: 20,
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
});
