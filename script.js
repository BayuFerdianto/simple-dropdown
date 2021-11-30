let dropdown = document.querySelector('.dropdown');
let drop = document.querySelector('.sub-menu');

dropdown.addEventListener('click', () => {
    drop.classList.toggle('active');
})