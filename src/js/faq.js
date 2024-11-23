// Імпорт бібліотеки accordion-js та стилів
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Налаштування аккордеону
document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.faq-accordion-container', {
    duration: 250, // Швидкість анімації
    showMultiple: false, // Дозволяє відкритою бути лише одній вкладці
    collapse: true, // Закриває вкладки при повторному натисканні
    elementClass: 'faq-item', // Клас кожного елемента
    triggerClass: 'faq-item-btn', // Клас кнопки-тригера
    panelClass: 'faq-item-description-container', // Клас контейнера з текстом

    // Подія відкриття вкладки
    onOpen: currElement => {
      currElement.classList.add('is-active'); // Додаємо клас активності
      const panel = currElement.querySelector(
        '.faq-item-description-container'
      );
      if (panel) {
        panel.style.maxHeight = panel.scrollHeight + 'px'; // Встановлюємо висоту
        panel.style.visibility = 'visible'; // Робимо панель видимою
      }
    },

    // Подія закриття вкладки
    onClose: currElement => {
      currElement.classList.remove('is-active'); // Видаляємо клас активності
      const panel = currElement.querySelector(
        '.faq-item-description-container'
      );
      if (panel) {
        panel.style.maxHeight = '0'; // Встановлюємо висоту в 0
        panel.style.visibility = 'hidden'; // Ховаємо панель
      }
    },
  });
});
