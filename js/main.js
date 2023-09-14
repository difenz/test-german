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

const openModalButtons = document.querySelectorAll(".show-case-button");
const closeModalButtons = document.querySelectorAll(".close-modal-btn");
const modalContainers = document.querySelectorAll(".modal");

openModalButtons.forEach(button => {
  button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
      setTimeout(() => {
          modal.classList.add("show");
      }, 10); // Добавляем небольшую задержку перед добавлением класса "show" для анимации
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.classList.remove("show");
      setTimeout(() => {
          modal.style.display = "none";
      }, 300); // Добавляем небольшую задержку перед скрытием модального окна для завершения анимации
  });
});

const modal = document.getElementById('modal1');
const slider = modal.querySelector('.slider');
const sliderItems = modal.querySelectorAll('.slider-item');
const prevButton = modal.querySelector('.prev-slide');
const nextButton = modal.querySelector('.next-slide');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    updateSlider();
});

updateSlider();


const modal1 = document.getElementById('modal1');
const body = document.body;

function disableBodyScroll() {
    const scrollY = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
}

function enableBodyScroll() {
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const modal1 = document.getElementById(modalId);
        modal1.classList.add("show");
        modal1.classList.add("modal-overlay"); // Добавляем класс для размытого фона
        isModalOpen = true; // Устанавливаем, что модальное окно открыто
        disableBodyScroll(); // Блокируем прокрутку body
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const modal1 = document.getElementById(modalId);
        modal1.classList.remove("show");
        modal1.classList.remove("modal-overlay"); // Удаляем класс для размытого фона
        isModalOpen = false; // Устанавливаем, что модальное окно закрыто
        enableBodyScroll(); // Разблокируем прокрутку body
    });
});
