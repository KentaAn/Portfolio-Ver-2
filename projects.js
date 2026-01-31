window.addEventListener("DOMContentLoaded", () => {
  // Animations
  gsap.from(".projects-section", {
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  // Swiper Init
  initializeSwiper();

  // Sound Effects
  const clickSound = new Audio("sounds/mixkit-cool-interface-click-tone-2568.wav");
  const hoverSound = new Audio("sounds/tunetank.com_mouse-hover.wav");
  clickSound.volume = 0.5;
  hoverSound.volume = 0.2;

  function playClick() { clickSound.currentTime = 0; clickSound.play().catch(e => { }); }
  function playHover() { hoverSound.currentTime = 0; hoverSound.play().catch(e => { }); }

  document.querySelectorAll("a, button, .project-card").forEach(el => {
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
        navLinks.style.zIndex = '1000';
        navLinks.classList.add('mobile-active');
      }
    });
  }
});

function initializeSwiper() {
  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 0, // Adjusted from -70
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: false, // Start simple
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        updateSlideContent(this.realIndex);
      },
      slideChangeTransitionEnd: function () {
        updateSlideContent(this.realIndex);
      },
    },
  });

  function updateSlideContent(realIndex) {
    const slideContent = [
      {
        title: "GAME HONG?",
        paragraph: "Games have always been a part of human life, evolving to suit different situations and preferences. This project introduces 12 famous types of games throughout history.",
        link: "https://www.behance.net/gallery/214623599/GAME-HONG"
      },
      {
        title: "UNI GLOW",
        paragraph: "UNIGLOW is an infographic showcasing various Unilever products. With simple instructions, everyone can have the full experience with ease.",
        link: "https://www.behance.net/gallery/214625737/UNI-GLOW"
      },
      {
        title: "FIESTA VIVA",
        paragraph: "Fiesta Viva is a website for a Mexico-themed festival. The website shows information about the festival itself, the activities, and the interactive shopping cart section.",
        link: "https://www.behance.net/gallery/214626593/FIESTA-VIVA"
      },
      {
        title: "FRACTURED REALITY",
        paragraph: "This project delves into the unsettling experience of a person trapped within the confines of his home. Familiar spaces, once comforting, now distort under the influence of sleep paralysis.",
        link: "https://www.instagram.com/p/DAOVZSKyAAN/"
      },
      {
        title: "SHORT VFX VIDEO",
        paragraph: "Experience a captivating short VFX video that masterfully blends innovation and visual storytelling. This dynamic film brings creativity to life.",
        link: "https://www.instagram.com/p/C8kPgjkSwD6/"
      },
      {
        title: "RON THE 1ST EP",
        paragraph: "This project involves creating a series of visualizer videos for an R&B EP featuring five unique tracks.",
        link: "https://www.instagram.com/p/DNlZd80STfV/?img_index=1"
      },
      {
        title: "THE COFFEE STREET VENDOR",
        paragraph: "The Vietnamese anti-hero embodies those who defy norms and authority. Rooted in everyday struggles—like street vendors—they reflect resilience.",
        link: "https://www.behance.net/gallery/233953231/THE-COFFEE-STREET-VENDOR"
      },
      {
        title: "VJ SET",
        paragraph: "A playland-themed VJ set using familiar assets often associated with childhood. We're giving it a playful adult twist by adding blinking lights and dancing animations.",
        link: "https://www.behance.net/gallery/233955881/VJ-SET"
      },
      {
        title: "HẺM HERTZ",
        paragraph: "HẺM HERTZ visualizes the hidden frequency of my neighborhood. It argues that the 'Joy' of living there is the specific ability to tune into the signal.",
        link: "https://www.instagram.com/p/DTzm9x9ivxr/"
      },
      {
        title: "TSUKUYOMI BRAND",
        paragraph: "A custom-typography logotype “Tsukuyomi”",
        link: "https://www.instagram.com/p/DTzq8pqk4sx/?img_index=1"
      },
      {
        title: "MỘT LÍT NƯỚC MẮT",
        paragraph: "Redesign of the “Một lít nước mắt” book cover",
        link: "https://www.instagram.com/p/DTzyChgk92O/?img_index=1"
      },
      {
        title: "ORBITEK",
        paragraph: "A typographic poster featuring my original typeface",
        link: "https://www.instagram.com/p/DTzt8u_k51w/?img_index=1"
      },
      {
        title: "Ở ĐÂY SƯỚNG THẬT",
        paragraph: "“Ở đây sướng thật” explores the lived experience of growing up within a tightly knit urban alley community in central Saigon.",
        link: "https://www.instagram.com/p/DTzv4rwE9nU/?img_index=1"
      },
    ];

    const titleParams = document.getElementById("project-title");
    const descParams = document.getElementById("project-desc");
    const linkParams = document.getElementById("project-link");

    if (slideContent[realIndex]) {
      if (titleParams) titleParams.textContent = slideContent[realIndex].title;
      if (descParams) descParams.innerHTML = slideContent[realIndex].paragraph;
      if (linkParams) linkParams.href = slideContent[realIndex].link;

      // Animate text change
      gsap.from([titleParams, descParams], {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }
}
