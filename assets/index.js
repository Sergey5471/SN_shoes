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

