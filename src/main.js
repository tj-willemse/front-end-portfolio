'use strict';

import '../styles/modern.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/about.css';
import '../styles/components/contact.css';
import '../styles/components/featured.css';
import '../styles/components/hero.css';
import '../styles/components/mobile-nav.css';
import '../styles/components/footer.css';
import '../styles/util.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';

mobileNav();
darkMode();

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.featured-projects-img-planets');
  let currentIndex = 0;

  const showNextImage = () => {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
  };

  images.forEach((img) => {
    img.addEventListener('click', showNextImage);
  });
});
