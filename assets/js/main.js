const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuToggle = $('.menu-toggle');
const headerMobile = $('.header-mobile');
const menuOverlay = $('.menu__overlay');
const menuPc = $('#menu-pc');
const menuMobile = $('#menu-mobile');
const header = $('.header');
const menuMobileClose = $('.menu__drawer-close-btn');
let ticking = false;

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
    }
});

menuToggle.onclick = () => {
    headerMobile.classList.add('header-mobile--active');
}

menuOverlay.onclick = () => {
    headerMobile.classList.remove('header-mobile--active');
}

menuMobileClose.onclick = () => {
    headerMobile.classList.remove('header-mobile--active');
}

menuMobile.innerHTML = menuPc.innerHTML;

const navbarLinks = $$('.navbar__link');

navbarLinks.forEach(navbarLink => {
    navbarLink.onclick = (e) => {
        $$('.navbar__link--active').forEach(navbarLinkActive => {
            navbarLinkActive.classList.remove('navbar__link--active');
        })
        e.target.classList.add('navbar__link--active');
    }
});
