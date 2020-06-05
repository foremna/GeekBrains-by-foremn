var btnBrowse = document.querySelector(".button-browse");
var dropDownMenu = document.querySelector(".drop-down");

btnBrowse.addEventListener("click", function() {
    dropDownMenu.classList.toggle("drop-down--opened");
})

var cartLink = document.querySelector(".cart__link");
var dropDownCart = document.querySelector(".cart__down");

cartLink.addEventListener("click", function() {
    dropDownCart.classList.toggle("cart__down--opened");
})