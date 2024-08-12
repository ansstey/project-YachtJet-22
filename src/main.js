(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');

  const toggleMenu = () => {
    const anchors = mobileMenu.querySelectorAll('a[href*="#"]');
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (isMenuOpen) {
      openMenuBtn.classList.remove('js-close-menu');
      openMenuBtn.classList.add('js-open-menu');
      openMenuBtn
        .querySelector('use')
        .setAttribute('href', '/img/icons.svg#icon-open-menu');
      openMenuBtn.setAttribute('aria-expanded', 'false');
      openMenuBtn.querySelector('svg').setAttribute('width', '24');
      openMenuBtn.querySelector('svg').setAttribute('height', '24');
    } else {
      openMenuBtn.classList.remove('js-open-menu');
      openMenuBtn.classList.add('js-close-menu');
      openMenuBtn
        .querySelector('use')
        .setAttribute('href', '/img/icons.svg#icon-icon-close');
      openMenuBtn.setAttribute('aria-expanded', 'true');
      openMenuBtn.querySelector('svg').setAttribute('width', '28');
      openMenuBtn.querySelector('svg').setAttribute('height', '28');
    }

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    if (anchors.length === 0) return;

    if (!isMenuOpen) {
      anchors.forEach(anchor => {
        anchor.addEventListener('click', toggleMenu);
      });
      return;
    }

    anchors.forEach(anchor => {
      anchor.removeEventListener('click', toggleMenu);
    });
  };

  const matchMedia = (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', 'false');
    openMenuBtn.classList.remove('js-close-menu');
    openMenuBtn.classList.add('js-open-menu');
    openMenuBtn
      .querySelector('use')
      .setAttribute('href', '/img/icons.svg#icon-open-menu');
    bodyScrollLock.enableBodyScroll(document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', matchMedia);
})();
