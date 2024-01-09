document.addEventListener('DOMContentLoaded', function () {
  const triggerElement = document.getElementById('trigger-element');
  const modalContainer = document.getElementById('modal-container');
  const modalConfirm = document.getElementById('modal-confirm');
  const modalCancel = document.getElementById('modal-cancel');

  // Додавання обробника події mousemove на елемент
  triggerElement.addEventListener('mousemove', function () {
    setTimeout(() => {
      modalContainer.style.display = 'block';
    }, 1000);
    // Заблокування прокрутки
    document.body.style.overflow = 'hidden';
  });

  // Додавання обробника для кнопки підтвердження
  modalConfirm.addEventListener('click', function () {
    closeModal();
  });

  // Додавання обробника для кнопки відміни
  modalCancel.addEventListener('click', function () {
    closeModal();
  });

  // Функція для закриття модального вікна
  function closeModal() {
    modalContainer.style.display = 'none';
    // Розблокування прокрутки
    document.body.style.overflow = 'auto';
  }
});
