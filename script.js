window.addEventListener("DOMContentLoaded", () => {
  // Reveal Animation
  gsap.from(".hero-content", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
  });

  gsap.from(".glass-nav", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Mobile Menu Logic
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      // Toggle menu visibility
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
      }
    });
  }

  // Sound Effects
  const clickSound = new Audio("sounds/mixkit-cool-interface-click-tone-2568.wav");
  const hoverSound = new Audio("sounds/tunetank.com_mouse-hover.wav");

  clickSound.volume = 0.5;
  hoverSound.volume = 0.2; // Lower volume for hover

  function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log("Audio play failed", e));
  }

  function playHoverSound() {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(e => console.log("Audio play failed", e));
  }

  // Add sound to buttons and links
  document.querySelectorAll("a, button, .project-card, .glass-card, .social-item, .control-arrow").forEach(el => {
    el.addEventListener("click", playClickSound);
    el.addEventListener("mouseenter", playHoverSound);
  });
});
