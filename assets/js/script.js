// 26 - Jan - 2022 

const menuBtn = document.getElementById('menuBtn');
const navBar = document.querySelector('.navbar');

const imageShow = document.querySelector('.mainHomeImage');
const imageSlider = document.querySelectorAll('.image-slider img');

// menu btn open --- close 
menuBtn.addEventListener('click', () => {
    //menuBtn.classList.toggle('fa-times');
    menuBtn.classList.toggle('barRotate');
    navBar.classList.toggle('userClick');
});


// close btn when window scroll
window.addEventListener('scroll', () => {
    menuBtn.classList.remove('barRotate');
    navBar.classList.remove('userClick');
});


imageSlider.forEach(img => {
    img.addEventListener('click', () => {

        imageShow.src = img.getAttribute('src');
    });
});

// swiper-slider functionality... 


let swiper = new Swiper('.reviews-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },

});