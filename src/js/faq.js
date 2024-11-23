import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-accordion-container', {
  duration: 350,
  showMultiple: true,
  elementClass: 'faq-item',
  triggerClass: 'faq-item-btn',
  panelClass: 'faq-item-description-container',
  onOpen: currElement => {
    const panel = currElement.querySelector('.faq-item-description-container');
    panel.style.maxHeight = panel.scrollHeight + 'px'; // Встановлюємо висоту відкритого елемента
  },
  onClose: currElement => {
    const panel = currElement.querySelector('.faq-item-description-container');
    panel.style.maxHeight = '0'; // Ховаємо елемент
  },
});
