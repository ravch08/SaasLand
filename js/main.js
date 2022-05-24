'use strict';

const header = document.querySelector('header');
const navigation = document.querySelector('nav');
const headerbg = document.querySelector('.header-bg');
const scrollTop = document.querySelector('.scrollTop');
const sliderSection = document.querySelector('#sliders');
const hamburgerMenu = document.querySelector('.hamburger-menu');

const fadeIns = document.querySelectorAll('.fadeIn-up');
const navItems = document.querySelectorAll('.nav-item');
const slideInLefts = document.querySelectorAll('.slideIn-left');
const slideInRights = document.querySelectorAll('.slideIn-right');


// ----- Intersection Observer -------------------------------------------------------------------

const options = {
   threshold: 0.9
};

const appearOptions = {
   threshold: 0.7,
   rootMargin: '-100px 0px -100px 0px'
};

let headerObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {

      !entry.isIntersecting ? header.classList.add('sticky') : header.classList.remove('sticky');
   });
}, options);

let scrollObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {

      !entry.isIntersecting ? scrollTop.classList.add('show') : scrollTop.classList.remove('show');
   })
}, options);

let appearObserver = new IntersectionObserver(entries => {

   entries.forEach(entry => {

      if (!entry.isIntersecting) {
         return;
      } else {
         entry.target.classList.add('appear');
         appearObserver.unobserve(entry.target);
      }
   });
}, appearOptions);

fadeIns.forEach(fadeIn => {
   appearObserver.observe(fadeIn);
});

slideInLefts.forEach(slideInLeft => {
   appearObserver.observe(slideInLeft);
});

slideInRights.forEach(slideInRight => {
   appearObserver.observe(slideInRight);
});

headerObserver.observe(sliderSection);
scrollObserver.observe(sliderSection);


// ----- Event Listeners -------------------------------------------------------------------

scrollTop.addEventListener('click', () => {

   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
});

hamburgerMenu.addEventListener('click', () => {

   headerbg.classList.toggle('visible');
   navigation.classList.toggle('display');
   hamburgerMenu.classList.toggle('close');
});

headerbg.addEventListener('click', () => {

   headerbg.classList.remove('visible');
   navigation.classList.remove('display');
   hamburgerMenu.classList.remove('close');
});

navItems.forEach(navItem => {
   navItems.forEach(item => {

      const dropdownMenu = navItem.querySelector('.dropdown-menu');
      navItem.addEventListener('click', () => {

         // if (item !== navItem) dropdownMenu.classList.remove('open');
         dropdownMenu.classList.toggle('open')
      });
   });
});


// ----- Swiper ----------------------------------------------------------------------------

const swiperTestimonial = new Swiper('#swiper-testimonial', {

   init: true,
   loop: true,
   speed: 1500,
   slidesPerView: 1,
   loopedSlides: 50,
   grabCursor: true,
   spaceBetween: 140,
   centeredSlides: true,
   slidesPerView: "auto",

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   pagination: {
      clickable: 'true',
      dynamicBullets: true,
      el: '.swiper-pagination'
   },

   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   }
});