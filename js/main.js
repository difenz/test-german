window.addEventListener('load', function () {
  const loadingOverlay = document.querySelector('.loader');
  loadingOverlay.style.display = 'none';
});

let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.header');
let isBurgerMenuOpen = false;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  
  if (!isBurgerMenuOpen) {
      if (prevScrollPos > currentScrollPos) {
          // Скроллим вверх
          header.classList.remove('scroll-up');
      } else {
          // Скроллим вниз
          header.classList.add('scroll-up');
      }
  }
  
  prevScrollPos = currentScrollPos;
});

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
  isBurgerMenuOpen = !isBurgerMenuOpen;
  burgerMenu.classList.toggle('active');
  header.classList.toggle('active');
  menu.classList.toggle('active');
});
