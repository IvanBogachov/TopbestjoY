import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

var swiper = new Swiper('.mySwiper', {
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
