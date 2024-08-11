(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const header = document.querySelector('.header'); 
  const toggleMenu = () => {
    const anchors = mobileMenu.querySelectorAll('a[href*="#"]');
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';

    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

    mobileMenu.classList.toggle('is-open');


    if (isMenuOpen) {
      header.classList.remove('is-open');
    } else {
      header.classList.add('is-open');
    }

 
    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    if (anchors.length === 0) return;

    if (!isMenuOpen) {
      anchors.forEach(anchor => {
        anchor.addEventListener('click', toggleMenu);
      });
    } else {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', toggleMenu);
      });
    }
  };


  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 375px)').addEventListener('change', e => {
    if (!e.matches) return;

    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('js-open-menu');
  const menuIcon = document.getElementById('menu-icon');

  menuButton.addEventListener('click', function() {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
  
      menuButton.setAttribute('aria-expanded', 'false');
      menuIcon.querySelector('use').setAttribute('href', '/img/symbol-defs-header.svg#icon-open-menu');
    } else {
    
      menuButton.setAttribute('aria-expanded', 'true');
      menuIcon.querySelector('use').setAttribute('href', '/img//img/icons.svg#icon-icon-close');
    }
  });
});
