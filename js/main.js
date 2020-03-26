"use strict";

let burgerMenu = document.querySelector('.burger-menu');
let burgerMenuToggle = document.querySelector('.main-header__toggle');

burgerMenu.classList.remove("burger-menu--nojs");

burgerMenuToggle.addEventListener("click", function() {
    burgerMenu.classList.toggle('burger-menu--closed');
});

burgerMenuToggle.addEventListener("click", function() {
    burgerMenuToggle.classList.toggle('main-header__toggle--closed');
});