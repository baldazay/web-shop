'use strict'

let navBtn = document.querySelector('.header__button');
let navXBtn = document.querySelector('.header__nav-button');
let menu = document.querySelector('.header__nav');

navBtn.addEventListener('click', menuBlock);
navXBtn.addEventListener('click', menuBlock);

function menuBlock() {
    menu.classList.toggle('display-block');
}


let cartBtn = document.querySelector('.shop-cart-link');
let cart = document.querySelector('.shop-cart');
cartBtn.addEventListener('click', () => {
    cart.classList.toggle('display-block');
});

