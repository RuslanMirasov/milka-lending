export const initParallax = () => {
  const parallax = document.querySelector('[data-parallax]');
  if (!parallax) return;

  const MIN_WIDTH = 1280;
  let ticking = false;

  const updateParallax = () => {
    // отключение на маленьких экранах
    if (window.innerWidth < MIN_WIDTH) {
      parallax.style.transform = '';
      return;
    }

    const rect = parallax.getBoundingClientRect();
    const offset = -rect.top * 0.7; // скорость параллакса

    parallax.style.transform = `translateY(${offset}px)`;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  };

  // первое обновление
  updateParallax();

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', updateParallax);
};
