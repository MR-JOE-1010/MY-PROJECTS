// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // remove toggle icon and navbar when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // sticky header


    // remove toggle icon and navbar when click navbar links (scroll)


    // animation footer on scroll

}