const handleMobMenu = () => {
  const burgerBtn = document.querySelector('#burger-btn');
  const mobMenu = document.querySelector('#mob-menu');

  const disableScroll = () => {
    console.log('Scroll disabled');
    document.body.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    console.log('Scroll enabled');
    document.body.style.overflow = '';
  };

  const addClickListener = () => {
    document.addEventListener('pointerdown', closeMenuOnClickOutside);
  };

  const removeClickListener = () => {
    document.removeEventListener('pointerdown', closeMenuOnClickOutside);
  };

  burgerBtn.addEventListener('click', () => {
    if (mobMenu.classList.contains('open')) {
      console.log('Closing menu');
      mobMenu.classList.remove('open');
      enableScroll();
      removeClickListener();
    } else {
      console.log('Open menu');
      mobMenu.classList.add('open');
      disableScroll();
      addClickListener();
    }
  });

  const menuLinks = mobMenu.querySelectorAll('.mob-menu-list-item a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobMenu.classList.remove('open');
      enableScroll();
    });
  });

  const closeMenuOnClickOutside = e => {
    const clickInside = mobMenu.contains(e.target);
    if (!clickInside) {
      mobMenu.classList.remove('open');
      enableScroll();
      removeClickListener();
    }
  };
};

handleMobMenu();
