const handleMobMenu = () => {
  const burgerBtn = document.querySelector('#burger-btn');
  const mobMenu = document.querySelector('#mob-menu');

  burgerBtn.addEventListener('click', () => {
    mobMenu.classList.toggle('open');
  });

  const menuLinks = mobMenu.querySelectorAll('.mob-menu-list-item a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobMenu.classList.remove('open');
    });
  });

  document.addEventListener('pointerdown', e => {
    const clickInside = mobMenu.contains(e.target);
    if (!clickInside) {
      mobMenu.classList.remove('open');
    }
  });
};

handleMobMenu();
