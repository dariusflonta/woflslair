const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 0);
});
window.addEventListener('load', () => {
    if(window.screenTop > 0){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const menu = document.getElementById('navmenu');
const navlist = document.getElementById('navlist');
menu.addEventListener('click', () => {
    navlist.classList.toggle('active');
});

const navlinks = document.querySelectorAll('#navlist li a');
navlinks.forEach( navlink => {
    navlink.addEventListener('click', (e) => {
        e.target.target = "_self";
        navlist.classList.remove('active');
    });
});

const title = document.querySelector('.hero-title');
const introText = document.querySelector('.hero-text p');
const introBtn = document.querySelector('.hero-btn');

function titleSlideInto () {
    title.style.transform = 'translateX(0)';
    title.style.opacity = 1;
    introText.style.transform = 'translateX(0)';
    introText.style.opacity = 1;
    introBtn.style.transform = 'translateY(0)';
    introBtn.style.opacity = 1;
};
setTimeout(titleSlideInto, 1000);