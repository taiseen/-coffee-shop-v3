// 26 - Jan - 2022 

const menuBtn = document.getElementById('menuBtn');
const navBar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {

    //menuBtn.classList.toggle('fa-times');
    menuBtn.classList.toggle('barRotate');
    navBar.classList.toggle('userClick');
});


window.addEventListener('scroll', () => {

    menuBtn.classList.remove('barRotate');
    navBar.classList.remove('userClick');
});