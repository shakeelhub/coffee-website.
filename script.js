
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let cartitem= document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartitem.classList.toggle('active');
}

let search= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
}

