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
        cleanCart();
        products.map(insertItemInCart);
        cartTotalPrice.innerHTML = calculateWholePrice().toFixed(2) + "$";
    });
});


const wholeShopPrice = document.querySelector('.shop-cart-price');


function insertItemInCart(object) {
    let price = object.price.slice(1);
    let totalPrice = object.amount * price;
    wholeShopPrice.insertAdjacentHTML('beforebegin',
        `<div class="shop-cart-row">
            <div class= "shop-cart-col">${object.name}</div>
            <div class="shop-cart-col item-amount">${object.amount}</div>
            <div class="shop-cart-col">${price}$</div>
            <div class="shop-cart-col item-totalPrice">${totalPrice.toFixed(2)}$</div>
        </div >`
    );
}


function insertProductDataToArray(id, productName, productPrice) {
    if (!products[id]) {
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


function cleanCart() {
    let cartItemRows = document.querySelectorAll('.shop-cart-row');
    cartItemRows.forEach((cartItemRow) => {
        cartItemRow.remove();
    });
}

function calculateWholePrice() {
    let sum = 0;
    for (let product of products) {
        if (product) {
            console.log(product);
            sum += product.amount * product.price.slice(1);
        }
    }
    return sum;
}