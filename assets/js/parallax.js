export const initParallax = () => {
  const parallax = document.querySelector('[data-parallax]');
  if (!parallax) return;

  const MIN_WIDTH = 1280;
  let ticking = false;

  const updateParallax = () => {
    if (window.innerWidth < MIN_WIDTH) {
      parallax.style.transform = '';
      return;
    }

    const offset = window.scrollY * 0.5;

    parallax.style.transform = `translateY(${offset}px)`;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  };

  updateParallax();

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', updateParallax);
};
