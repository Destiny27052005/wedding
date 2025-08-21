const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

const link = document.querySelectorAll('.link');

for (const links of link) {
    links.addEventListener(('click'), () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('show')
    })
}


const main = document.querySelector('main');
const header = document.querySelector('header');
const position = 100;
let increment = 5;
window.addEventListener('scroll', () => {
    const scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition > position) {
        header.style.background = '#fff'
    }
    else {
        header.style.background = 'transparent'
    }
})

