window.addEventListener("DOMContentLoaded", () => {
  // Animations
  gsap.from(".contact-content", {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.2
  });

  // Hover Effects for Social Items
  document.querySelectorAll('.social-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, { y: -5, duration: 0.3, ease: 'power2.out' });
      playHover();
    });
    item.addEventListener('mouseleave', () => {
      gsap.to(item, { y: 0, duration: 0.3, ease: 'power2.out' });
    });
    item.addEventListener('click', playClick);
  });

  // Sound Effects
  const clickSound = new Audio("sounds/mixkit-cool-interface-click-tone-2568.wav");
  const hoverSound = new Audio("sounds/tunetank.com_mouse-hover.wav");
  clickSound.volume = 0.5;
  hoverSound.volume = 0.2;

  function playClick() { clickSound.currentTime = 0; clickSound.play().catch(e => { }); }
  function playHover() { hoverSound.currentTime = 0; hoverSound.play().catch(e => { }); }

  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("click", playClick);
    el.addEventListener("mouseenter", playHover);
  });

  // Mobile Menu
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      const isFlex = getComputedStyle(navLinks).display === 'flex';
      if (isFlex && navLinks.classList.contains('mobile-active')) {
        navLinks.style.display = 'none';
        navLinks.classList.remove('mobile-active');
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.right = '20px';
        navLinks.style.background = 'rgba(20, 20, 20, 0.95)';
        navLinks.style.padding = '2rem';
        navLinks.style.borderRadius = '20px';
        navLinks.style.border = '1px solid rgba(255,255,255,0.1)';
        navLinks.classList.add('mobile-active');
        navLinks.style.zIndex = '1000';
      }
    });
  }
});
