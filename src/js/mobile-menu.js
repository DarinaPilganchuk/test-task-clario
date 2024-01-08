const menuOpenBtn = document.querySelector('[data-menu-open]');
const menuCloseBtn = document.querySelector('[data-menu-close]');
const mobileMenu = document.querySelector('[data-menu]');
const body = document.body;

menuOpenBtn.addEventListener('click', () => {
  modalOperation();
  body.style.overflow = 'hidden';
});

menuCloseBtn.addEventListener('click', () => {
  modalOperation();
  body.style.overflow = 'visible';
});

function modalOperation() {
  mobileMenu.classList.toggle('is-open');
  menuOpenBtn.classList.toggle('hidden');
  menuCloseBtn.classList.toggle('close');
}
