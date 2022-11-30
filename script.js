const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 0);
});

const menu = document.getElementById('navmenu');
const navlist = document.getElementById('navlist');
menu.addEventListener('click', () => {
    navlist.classList.toggle('active');
})