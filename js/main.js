window.addEventListener('load', function() {
    const loadingOverlay = document.querySelector('.loader');
    loadingOverlay.style.display = 'none';
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    let prevScrollPos = window.pageYOffset;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            // Скроллим вверх
            header.classList.remove('scroll-up');
        } else {
            // Скроллим вниз
            header.classList.add('scroll-up');
        }
        prevScrollPos = currentScrollPos;
    });
});
