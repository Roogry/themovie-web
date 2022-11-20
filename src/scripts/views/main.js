/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import Swiper from 'swiper/bundle';
import logo from '../../images/logo.png';

const { getTrending, getMovies, getSeries } = require('../data/api-service');

const main = () => {
  const togglemobileMenu = $('#toggle-mobile-menu');
  const mobileMenu = $('#mobile-menu');
  const nav = $('nav');

  $('.nav-logo').attr('src', logo);

  getTrending();
  getMovies();
  getSeries();

  const navOnScroll = () => {
    if (window.innerWidth > 768) {
      if (window.pageYOffset > 50) {
        nav.removeClass('md:bg-transparent');
      } else {
        nav.addClass('md:bg-transparent');
      }
    }
  };

  const navMenuOnScoll = () => {
    const sections = $('section');
    const navItems = document.querySelectorAll('.nav-item');
    const navMobileItems = document.querySelectorAll('.nav-item-mobile');

    let index = sections.length;

    while (--index && window.scrollY + 400 < sections[index].offsetTop);

    navItems.forEach((link) => link.classList.remove('bg-gray-900'));
    navMobileItems.forEach((link) => link.classList.remove('bg-gray-900'));

    navItems[index].classList.add('bg-gray-900');
    navMobileItems[index].classList.add('bg-gray-900');
  };

  togglemobileMenu.on('click', () => {
    mobileMenu.toggleClass('hidden');
    $('.ham-icon').toggleClass('hidden');
    $('.close-icon').toggleClass('hidden');
  });

  // eslint-disable-next-line no-new
  new Swiper('.list-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    breakpoints: {
      450: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      710: {
        slidesPerView: 3.4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  window.onscroll = () => {
    navOnScroll();
    navMenuOnScoll();
  };
};

export default main;
