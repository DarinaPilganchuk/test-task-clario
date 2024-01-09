import './js/mobile-menu';
import './js/switch-tab';
import './js/slider';
import './js/modal';

//Додавання addEventListener на кнопку та виведення в консоль кількість кліків
let buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
  let clickCount = 0;

  button.addEventListener('click', function () {
    clickCount++;
    console.log('Клік ' + clickCount + ' на кнопку: ' + button.innerText);
  });
});

//Виведення в консоль тексту Feature Shown при доскоролі до секції
let aboutSection = document.getElementById('about');

function handleScroll() {
  let rect = aboutSection.getBoundingClientRect();

  // Перевіряємо, чи секція "about" видима в поточному вікні перегляду
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    console.log('Feature Shown');
    window.removeEventListener('scroll', handleScroll); // Видаляємо обробник подій скролу
  }
}

window.addEventListener('scroll', handleScroll);
