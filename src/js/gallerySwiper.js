import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
