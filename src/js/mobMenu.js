const handleMobMenu = () => {
  const burgerBtn = document.querySelector('#burger-btn');
  const mobMenu = document.querySelector('#mob-menu');
  const menuLinks = mobMenu.querySelectorAll('.mob-menu-list-item a');

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    mobMenu.classList.add('open');
    disableScroll();
    document.addEventListener('click', closeMenuOnClickOutside);
  };

  const closeMenu = () => {
    mobMenu.classList.remove('open');
    enableScroll();
    document.removeEventListener('click', closeMenuOnClickOutside);
  };

  const toggleMenu = () => {
    if (mobMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const closeMenuOnClickOutside = event => {
    if (!mobMenu.contains(event.target) && !burgerBtn.contains(event.target)) {
      closeMenu();
    }
  };

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  burgerBtn.addEventListener('click', toggleMenu);
};

handleMobMenu();
