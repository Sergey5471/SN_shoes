const burgerBtn = document.getElementById('burger__btn')
let burgerMenu = document.querySelector('.header__wrapper')
burgerBtn.addEventListener('click', function () {
	burgerMenu.classList.toggle('active')
	burgerBtn.classList.toggle('burger__active')
})

const firstSwiper = new Swiper('.first__swiper', {
	loop: true,
	slidesPerView: 2.8,
	spaceBetween: 40,
	centeredSlides: true,

 	
	
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });