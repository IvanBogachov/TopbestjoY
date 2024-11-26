// Слідкуємо за прокруткою сторінки
window.addEventListener('scroll', function () {
  var scrollButton = document.querySelector('.top');

  // Показуємо або ховаємо кнопку залежно від позиції скролу
  if (window.scrollY > 1000) {
    scrollButton.style.display = 'flex';
  } else {
    scrollButton.style.display = 'none';
  }
});

// Обробник кліку на кнопку "Наверх"
document.querySelector('.top').addEventListener('click', function (event) {
  event.preventDefault(); // Запобігаємо можливій дефолтній поведінці

  // Прокручуємо сторінку до верху з плавною анімацією
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Забезпечує плавність прокрутки
  });
});
