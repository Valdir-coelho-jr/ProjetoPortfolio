/* ------------------------ Toggle Navbar Icon ------------------------ */
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

/* ------------------------ Scroll ------------------------ */

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    /* ------------------------ Navbar ------------------------ */
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100)

    /* ------------------------ Remove Navbar Toggle icon Menu ------------------------ */
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

/* ------------------------ Scroll Reveal ------------------------ */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ------------------------ TypedJs ------------------------ */
var typed = new Typed('#multiple-text', {
    strings: ['<i>Programador Web.</i>', '<i>Programador Web.</i>'],
    typeSpeed: 100,
    backSpeed: 100,
    delay: 1000,
    loop: true
});