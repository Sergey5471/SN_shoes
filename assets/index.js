const burgerBtn = document.getElementById('burger__btn')
let burgerMenu = document.querySelector('.header__wrapper')
burgerBtn.addEventListener('click', function () {
	burgerMenu.classList.toggle('active')
	burgerBtn.classList.toggle('burger__active')
})

const footerBurgerBtn = document.getElementById('footer__burger__btn')
let footerBurgerMenu = document.querySelector('.footer__wrapper')
footerBurgerBtn.addEventListener('click', function () {
	footerBurgerMenu.classList.toggle('active')
	footerBurgerBtn.classList.toggle('burger__active')
})

// const galleryItem1 = document.getElementById('gallery__img-1')
// galleryItem1.addEventListener('click', function () {
// 	galleryItem1.classList.toggle('gallery__window')
// })

// const galleryItem2 = document.getElementById('gallery__img-2')
// galleryItem2.addEventListener('click', function () {
// 	galleryItem2.classList.toggle('gallery__window')
// })

// const galleryItem3 = document.getElementById('gallery__img-3')
// galleryItem3.addEventListener('click', function () {
// 	galleryItem3.classList.toggle('gallery__window')
// })

// const galleryItem4 = document.getElementById('gallery__img-4')
// galleryItem4.addEventListener('click', function () {
// 	galleryItem4.classList.toggle('gallery__window')
// })

// const galleryItem5 = document.getElementById('gallery__img-5')
// galleryItem5.addEventListener('click', function () {
// 	galleryItem5.classList.toggle('gallery__window')
// })

// const galleryItem6 = document.getElementById('gallery__img-6')
// galleryItem6.addEventListener('click', function () {
// 	galleryItem6.classList.toggle('gallery__window')
// })

// const styleItem1 = document.getElementById('style__item-1')
// styleItem1.addEventListener('click', function () {
// 	styleItem1.classList.toggle('gallery__window')
// })

// const styleItem2 = document.getElementById('style__item-2')
// styleItem2.addEventListener('click', function () {
// 	styleItem2.classList.toggle('gallery__window')
// })

// const styleItem3 = document.getElementById('style__item-3')
// styleItem3.addEventListener('click', function () {
// 	styleItem3.classList.toggle('gallery__window')
// })