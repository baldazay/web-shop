'use strict';

const products = [];


let itemAddBtns = document.querySelectorAll('.stock__item-btn');
let totalAmount = document.querySelector('.shop-cart-span');
let cartTotalPrice = document.querySelector('.shop-cart-totalPrice');

itemAddBtns.forEach((button) => {
    button.addEventListener('click', () => {
        totalAmount.innerHTML++;
        let productName = button.closest('.stock__item-wrp').querySelector('h3').innerHTML;
        let productPrice = button.closest('.stock__item-wrp').querySelector('h4').innerHTML;
        let productId = button.dataset.id;
        insertProductDataToArray(productId, productName, productPrice);
        /* cleanCart(cartItemRow); */
        insertItemInCart(products[productId]);
        /* cartTotalPrice.innerHTML = */
    });
});


const cartBlock = document.querySelector('.shop-cart');


function insertItemInCart(object) {
    let price = object.price.slice(1);
    let totalPrice = object.amount * price;
    if (object[productId] === undefined) {
        cartBlockHeader.insertAdjacentHTML('afterend',
            `<div class="shop-cart-row">
                <div class= "shop-cart-col">${object.name}</div>
                <div class="shop-cart-col">${object.amount}</div>
                <div class="shop-cart-col">${price}$</div>
                <div class="shop-cart-col">${totalPrice}$</div>
            </div >`
        )
    } /* else {
        let
    } */
}


function insertProductDataToArray(id, productName, productPrice) {
    if (products[id] === undefined) {
        products[id] =
        {
            name: productName,
            price: productPrice,
            amount: 1
        }
    } else {
        products[id].amount++;
    }
}


let cartBlockHeader = document.querySelector('.shop-cart-header');
let cartItemRow = document.querySelector('.shop-cart-row');

function cleanCart(element) {
    cartBlock.removeChild(element);
}

function calculateWholePrice() {

}