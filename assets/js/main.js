const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuToggle = $('.menu-toggle');
const headerMobile = $('.header-mobile');
const menuOverlay = $('.menu__overlay');

menuToggle.onclick = () => {
    headerMobile.classList.add('header-mobile--active');
}

menuOverlay.onclick = () => {
    headerMobile.classList.remove('header-mobile--active');
}

