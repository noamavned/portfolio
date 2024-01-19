const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const vp = document.querySelector('.viewport');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;
var currentSlide = "Home";


function changeSlide(ls, cs) {
    if(ls == cs) {
        return;
    }
    const element = document.getElementById(cs);
    const lastElement = document.getElementById(ls);
    lastElement.classList.add('hidden');
    element.classList.remove('hidden');
    switch(cs) {
        case "About":
            cs = "About Me";
            break;
        case "SOMP":
            cs = "Some Of My Projects";
    }
    document.title = "Portfolio - " + cs;
}


function toggleMenu(e, slide=null) {
    e.preventDefault();
    isMenuOpen = !isMenuOpen;
    menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
    menu.hidden = !isMenuOpen;
    const s = document.querySelector('.splash');
    s.classList.toggle('splash_open');
    nav.classList.toggle('nav--open');
    if(!s.classList.contains('splash_open')) {
        setTimeout(() => {
            vp.classList.toggle('on__top');
        }, 1000);
    }
    else {
        vp.classList.toggle('on__top');
    }
    if(slide) {
        let lastSlide = currentSlide;
        switch(slide) {
            case "Home":
                currentSlide = "Home";
                break;
            case "About":
                currentSlide = "About";
                break;
            case "SOMP":
                currentSlide = "SOMP";
                break;
            case "Resume":
                currentSlide = "Resume";
                break;
        }
        changeSlide(lastSlide, currentSlide);
    }
}


menuToggle.addEventListener('click', e => {toggleMenu(e);});
const menuLinks = menu.querySelectorAll('.nav__link');
menuLinks.forEach(Link => {
    Link.addEventListener('click', e => {toggleMenu(e, Link.target);});
})

nav.addEventListener('keydown', e => {
    if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
        return;
    }
    const menuLinks = menu.querySelectorAll('.nav__link');
    if (e.keyCode === 9) {
        if (e.shiftKey) {
            if (document.activeElement === menuLinks[0]) {
                menuToggle.focus();
                e.preventDefault();
            }
        } else if (document.activeElement === menuToggle) {
            menuLinks[0].focus();
            e.preventDefault();
        }
    }
});
