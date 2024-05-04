let nav = document.getElementsByClassName('nav')[0];

let responsiveBtn = document.getElementsByClassName('responsive-btn')[0];

responsiveBtn.addEventListener('click', () => {
    nav.classList.toggle('responsive-nav');
})
nav.addEventListener('click', () => {
    nav.classList.remove('responsive-nav');
})